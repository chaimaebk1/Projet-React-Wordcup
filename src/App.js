
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Needs from './pages/Needs';
import Clothes from './pages/Clothes';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import HospitalsRabat from './pages/Hospitals/HospitalsRabat';
import HospitalsMarrakech from './pages/Hospitals/HospitalsMarrakech';
import MallsRabat from './pages/Malls/MallsRabat'; 
import MallsCasablanca from './pages/Malls/MallsCasablanca';
import MallsMarrakech from './pages/Malls/MallsMarrakech';
import MallsTangier from './pages/Malls/MallsTangier';
import HospitalsCasablanca from './pages/Hospitals/HospitalsCasablanca';
import MapPage from './pages/MapPage';
import StoreDetails from './components/ClothesPages/storeDetails';
import HospitalsTangier from './pages/Hospitals/HospitalsTangier';

const App = () => {
  return (
    <div>
    <Router>
    <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes"  element={<Clothes />} />
            {/* <Route path="/food"  element={<Food />} /> */}
            <Route path="/contact"  element={<Contact />} />
            <Route path="/needs"  element={<Needs />} />
            <Route path="/map"  element={<MapPage />} />
            <Route path="/HospitalsMarrakech" element={<HospitalsMarrakech />} />
            <Route path="/HospitalsTangier" element={<HospitalsTangier />} />
            <Route path="/HospitalsRabat" element={<HospitalsRabat />} />
            <Route path="/HospitalsCasablanca" element={<HospitalsCasablanca />} />
            <Route path="/MallsMarrakech" element={<MallsMarrakech />} />
            <Route path="/MallsTangier" element={<MallsTangier />} />
            <Route path="/MallsRabat" element={<MallsRabat />} />
            <Route path="/MallsCasablanca" element={<MallsCasablanca />} />
            <Route path="/Clothes/:selectedCity/:storeId" element={<StoreDetails/>} />
          </Routes>
          <Footer />
          
        </Router>
    </div>
  );
};

export default App;
