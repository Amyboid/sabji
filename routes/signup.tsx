
export default function Signup(){
    return(
        <>
        <div class="signup-div">


        <form class="form">
        <h1>Create Account </h1>
            <p>Name </p>
            <input type="text" />   

            <p>Email ID </p>
            <input type="text" />   
            <p>Password </p>
            <input type="text" /> <br />
           <button>Sign Up</button> <br />
           <p>already have an account ?</p>
           <a href="login">log in</a>

        </form>
        
        </div>
        </>
    );
}