import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DAppPlatform from './pages/DAppPlatform';
import DAOGovernance from './pages/DAOGovernance';
import About from './pages/About';
import IndiCoinPage from './pages/Indicoin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp-platform" element={<DAppPlatform />} />
        <Route path='/indicoin' element={<IndiCoinPage/>}/>
        <Route path="/dao-governance" element={<DAOGovernance />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
