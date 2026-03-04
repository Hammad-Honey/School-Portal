import { Outlet } from "react-router-dom";

function Student(){
    return(
        <>
        <h1>This is Student Component</h1>
        <Outlet/>
        </>
        
    )
}

export default Student;