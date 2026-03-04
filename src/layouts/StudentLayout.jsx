import { Routes, Route, Outlet } from "react-router-dom";
import studentRoutes from "../routes/StudentRoutes";



function StudentLayout() {
    const getRoutes = (route) => {
        return route.map((prop, key) => {
            if (prop.layout === "student")
                return <Route path={prop.path} element={prop.element} key={key} />
            else return null
        });
    }

    console.log("Student layout rendered")
    return (
        <>
            <h1>This is Student Component</h1>
            <Routes>
                {getRoutes(studentRoutes)}
            </Routes>
            <Outlet />
        </>

    )
}

export default StudentLayout;