import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

//Importing Components
import Home from './components/Home/Home';
import Teacher from './components/Teacher/Teacher';
import Student from './components/Student/Student';
import Login from './components/Login/login';
import Profile from './components/Teacher/Profile';
import NotFound from './components/404/NotFound';
import Signup from './components/Signup/signup';
import { AuthProvider } from './contexts/AuthContext';
import { default as studentProfile } from './components/Student/Profile';

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
        <Route path='/Student' element={<Student />} />
        <Route path='/profile' element={<studentProfile />} />
      </>
    );


  }
  else if (role === "teacher") {
    routes = (
      <>
        <Route path='/teacher' element={<Teacher />}>
          <Route path='profile' element={<Profile />} />
        </Route>
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
