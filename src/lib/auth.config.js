//import { signIn } from "./auth";

export const authConfig = {
    pages : {
        signIn : "/login",
    },
    providers : [],
    callbacks : {
    async jwt({token, user}){
        if(user){
            token.id = user.id,
            token.isAdmin = user.isAdmin
        }
        //console.log("--------------in jwT------------------------------");
        //console.log(token);
        //console.log(user.isAdmin);
        return token;

    },

    async session({session, token}){
        if(token){
            session.user.id = token.id;
            session.user.isAdmin = token.isAdmin;
        }
        //console.log("--------------TOKEN------------------------------");
        //console.log(token);
        return session;

    },

    authorized ({auth, request}){
        //console.log("--------------AT-------------------------------");
        //console.log(auth);
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnBlogPanel = request.nextUrl?.pathname.startsWith("/blog");
        const isOnLoginPanel = request.nextUrl?.pathname.startsWith("/login");

        //Only admin can reach the admin dashbord
        if(isOnAdminPanel && !user?.isAdmin){ 
            return false;
        }

        //Only auth users can reach the blog page
        if(isOnBlogPanel && !user){ 
            return false;
        }

        //Only unauth users can reach the login page
        
        if(isOnLoginPanel && user){ 
            return Response.redirect(new URL("/", request.nextUrl));
        }


        return true;

        }
    }


}