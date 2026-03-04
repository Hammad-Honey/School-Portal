import StudentDashboard from '../views/studentViews/StudentDashboard';
import StudentProfile from '../views/studentViews/StudentProfile';

const studentRoutes = [
    {
        path: "/dashboard",
        name: "Student Dashboard",
        component: <StudentDashboard />,
        layout: "student"
    },
    {
        path: "/profile",
        name: "Student Profile",
        component: <StudentProfile />,
        layout: "student"
    }

]
export default studentRoutes;
