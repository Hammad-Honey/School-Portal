import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

//Importing Components
import Home from './components/Home/Home';
import Teacher from './layouts/TeacherLayout';
import StudentLayout from './layouts/StudentLayout';
import Login from './components/Login/login';
import Profile from './views/Profile';
import NotFound from './components/404/NotFound';
import Signup from './components/Signup/signup';
import { AuthProvider } from './contexts/AuthContext';
import { default as studentProfile } from './views/studentViews/StudentProfile';
import TeacherLayout from './layouts/TeacherLayout';

function App() {

  const { user } = useAuth()

  const Authanticated = user.Name;
  const role = user.Role;
  let routes;
  console.log(role)




  if (!Authanticated) {
    routes = (
      <>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </>
    );

  }
  else if (role === "student") {
    routes = (
      <>
        <Route path='/student' element={<StudentLayout />} />
        <Route path='/profile' element={<studentProfile />} />
         <Route path="*" element={<Navigate to="/student/dashboard" />} />
      </>
    );


  }
  else if (role === "teacher") {
    routes = (
      <>
        <Route path='/teacher/*' element={<TeacherLayout />} />
        <Route path="*" element={<Navigate to="/teacher/dashboard" />} />
      </>
    );


  }



  return (


    // <AuthProvider>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teacher">Teacher</Link> |{" "}
        <Link to="/student">Student</Link>  |{" "}
        <Link to="/login">Login</Link>  |{" "}
      </nav>

      <Routes>

        <Route path='/' element={<Home />} />
        {routes}
        {/* <Route path='*' element={<NotFound />} /> */}

      </Routes>

    </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
