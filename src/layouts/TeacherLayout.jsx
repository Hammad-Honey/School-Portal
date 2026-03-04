import { Route, Routes, Outlet, Link } from "react-router-dom";
import teacherRoutes from "../routes/TeacherRoutes";
import { Fragment } from "react";



function TeacherLayout() {
    console.log("Teacher layout rendered")
    const getRoutes = (route) => {
        return route.map((prop, key) => {
            if (prop.layout === "teacher") {
                console.log("layout Maping is runing")
                return (
                    <Route path={prop.path} element={prop.component} key={key} />
                )
            }
            else return null;
        });
    }

    const getNavLinks = (route) => {
        return route.map((prop, key) => {
            if (prop.layout === "teacher") {
                console.log("layout Maping is runing")
                return (
                    <Fragment key={key}>
                        <Link
                        to={`/teacher/${prop.path} `}>{prop.name}</Link> | {" "}
                    </Fragment>

                )
            }
            else return null;
        });
    }

    // // const getNavLinks = (layout) => {
    // //     return layout.map((prop, key) => {
    // //     if (prop.layout === "teacher")
    // //         return (
    // //             <Fragment key={key}>
    // //                 <Link to={`/teacher/${prop.path}`}> {prop.name}</Link > | {" "}
    // //             </Fragment>
    // //         )
    // //     else return null
    // // })
    // }
    return (
        <>
            <h1>Teacher Layout</h1>
            <Routes>
                {getRoutes(teacherRoutes)}
            </Routes>
            {getNavLinks(teacherRoutes)}
        </>
    )
}

export default TeacherLayout;