// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Needs from './pages/Needs';
import Clothes from './pages/Clothes';

import Contact from './components/Contact';
import Footer from './components/Footer';
import HospitalsRabat from './pages/HospitalsRabat';
import HospitalsMarrakech from './pages/HospitalsMarrakech';

import PharmaciesRabat from './pages/PharmaciesRabat';

import HospitalsCasablanca from './pages/HospitalsCasablanca';
import MapPage from './pages/MapPage';
import StoreDetails from './components/ClothesPages/storeDetails';
import HospitalsTanger from './pages/HospitalsTanger';
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
            <Route path="/HospitalsTanger" element={<HospitalsTanger />} />

            <Route path="/HospitalsRabat" element={<HospitalsRabat />} />
            <Route path="/HospitalsCasablanca" element={<HospitalsCasablanca />} />
            <Route path="/PharmaciesRabat" element={<PharmaciesRabat />} />
            <Route path="/PharmaciesCasablanca" element={<PharmaciesCadablanca />} />
            {/* <Route path="/store/:storeId" element={<StoreDetails/>} /> */}
            <Route path="/Clothes/:selectedCity/:storeId" element={<StoreDetails/>} />



            
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
          
        </Router>
    </div>
  );
};

export default App;
