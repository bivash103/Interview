import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import CardForViewOrShare from '../components/CardForViewOrShare';
import { FaArrowRightLong } from "react-icons/fa6";
import AddCard from '../components/AddCard';
import toast from 'react-hot-toast';

const ServiceBased = () => {
    const [showCard, setShowCard] = useState(false);
    const [companyImage, setCompanyImage] = useState(null)
    const [visible, setVisible] = useState(8);
    const [add, setAdd] = useState(false);
    const [search, setSearch] = useState('');
    const [companies, setCompanies] = useState([]);
     const BASE_URL = import.meta.env.VITE_API_URL;

    // Fetch service-based companies from backend
    useEffect(() => {
        fetch(`${BASE_URL}/api/company?type=service`)
            .then(res => res.json())
            .then(data => {
                if (data.success) setCompanies(data.companies);
                else toast.error(data.message);
            })
            .catch(err => toast.error(err.message));
    }, []);

    const handlMore = () => setVisible(prev => prev + 8);
    const handleClose = () => {
        setShowCard(false);
        setCompanyImage(null);
        setAdd(false);
    };

    const filterCompanies = companies.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full bg-gradient-to-b from-slate-50 via-white
         to-slate-100 overflow-hidden mt-10">

  <div className="max-w-[1200px] mx-auto px-4 py-16">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Explore <span className="text-teal-500">Companies</span>
      </h1>

      <p className="mt-5 text-slate-500 leading-7 text-base md:text-lg">
        Can't find your company? Click the{" "}
        <span className="font-semibold text-teal-600">Add Company</span>{" "}
        button below and help the community by sharing your interview
        experience.
      </p>
    </div>

    {/* Search */}
    <div className="max-w-2xl mx-auto mt-10">
      <div
        className="flex items-center bg-white border border-slate-200
        rounded-2xl px-5 py-4 shadow-md
        focus-within:border-teal-400
        focus-within:ring-4
        focus-within:ring-teal-100 transition-all"
      >
        <CiSearch className="text-2xl text-slate-500" />

        <input
          type="text"
          placeholder="Search companies..."
          onChange={(e) => setSearch(e.target.value)}
          className="ml-4 w-full bg-transparent outline-none
          text-slate-700 placeholder:text-slate-400"
        />
      </div>
    </div>

    {/* Companies */}
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-6 md:gap-8 mt-14"
    >
      {filterCompanies.slice(0, visible).map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setCompanyImage(item);
            setShowCard(true);
          }}
          className="group cursor-pointer"
        >
          <div
            className="bg-white rounded-3xl border border-slate-200
            shadow-md hover:shadow-2xl
            transition-all duration-300
            hover:-translate-y-2 overflow-hidden"
          >
            {/* Logo */}
            <div
              className="h-44 flex items-center justify-center
              p-8 bg-gradient-to-br
              from-white to-slate-50"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-24 object-contain
                transition duration-300
                group-hover:scale-110"
              />
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 px-5 py-4">
              <p
                className="text-center font-semibold text-slate-700
                capitalize group-hover:text-teal-600 transition-colors"
              >
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-16">

      <button
        onClick={handlMore}
        className="group flex items-center gap-3
        px-8 py-3 rounded-xl
        bg-white border border-slate-200
        shadow-md hover:shadow-lg
        hover:border-teal-300
        transition-all"
      >
        <span className="font-medium text-slate-700">
          Load More
        </span>

        <FaArrowRightLong
          className="group-hover:translate-x-1
          transition-transform"
        />
      </button>

      <button
        onClick={() => setAdd(true)}
        className="px-8 py-3 rounded-xl
        bg-gradient-to-r from-teal-500 to-cyan-500
        text-white font-medium
        shadow-lg shadow-teal-300/30
        hover:shadow-xl
        hover:scale-105
        transition-all"
      >
        + Add Company
      </button>

    </div>

    {/* Modals */}
    {showCard && companyImage && (
      <CardForViewOrShare
        company={companyImage}
        onClose={handleClose}
      />
    )}

    {add && (
      <AddCard
        add={add}
        setAdd={setAdd}
        onClose={handleClose}
      />
    )}

  </div>

</div>
    )
}

export default ServiceBased;