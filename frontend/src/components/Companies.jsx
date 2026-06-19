import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardForViewOrShare from './CardForViewOrShare';
import toast from 'react-hot-toast';

const Companies = () => {
  const [showCard, setShowCard] = useState(false);
  const [companyImage, setCompanyImage] = useState(null);
  const [productCompanies, setProductCompanies] = useState([]);
  const [serviceCompanies, setServiceCompanies] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;


  const handleClose = () => {
    setShowCard(false);
    setCompanyImage(null);
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        // Fetch product-based companies
        const productRes = await fetch(`${BASE_URL}/api/company?type=product`);
        const productData = await productRes.json();
        if (productData.success) {
          setProductCompanies(productData.companies);
        } else {
          toast.error(productData.message || "Failed to fetch product-based companies");
        }

        // Fetch service-based companies
        const serviceRes = await fetch(`${BASE_URL}/api/company?type=service`);
        const serviceData = await serviceRes.json();
        if (serviceData.success) {
          setServiceCompanies(serviceData.companies);
        } else {
          toast.error(serviceData.message || "Failed to fetch service-based companies");
        }
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className='w-full overflow-x-hidden bg-slate-50/30'>
  <div className='mx-auto max-w-[1200px] px-4 py-16 md:py-24'>
    
    {/* Header Section */}
    <div className='text-center max-w-2xl mx-auto mb-16'>
      <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-slate-900'>
        Explore Companies
      </h1>
      <p className='text-slate-500 text-sm md:text-base mt-3 leading-relaxed'>
        Dive into real interview journeys and insights shared by successful candidates at top-tier organizations.
      </p>
    </div>

    {/* Service-based companies */}
    <div className="mb-16">
  {/* Heading */}
  <div className="flex items-center gap-4 mb-10">
    <div className="w-3 h-3 rounded-full bg-teal-500"></div>

    <h2 className="text-2xl font-bold text-slate-800">
      Service-Based Companies
    </h2>

    <div className="flex-1 h-px bg-slate-200"></div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 place-items-center">

    {serviceCompanies.slice(0, 3).map((item, index) => (
      <div
        key={index}
        onClick={() => {
          setCompanyImage(item);
          setShowCard(true);
        }}
        className="group cursor-pointer w-full max-w-[220px] flex flex-col items-center"
      >
        {/* Card */}
        <div
          className="
          relative
          w-full
          aspect-square
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-md
          flex
          items-center
          justify-center
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          hover:border-teal-200
          "
        >
          {/* Hover Glow */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-teal-100/0
            via-teal-100/20
            to-cyan-100/30
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            "
          />

          <img
            src={item.logo}
            alt={item.name}
            className="
            relative
            z-10
            w-24
            h-24
            object-contain
            grayscale
            opacity-80
            transition-all
            duration-500
            group-hover:grayscale-0
            group-hover:opacity-100
            group-hover:scale-110
            "
          />
        </div>

        {/* Company Name */}
        <h3
          className="
          mt-5
          text-lg
          font-semibold
          text-slate-700
          tracking-wide
          capitalize
          transition-colors
          duration-300
          group-hover:text-teal-600
          "
        >
          {item.name}
        </h3>
      </div>
    ))}
  </div>
</div>
    {/* Product-based companies */}
    <div className="mb-16">
  {/* Heading */}
  <div className="flex items-center gap-4 mb-10">
    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>

    <h2 className="text-2xl font-bold text-slate-800">
      Product-Based Companies
    </h2>

    <div className="flex-1 h-px bg-slate-200"></div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 place-items-center">

    {productCompanies.slice(0, 3).map((item, index) => (
      <div
        key={index}
        onClick={() => {
          setCompanyImage(item);
          setShowCard(true);
        }}
        className="group cursor-pointer w-full max-w-[220px] flex flex-col items-center"
      >
        {/* Card */}
        <div
          className="
          relative
          w-full
          aspect-square
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-md
          flex
          items-center
          justify-center
          overflow-hidden
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          hover:border-cyan-200
          "
        >
          {/* Hover Glow */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-100/0
            via-cyan-100/20
            to-blue-100/30
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            "
          />

          <img
            src={item.logo}
            alt={item.name}
            className="
            relative
            z-10
            w-24
            h-24
            object-contain
            grayscale
            opacity-80
            transition-all
            duration-500
            group-hover:grayscale-0
            group-hover:opacity-100
            group-hover:scale-110
            "
          />
        </div>

        {/* Company Name */}
        <h3
          className="
          mt-5
          text-lg
          font-semibold
          text-slate-700
          tracking-wide
          capitalize
          transition-colors
          duration-300
          group-hover:text-cyan-600
          "
        >
          {item.name}
        </h3>
      </div>
    ))}

  </div>
</div>

    {/* Card modal */}
    {showCard && companyImage && (
      <CardForViewOrShare company={companyImage} onClose={handleClose} />
    )}

    {/* Explore all link */}
    <div 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='flex items-center justify-center mt-6'
    >
      <Link 
        to='/experience' 
        className='group inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 text-sm font-medium shadow-sm hover:bg-slate-50 hover:text-teal-600 hover:border-teal-200 transition-all duration-200'
      >
        <span>Explore All Companies</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-slate-400 group-hover:text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
</div>
  );
};

export default Companies;

