import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

//Importing Components
import Home from './components/Home/Home';
import Teacher from './layouts/TeacherLayout';
import StudentLayout from './layouts/StudentLayout';
import TeacherLayout from './layouts/TeacherLayout';
import AuthLayout from './layouts/AuthLayout';
import { AuthProvider } from './contexts/AuthContext';

import Login from './views/authViews/login';

function App() {

  const { user } = useAuth()

  const Authanticated = user.name;
  const role = user.role;
  let routes;
  console.log(user)
  console.log(role)




  if (!Authanticated) {
    routes = (
      <>
        <Route path='/auth/*' element={<AuthLayout />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </>
    );

  }
  else if (role === "student") {
      console.log("role running", role)

    routes = (
      <>
        <Route path='/student/*' element={<StudentLayout />} />
         <Route path="*" element={<Navigate to="/student/dashboard" />} />
      </>
    );


  }
  else if (role === "teacher") {
    routes = (
      <>
        <Route path='/teacher/*' element={<TeacherLayout />} />
        <Route path="*" element={<Navigate to="/teacher" />} />
      </>
    );


  }



  return (
    <BrowserRouter>
      <Routes>
        
        {routes}
      </Routes>

    </BrowserRouter>
  )
}

export default App
