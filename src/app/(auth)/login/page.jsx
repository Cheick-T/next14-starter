import { handleGithubLogin } from "@/lib/action";

const Login = () => {

  return (


    <div>
      <form action = {handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
};

export default Login;


