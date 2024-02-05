import { NewButton } from "../components/NewButton.tsx";

export default function Login(){
    return(
        <>
        <div class="login-div">


        <form class="form">
        <h1>Welcome Back :)</h1>
            <p>Email ID :</p>
            <input type="text" />   
            <p>Password :</p>
            <input type="text" /> <br />
           <button>Log in</button> <br />
           <a href="">Forget Password ?</a>
           <p>Don't have an account ?</p>
           <a href="signup">Sign Up</a>

        </form>

        <NewButton />
        
        </div>
        </>
    );
}