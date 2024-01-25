import './App.css';

import { Route, Routes } from 'react-router-dom';

import NotFoundPage from './Components/NotFound';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AllLectues from './pages/Course/AllLectures';
import CourseDetails from './pages/Course/CourseDetails';
import AllCourses from './pages/Course/CoursesList';
import Denied from './pages/Denied';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element= {<HomePage/>}></Route>
         <Route path='/signup' element= {<SignUp/>}></Route>
         <Route path='/login' element= {<Login/>}></Route>
         <Route path='/courses' element= {<AllCourses/>}></Route>
         <Route path='/course/description' element= {<CourseDetails/>}></Route>
         <Route path='/course/displaylectures' element= {<AllLectues/>}></Route>
         <Route path='/about' element= {<AboutUs/>}></Route>
         <Route path='/contact' element= {<ContactUs/>}></Route>
         <Route path='/denied' element= {<Denied/>}></Route>
         <Route path='/*' element= {<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
