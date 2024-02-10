
export default function Signup(){
    return(
        <>
        <div class="login-signup-div">


        <form class="form">
        <h1>Create Account </h1><br />
            <input type="text" placeholder="Name..."/>   <br /><br />

            <input type="text" placeholder="Email ID..." />   <br /><br />
            <input type="text" placeholder="Password..." /> <br />
           
           <button class="log-sign-butt">Sign Up</button> <br /> 
           <p>already have an account ?</p>
           <a href="login">log in</a>

        </form>
        <div class="side-div">
            <h1>Fresh picks for healthier living, straight from nature's bounty.</h1>
        </div>

        <img class="tom" src="/img/tomato3.png" alt="" /> 

        <img class="brocoli" src="img/brococoi.png" alt="" />    
        <img class="vegleaf" src="img/vegleaf.png" alt="" />
        <img class="leaf" src="img\leaf.png" alt="" />
        </div>
        </>
    );
}