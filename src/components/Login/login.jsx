import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login(){
    const {Name,Age,Role,login}=useAuth()
    const navigate=useNavigate();

    const loginUser=(parms)=>{
        
        login(parms);
        console.log(parms)
        // navigate(`${Role}/profile`)
    
    }




    return(
        <>
        <h1>User Login Form</h1>
        <button onClick={()=>loginUser({Name:"hammad",Age:"30",Role:"student"})}>Login as Student</button><div></div>
        <button onClick={()=>loginUser({Name:"hammad",Age:"30",Role:"teacher"})}>Login as Teacher</button>
        </>
    )

}

export default Login