import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminHome from './components/AdminHome';
import NotFound from './components/NotFound';
import CustomLoader from './components/CustomLoader';
import Executives from './components/Executives';
import UserHome from "./components/UserHome";
import Users from "./components/Users";
import SurveyForm from "./components/SurveyForm";
import UserProtectedRoute from "./components/UserProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  const role = localStorage.getItem("role");

  return (
    // <Routes>
    //   <Route exact path="/login" element={<Login />} />
    //   <Route exact path="/signUp" element={<SignUp />} />
    //   <Route exact path="/" element={<UserHome/>} />
    //   <Route exact path="/executives" element={ <Executives />}/>
    //   <Route exact path="/survey/:surveyId" element={  <SurveyForm/>}/>
    //   {/* <Route exact path="/executives" element={ <Users />}/> */}
    //   <Route path="*"  element={<NotFound/>} />
    //   </Routes>
    <Routes>
      <Route exact path="/signUp" element = {<SignUp/>}/>
      <Route exact path="/login" element = {<Login/>}/>
      <Route exact path="/" element = {role === "ADMIN" ? <AdminProtectedRoute>
        <AdminHome/>
      </AdminProtectedRoute>:<UserProtectedRoute>
        <UserHome/>
      </UserProtectedRoute>}/> 
      <Route exact path="/executives" element = {<AdminProtectedRoute>
        <Executives/>
      </AdminProtectedRoute>}/>
      <Route exact path="/users" element = {
        <UserProtectedRoute>
          <Users/>
        </UserProtectedRoute>
      }/>
      <Route exact path="/survey/:surveyId" element = {<SurveyForm/>}/>
      <Route path="*" element = {<NotFound/>}/>

    </Routes>


  );
}

export default App;
