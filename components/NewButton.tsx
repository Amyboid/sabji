import { JSX } from "preact/jsx-runtime"; 

export function NewButton(props: JSX.HTMLAttributes<HTMLButtonElement>){
    return(
        // <button
        // {...props}         
        // class="btn"  
        // /> 
        <button class="btn" >click</button>
    );
} 

