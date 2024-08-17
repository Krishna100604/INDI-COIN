import React from 'react';
import Navbar from '../HomeCompo/Navbar';
import Footer from '../HomeCompo/Footer';

const DAOGovernance = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">DAO Governance</h1>
        <p className="mb-6">Participate in decentralized governance and help shape the future of INDICOIN</p>
        {/* Additional content for the DAO */}
      </div>
      <Footer />
    </>
  );
};

export default DAOGovernance;
