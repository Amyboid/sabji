
export default function Login(){
    return(
        <>
        <div class="login-signup-div posdiv">


        <form class="form">
        <h1>Welcome Back :)</h1><br />
            <input type="text" placeholder="Email ID..." /><br /><br /><br />
            <input type="text" placeholder="Password..." /> <br /> 
           <button class="log-sign-butt">Log in</button>  <br />
           <a href="">Forget Password ?</a> 
           <p>Don't have an account ?</p> 
           <a href="signup">Create Account</a>

        </form>

        <div class="side-div">
            <h1>
            Fresh picks for healthier living, straight from nature's bounty.
            {/* <img class="" src="img/vegleaf.png" alt="" /> */}

            </h1>

        </div>

            <img class="tom" src="/img/tomato3.png" alt="" /> 

            <img class="brocoli" src="img/brococoi.png" alt="" />    
            <img class="vegleaf" src="img/vegleaf.png" alt="" />
            <img class="leaf" src="img\leaf.png" alt="" />

        </div>
        </>
    );
}