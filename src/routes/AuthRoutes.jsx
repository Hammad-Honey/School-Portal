import Signup from "../views/authViews/Signup";
import Login from "../views/authViews/login";


const AuthRoutes = [
    {
        path: "login",
        name: "Login Page",
        component: <Login />,
        layout: "auth"
    },
    {
        path: "signup",
        name: "Signup Page",
        component: <Signup />,
        layout: "auth"
    }

]
export default AuthRoutes;