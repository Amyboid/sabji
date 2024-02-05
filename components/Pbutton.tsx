import { JSX } from "preact/jsx-runtime"; 

export function Pbutton(props: JSX.HTMLAttributes<HTMLButtonElement>){
    return(
        <button
        {...props}         
        class="btn"  
        /> 
    );
} 

