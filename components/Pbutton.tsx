import { JSX } from "preact/jsx-runtime"; 

// export function Pbutton(props: JSX.HTMLAttributes<HTMLButtonElement>){
//     return(
//         <button
//         {...props}         
//         class="btn"  
//         /> 
//     );
// } 

import { Component } from "https://esm.sh/preact@10.19.2";
export class Pbutton extends Component{
    
    render(props:any){
        console.log(props)
        return(
            <button id={props.id}>
                {props.children}
            </button>
        )
    }
}