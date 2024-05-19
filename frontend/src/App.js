import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Homepage/Navbar';
import Landlord from './pages/Landlord';
import LandlordRegister from './pages/LandlordRegister';
import LandlordLogin from './pages/LandlordLogin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/landlordlogin' element={<LandlordLogin />} />
        <Route exact path='/landlord' element={<Landlord />} />
        <Route exact path ='/registerlandlord' element={<LandlordRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
