import { useParams } from "react-router-dom";
function Detail(params) {
    let {id}=useParams("id")
    console.log(id);
    
    return(
        <>
        <h1>This is Detail Page</h1>
        <p>Id is{id}</p>
        </>
    )
}
export default Detail