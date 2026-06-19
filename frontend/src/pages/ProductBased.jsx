import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import CardForViewOrShare from '../components/CardForViewOrShare';
import AddCard from '../components/AddCard';
import toast from 'react-hot-toast';

const ProductBased = () => {
  const [showCard, setShowCard] = useState(false);
  const [companyImage, setCompanyImage] = useState(null);
  const [visible, setVisible] = useState(8);
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [companies, setCompanies] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;


  // Fetch product-based companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/company?type=product`);
        const data = await res.json();
        if (data.success) {
          setCompanies(data.companies);
        } else {
          toast.error(data.message || "Failed to fetch companies");
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchCompanies();
  }, []);

  const handleMore = () => {
    setVisible(prev => prev + 8);
  };

  const handleClose = () => {
    setShowCard(false);
    setCompanyImage(null);
    setAdd(false);
  };

  const filteredCompanies = companies.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-4 py-16 mt-10">

    {/* Heading */}
    <div className="text-center mb-12">
      <span className="px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold">
        Explore Companies
      </span>

      <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-800">
        Find Your <span className="text-teal-500">Dream Company</span>
      </h1>

      <p className="mt-5 max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-8">
        If your company isn't listed, simply click the
        <span className="font-semibold text-teal-600"> Add Company </span>
        button below and share your interview experience with thousands of students.
      </p>
    </div>

    {/* Search */}
    <div className="max-w-2xl mx-auto mb-14">
      <div
        className="flex items-center bg-white rounded-2xl
        border border-slate-200 shadow-md
        px-5 py-4
        transition-all duration-300
        focus-within:border-teal-400
        focus-within:ring-4
        focus-within:ring-teal-100"
      >
        <CiSearch className="text-2xl text-slate-400" />

        <input
          type="text"
          placeholder="Search company..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full ml-4 bg-transparent outline-none
          text-slate-700 placeholder:text-slate-400"
        />
      </div>
    </div>

    {/* Company Cards */}
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-6 md:gap-8"
    >
      {filteredCompanies.slice(0, visible).map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setCompanyImage(item);
            setShowCard(true);
          }}
          className="group cursor-pointer"
        >
          <div
            className="bg-white rounded-3xl
            border border-slate-200
            shadow-md
            hover:shadow-2xl
            transition-all duration-300
            hover:-translate-y-2
            overflow-hidden"
          >
            {/* Logo */}
            <div
              className="relative flex items-center justify-center
              h-44 bg-gradient-to-br
              from-white via-slate-50 to-slate-100"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-24 object-contain
                transition duration-300
                group-hover:scale-110"
              />
            </div>

            {/* Company Name */}
            <div className="border-t border-slate-100 py-4">
              <p
                className="text-center font-semibold text-slate-700
                capitalize transition
                group-hover:text-teal-600"
              >
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-16">

      <button
        onClick={handleMore}
        className="group flex items-center justify-center gap-3
        px-8 py-3 rounded-xl
        bg-white border border-slate-200
        shadow-md hover:shadow-xl
        hover:border-teal-300
        transition-all duration-300"
      >
        <span className="font-medium text-slate-700">
          Load More
        </span>

        <FaArrowRightLong
          className="transition-transform duration-300
          group-hover:translate-x-1"
        />
      </button>

      <button
        onClick={() => setAdd(true)}
        className="px-8 py-3 rounded-xl
        bg-gradient-to-r from-teal-500 to-cyan-500
        text-white font-semibold
        shadow-lg shadow-teal-400/30
        hover:shadow-xl
        hover:scale-105
        transition-all duration-300"
      >
        + Add Company
      </button>

    </div>

    {/* Popup */}
    {showCard && companyImage && (
      <CardForViewOrShare
        company={companyImage}
        onClose={handleClose}
      />
    )}

    {/* Add Company */}
    {add && (
      <AddCard
        add={add}
        setAdd={setAdd}
        onClose={handleClose}
      />
    )}

  </div>
</div>
  );
};

export default ProductBased;

