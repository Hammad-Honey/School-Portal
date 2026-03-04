import StudentDashboard from '../views/studentViews/StudentDashboard';

const studentRoutes = [
    {
        path: "/dashboard",
        name: "Student Dashboard",
        component: <StudentDashboard />,
        layout: "student"
    }
]
export default studentRoutes;
