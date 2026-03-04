import { Route, Routes, Outlet, Link } from "react-router-dom";
import teacherRoutes from "../routes/TeacherRoutes";


const getNavLinks = (layout) => {

    layout.map((prop, key) => {
        if (prop.layout === "teacher") {
            console.log("Mapping Navlink routes")
            return (
                <>
                    <Link to={`/teacher${prop.path}`}>{prop.name}</Link> | {" "}
                </>
            )
        }
        else return null;
    }
    )

}


function TeacherLayout() {

    const getRoutes = (route) => {
        route.map((prop, key) => {
            if (prop.layout === "teacher") {
                console.log("layout Maping is runing")
                return (
                    <Route path={prop.path} element={prop.component} key={key} />
                )
            }
            else return null;
        });
    }
    return (
        <>
            <h1>you are in a teacher view</h1>
            {/* {getNavLinks(TeacherLayout)} */}

            <Routes>
                {getRoutes(teacherRoutes)}
            </Routes>
            <Outlet />
        </>
    )
}

export default TeacherLayout;