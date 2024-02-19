import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Emp from './Components/Emp';
import Designation from './Components/Designation';
import Admin from './Components/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/emp' element={<Emp />} />
        <Route exact path='/' element={<Admin />} />
        <Route exact path='/deg' element={<Designation />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
