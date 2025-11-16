import { useState } from "react"

function Login(params) {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(email==="admin@gmail.com" && password==="12345"){
            localStorage.setItem("islogin","true")
        }
        
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto mt-5">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e)=>handleSubmit(e)}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login