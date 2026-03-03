import { Outlet,Link } from "react-router-dom";
function Teacher() {
    return (
        <>
            <h1>This is Teacher Component</h1>
            <nav>
                <Link to="/teacher/Profile">Profile</Link> |
            </nav>
            <Outlet/>
        </>
    )
}

export default Teacher;