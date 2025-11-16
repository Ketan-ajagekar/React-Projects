import { useContext } from "react";
import { countcontext } from "../App";

function C(params) {
    let data= useContext(countcontext)
    return(
        <>
        <h1>This is Component C</h1>
        <h2>My name is {data[1]}</h2>
        <p>Your count is {data[0]}</p>
        
        </>
    )
}
export default C;
