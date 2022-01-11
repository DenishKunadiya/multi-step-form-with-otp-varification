import Register from "./components/register/Register.jsx";
import "./App.css";
import Login from "./components/login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm.js";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} /> */}
      {/* </Routes> */}
      <MultiStepForm />
    </BrowserRouter>
  );
}

export default App;
