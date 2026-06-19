import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Login from "./Login";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { token } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) setShowLogin(false);
  }, [token]);

  return (
  <>
    <section
      className={`mt-10 relative overflow-hidden transition-all duration-300 ${
        showLogin ? "opacity-70" : "opacity-100"
      } min-h-screen flex items-center`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50" />

      {/* Gradient Blur */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-cyan-300/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-pink-300/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

        {/* LEFT */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-600 font-medium mb-8">
            🚀 India's Interview Experience Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-800">
            Crack Your
            <span className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Dream Interview
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-500 leading-8 max-w-xl">
            Discover real interview experiences, coding rounds, HR questions,
            and placement stories from top companies to prepare with confidence.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            {!token && (
              <button
                onClick={() => setShowLogin(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Get Started
              </button>
            )}

            <button onClick={()=> navigate('/experience')}
              className="px-8 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 transition"
            >
              Browse Stories
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-3xl font-bold text-slate-800">10K+</h2>
              <p className="text-slate-500">Stories</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800">150+</h2>
              <p className="text-slate-500">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-800">25K+</h2>
              <p className="text-slate-500">Students</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          {/* Floating Card */}

          <div className="absolute -left-10 top-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-5 py-4 border animate-bounce">
            <h3 className="font-semibold">Google</h3>
            <p className="text-sm text-slate-500">SDE Interview</p>
          </div>

          <div className="absolute -right-12 top-28 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-5 py-4 border animate-pulse">
            <h3 className="font-semibold">Microsoft</h3>
            <p className="text-sm text-slate-500">OA Experience</p>
          </div>

          <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-lg
           rounded-2xl shadow-xl px-5 py-4 border z-50">
            <h3 className="font-semibold">Amazon</h3>
            <p className="text-sm text-slate-500">HR Round</p>
          </div>

          <img
            src={assets.Hero_Logo}
            alt=""
            className="w-[520px] drop-shadow-2xl"
          />

        </div>

      </div>
    </section>

    {/* Login Popup */}

    {showLogin && (
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50"
        onClick={() => setShowLogin(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl"
        >
          <Login close={() => setShowLogin(false)} />
        </div>
      </div>
    )}
  </>
);
};

export default Hero;
