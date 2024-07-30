import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faHandHoldingHeart, faMapMarkerAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logoImage from "../../assests/bloodrop.png";
import Sidebar from './NotifyUser'; // Import Sidebar component

const Navbar = ({ scrollToSection, searchBloodBankRef, searchVoluntaryDonorsRef, findNearBloodBanksRef, handleSignOut }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="body-font bg-red-800 text-white h-20 flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logoImage} alt="Bloodrop Logo" className="w-10 h-10 p-2 bg-white rounded-full" />
          <span className="ml-3 text-xl">BLOODROP</span>
        </div>
        <div className="flex items-center">
          
          <button onClick={() => scrollToSection(searchBloodBankRef)} className="mr-5 hover:text-red-400 ml-6  mt-3 flex items-center">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Search Blood Bank
          </button>
          <button onClick={() => scrollToSection(searchVoluntaryDonorsRef)} className="mr-5 hover:text-red-400 ml-6  mt-3 flex items-center">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="mr-2" />
            Search Voluntary Donors
          </button>
          <button onClick={() => scrollToSection(findNearBloodBanksRef)} className="mr-5 hover:text-red-400 ml-6  mt-3 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Find Near Blood Banks
          </button>
          <button onClick={handleSignOut} className="hover:text-red-400 ml-6  mt-3 flex items-center">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Sign Out
          </button>
          <button onClick={toggleSidebar} className="ml-5 hover:text-red-400 ml-6  mt-3 focus:outline-none">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </button>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
