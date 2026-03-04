import AddStudent from "../views/teacherViews/AddStudent"
import AddCourses from "../views/teacherViews/AddCourses";
import EditCourses from "../views/EditCourses";
import DeleteCourses from "../views/teacherViews/DeleteCourses";
import Profile from "../views/Profile";
import TeacherDashboard from "../views/teacherViews/TeacherDashboard";


const teacherRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: <TeacherDashboard />,
        layout: "teacher"
    },
    {
        path: "/addstudent",
        name: "Add Student",
        component: <AddStudent />,
        layout: "teacher",
    },
    {
        path: "/AddCourse",
        name: "Add Course",
        component: <AddCourses />,
        layout: "teacher",
    },
    {
        path: "/editcourse",
        name: "Edit Course",
        component: <EditCourses />,
        layout: "teacher",
    },
    {
        path: "/deletecourse",
        name: "Delete Course",
        component: <DeleteCourses />,
        layout: "teacher",
    },
        {
        path: "/profile",
        name: "Profile",
        component: <Profile />,
        layout: "teacher",
    }


]

export default teacherRoutes;


