import { Routes,Route,Outlet } from "react-router-dom";
import studentRoutes from "../routes/StudentRoutes";


const getRoutes=(route)=>{
    route.map((prop,key)=>{
        if(prop.layout==="student")
            return <Route path={prop.path} element={prop.element} key={key}/>
    });
}

function StudentLayout(){
    return(
        <>
        <h1>This is Student Component</h1>
        <Routes>
            {getRoutes(studentRoutes)}
        </Routes>
        <Outlet/>
        </>
        
    )
}

export default StudentLayout;