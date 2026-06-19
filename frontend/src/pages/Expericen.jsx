import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaRocket } from "react-icons/fa";

const Expericen = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-24
    bg-gradient-to-b from-white via-slate-50 to-white mt-5">

  {/* Background Blur */}
  <div className="absolute -top-40 left-0 w-96 h-96 bg-cyan-200/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 blur-[120px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold">
        Interview Categories
      </span>

      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
        Choose Your Interview Path
      </h1>

      <p className="mt-5 text-lg text-slate-500 leading-8">
        Browse authentic interview experiences shared by candidates from
        India's leading service and product-based companies.
      </p>

    </div>

    {/* Cards */}

    <div className="grid md:grid-cols-2 gap-10 mt-20">

      {/* Service Based */}

      <div
        onClick={() => {navigate("/service-based")}}
        className="
        group
        cursor-pointer
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        "
      >

        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">

            <FaBuilding size={28} />

          </div>

          <h2 className="mt-8 text-3xl font-bold text-slate-800">
            Service-Based Companies
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Explore interview experiences from service companies focusing on
            aptitude, communication skills, core CS subjects, and project
            discussions.
          </p>

          <button
            className="
            mt-8
            px-6
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            group-hover:bg-blue-700
            transition
            "
          >
            Explore Interviews →
          </button>

        </div>

      </div>

      {/* Product Based */}

      <div
        onClick={() => navigate("/product-based")}
        className="
        group
        cursor-pointer
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        "
      >

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-teal-100 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-lg">

            <FaRocket size={28} />

          </div>

          <h2 className="mt-8 text-3xl font-bold text-slate-800">
            Product-Based Companies
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Learn from interview journeys at product companies with strong
            emphasis on DSA, low-level design, problem solving, and coding
            rounds.
          </p>

          <button
            className="
            mt-8
            px-6
            py-3
            rounded-xl
            bg-emerald-600
            text-white
            font-semibold
            group-hover:bg-emerald-700
            transition
            "
          >
            Explore Interviews →
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
  );
};

export default Expericen;

