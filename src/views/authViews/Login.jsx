import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login(){
    const {name,age,role,login}=useAuth()
    const loginUser=(parms)=>{
        login(parms);
        console.log(parms)
        
    }

    return(
        <>
        <h1>User Login Form</h1>
        <button onClick={()=>{loginUser({name:"Hammad",age:"20", role:"student"})}}>Login As Student</button>
        <button onClick={()=>{loginUser({name:"Hammad",age:"20", role:"teacher"})}}>Login As Teacher</button>

        
        
        </>
    )

}

export default Login;