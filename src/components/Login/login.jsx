import { useNavigate } from "react-router-dom";

function Login(){
    
    const navigate=useNavigate();

    return(
        <>
        <h1>User Login Form</h1>
        <button onClick={()=>navigate("/teacher")}>Login to Teacher Account</button>
        </>
    )

}

export default Login