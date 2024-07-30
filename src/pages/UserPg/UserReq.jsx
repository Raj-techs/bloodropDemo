import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import logoImage from '../../assests/bloodrop.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { Cloudinary } from 'cloudinary-core';

// Initialize Cloudinary instance
const cloudinaryCore = new Cloudinary({ cloud_name: "duo7jqmit" });

const UserReq = () => {
  const [loading, setLoading] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const [reqData, setReqData] = useState({
    username: "",
    group: "",
    usrlocation: "",
    units: "",
    mobile: "",
    state: "",
    date: ""
  });

  const handleChange = (e) => {
    setReqData({ ...reqData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const imageUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my_upload_preset");

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/duo7jqmit/image/upload`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        imageUrls.push(data.secure_url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    setUploadedImages(imageUrls);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.values(reqData).some(field => !field) || uploadedImages.length === 0) {
      toast.error("❌ Please fill in all fields and upload images");
      return;
    }

    const requestData = { ...reqData, certificates: uploadedImages };

    try {
      await axios.post('http://localhost:3000/requests', requestData);
      toast.success("👍 Requested Successfully");
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error("❌ Request Not Reached");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="body-font bg-red-800 text-white h-20">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0 navbar">
          <img src={logoImage} alt="Bloodrop Logo" className="w-10 h-10 p-2 bg-white rounded-full" />
          <span className="ml-3 text-xl">BLOODROP</span>
        </div>
        <nav className="opts">
          <div className="relative">
            <Link to='/'>
              <span className="mr-5 hover:text-gray-900 mt-8">HOME</span>
            </Link>
            <button onClick={toggleServicesDropdown} className="mr-5 hover:text-gray-900 cursor-pointer">
              SERVICES
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute bg-white text-black right-0 mt-2 w-48 rounded-lg shadow-lg">
                <button onClick={() => scrollToSection('searchBloodBank')} className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left">
                  Search Blood Bank
                </button>
                <button onClick={() => scrollToSection('searchVoluntaryDonors')} className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left">
                  Search Voluntary Donors
                </button>
                <button onClick={() => scrollToSection('findNearBloodBanks')} className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left">
                  Find Near Blood Banks
                </button>
              </div>
            )}
          </div>
          <Link to='/user/req'>
            <button className="mr-5 hover:text-gray-900 cursor-pointer">REQUEST</button>
          </Link>
          <a href="/about" className="mr-5 hover:text-gray-900">ABOUT US</a>
        </nav>
      </nav>

      <div className="max-w-4xl p-3 mx-auto flex flex-col justify-center text-center">
        <h1 className="text-center text-3xl font-semibold">REQUEST BLOOD</h1>
        <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-w-4xl p-5 mx-auto">
          {/* Input fields */}
          <div>
            <label htmlFor="username" className="block text-left mb-1">Username</label>
            <input type="text" placeholder="Enter Username" name="username" value={reqData.username} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="group" className="block text-left mb-1">Group</label>
            <input type="text" placeholder="Enter Group" name="group" value={reqData.group} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="usrlocation" className="block text-left mb-1">User Location</label>
            <input type="text" placeholder="Enter Location" name="usrlocation" value={reqData.usrlocation} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="units" className="block text-left mb-1">Units</label>
            <input type="text" placeholder="Enter Units" name="units" value={reqData.units} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-left mb-1">Mobile No</label>
            <input type="text" placeholder="Enter Mobile No" name="mobile" value={reqData.mobile} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="state" className="block text-left mb-1">State</label>
            <input type="text" placeholder="Enter State" name="state" value={reqData.state} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="date" className="block text-left mb-1">Date</label>
            <input type="text" placeholder="Enter DD/MM/YYYY" name="date" value={reqData.date} onChange={handleChange} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <div>
            <label htmlFor="certificates" className="block text-left mb-1">Certificates</label>
            <input type="file" multiple onChange={handleFileUpload} className="bg-gray-200 rounded-lg p-3 w-full" />
          </div>
          <button type="submit" className="col-span-1 md:col-span-2 lg:col-span-3 bg-red-500 p-3 rounded-lg text-white mt-5">Request</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserReq;
