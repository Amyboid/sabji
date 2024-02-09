
export default function Login(){
    return(
        <>
        <div class="login-signup-div">


        <form class="form">
        <h1>Welcome Back :)</h1><br />
            <p>Email ID :</p>
            <input type="text" /><br />
            <p>Password :</p>
            <input type="text" /> <br /> <br />
           <button class="log-sign-butt">Log in</button> <br /> <br />
           <a href="">Forget Password ?</a> <br />
           <p>Don't have an account ?</p> 
           <a href="signup">Create Account</a>

        </form>

        <div class="pic-div">
            {/* <img src="/img/veg.png" alt="" />  */}
        </div>

        
        
        </div>
        </>
    );
}