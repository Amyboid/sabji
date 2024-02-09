
export default function Signup(){
    return(
        <>
        <div class="login-signup-div">


        <form class="form">
        <h1>Create Account </h1><br />
            <p>Name </p>
            <input type="text" />   <br />

            <p>Email ID </p>
            <input type="text" />   <br />
            <p>Password </p>
            <input type="text" /> <br />
           <br />
           <button class="log-sign-butt">Sign Up</button> <br /> <br />
           <p>already have an account ?</p>
           <a href="login">log in</a>

        </form>
        <div class="pic-div">hello</div>
        </div>
        </>
    );
}