import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Content } from './components/Content';
import { Employee } from './crud/Employee';
import { FormDemo } from './crud/FormDemo';
import { EmployeeRegistration } from './crud/EmployeeRegistration';
import { StudentsRegistration } from './forms/StudentsRegistration';
import { RapidApi } from './api/RapidApi';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { Blog } from './components/Blog';
import { ContactUs } from './components/ContactUs';
import { Route, Routes } from 'react-router-dom';
import {   ContactDetails } from './components/ContactDetails';
import { AddUser } from './E-Society/AddUser';
import { ViewUser } from './E-Society/ViewUser';
import { UpdateUser } from './E-Society/UpdateUser';
import { FormValid } from './Task/FormValid';
import { Login } from './components/Login';
import { Head } from './TutorialTask/Head';
import { Json } from './contextDemo/Json';
 
import { UserLogin } from './Task/UserLogin';
import { Logout } from './Task/Logout';
 

function App() {
  var headTitle = 'Royal TechnoSoft Pvt. ltd'
  var title = 'Students Details'
  var Students = {
    name: 'Amit Thakkar',
    rollNo: '35'
  }

  return (
    <div className='App'>
      {/* <Header Title={headTitle} /> */}
      {/* <StudentsRegistration/> */}
      {/* <Employee /> */}
      {/* <Footer /> */}
     {/* <RapidApi/> */}
      <Navbar />
      {/* <FormValid/> */}
      <Routes>
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/ContactDetails/:id/:name' element={<ContactDetails/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
        <Route path='/GetUser' element={<ViewUser/>}/>
        <Route path='/updateUser/:_id' element={<UpdateUser/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/log' element={<UserLogin/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
    {/* <Head/> */}
   
   {/* <Json/> */}
    </div>
  );
}

export default App;
