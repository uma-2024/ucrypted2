import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import TravelTopups from './component/TravelTopups/TravelTopups';
import MainPage from './component/MainPage/MainPage';
import GiftCards from './component/GiftCards/GiftCards';
import OperatorDetails from './component/OperatorDetails/OperatorDetails'; 
import UtilityPayments from './component/UtilityPayments/UtilityPayments';

import Transaction from './component/Transaction/Transaction';
import MyCards from './component/MyCards/MyCards';
import LoginComponent from './component/LoginComponent/LoginComponent';
import RegisterComponent from './component/RegisterComponent/RegisterComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="/topups" element={<TravelTopups />} />
          <Route path="/topups/:id" element={<OperatorDetails />} />
          <Route path="/utility" element={<UtilityPayments/>} /> 
          <Route  path="/transtionhistory" element={<Transaction/>}/>
          <Route  path="/mycards" element={<MyCards/>}/>
          <Route  path="/login" element={<LoginComponent/>}/>
          <Route  path="/register" element={<RegisterComponent/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
