import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './Components/DoctorDashboard';
import Book from './Components/Book';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<DoctorDashboard />} />
          <Route exact path="/book" element={<Book />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
