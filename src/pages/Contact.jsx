import React from 'react';
import Navbar from '../HomeCompo/Navbar';
import Footer from '../HomeCompo/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">For inquiries related to partnerships, support, or media, reach out to us.</p>
        {/* Contact form and other details */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
