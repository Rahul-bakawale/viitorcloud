// import { Route, Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./components/registrationPage/Registration";
import Login from "./components/loginPage/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoutes from "./components/privateRoute/Route";

function App() {
  return (
    <>
      <Registration />
      <Login /> <Dashboard />
    </>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/register" />} />
    //     <Route path="/register" element={<Registration />}>
    //       <Route path="/login" element={<Login />} />
    //       <Route
    //         path="/dashboard"
    //         element={
    //           <PrivateRoutes>
    //             <Dashboard />
    //           </PrivateRoutes>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
