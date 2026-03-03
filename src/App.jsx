import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Importing Components
import Home from './components/Home/Home';
import Teacher from './components/Teacher/Teacher';
import Student from './components/Student/Student';
import Login from './components/Login/login';
import Profile from './components/Teacher/Profile';








function App() {

  return (



    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teacher">Teacher</Link> |{" "}
        <Link to="/student">Student</Link>  |{" "}
        <Link to="/login">Login</Link>  |{" "}
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teacher' element={<Teacher />}>
          <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path='/Student' element={<Student />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
