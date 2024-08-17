import React from "react";
import Navbar from "../HomeCompo/Navbar";
import Footer from "../HomeCompo/Footer";
import { Link } from "react-router-dom";

const DAppPlatform = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Global all-in-one platform
          </h1>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Supercharge your app with USDC. Effortless integration, no
            blockchain headaches.
          </p>

          {/* Platform Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Smart Contracts</h2>
              <p>
                Create and deploy smart contracts that can be customized to suit
                your application's needs, ensuring quick and secure deployments
                to build RWA.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Secure Wallet Infrastructure
              </h2>
              <p>
                Inbuilt secure wallet infrastructure enabling secure, in-app
                digital asset management and enterprise-level transactions.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Secure API Access</h2>
              <p>
                Utilize our secure APIs to integrate your DApps with the Indi
                Coin ecosystem, enabling seamless interaction with other
                decentralized services.
              </p>
            </div>
          </div>

          {/* Developer Tools Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Developer Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Web3 Services</h3>
                <p>
                  Composable APIs and SDKs to bring any web or mobile app
                  on-chain.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  Distributed Ledger Technology
                </h3>
                <p>
                  {" "}
                  Developers can leverage DLT to create immutable records of
                  stablecoin issuance, redemption, and transactions. Smart
                  contracts can automate these processes, ensuring transparency
                  and efficiency.{" "}
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Testnet Environment</h3>
                <p>
                  Deploy and test your DApps in our robust testnet environment
                  before going live, ensuring everything works perfectly in a
                  controlled setting.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Developer Community</h3>
                <p>
                  Join a vibrant community of developers to share knowledge,
                  collaborate on projects, and stay updated with the latest in
                  blockchain technology.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-lg mb-8">
              Join the Indi Coin DApp development team and start creating
              groundbreaking decentralized applications today.
            </p>
            <Link to="https://forms.gle/9nv8Qqdg7EbFXEN18">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                Join INDICOIN
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DAppPlatform;
