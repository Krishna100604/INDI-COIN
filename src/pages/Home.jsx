import React from 'react';
import Navbar from '../HomeCompo/Navbar';
import HeroBanner from '../HomeCompo/Hero';
import Footer from '../HomeCompo/Footer';
import FAQ from '../HomeCompo/Faq';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="container mx-auto py-0"> {/* Remove any padding/margin here */}
        {/* Additional sections like Key Features, Team, Market Size, etc. */}
      </div>
      <div className="mt-0"> {/* Remove any margin here */}
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;
