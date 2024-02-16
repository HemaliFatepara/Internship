import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Register from "./Components/Register";
import Login from "./Components/Login";
import DataTable from "./Components/Userdashboard";
import Admin from "./Components/Admindashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/userd" element={<DataTable />} />
          <Route exact path="/admind" element={<Admin />} />
          <Route exact path="/book" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
