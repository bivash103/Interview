import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { token, logout } = useAppContext();
  
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    setMobileOpen(false);
    setProfileOpen(false);
    logout();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60 shadow-sm">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3 group">

        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:rotate-6 transition">

          <PiMicrophoneStageFill className="text-white text-2xl"/>

        </div>

        <div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 bg-clip-text text-transparent">
            IntervueStories
          </h1>

          <p className="text-xs text-slate-400">
            Learn • Share • Crack Interviews
          </p>
        </div>

      </Link>

      {/* DESKTOP MENU */}

      {token && (

      <nav className="hidden lg:flex items-center gap-3 bg-white rounded-full shadow-lg px-3 py-2 border">

        {menuLinks.map((item)=>(
          <Link
          key={item.name}
          to={item.path}
          className={`px-5 py-2 rounded-full transition-all duration-300 font-medium

          ${
            location.pathname===item.path
            ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
            : "text-slate-600 hover:bg-slate-100"
          }

          `}
          >

            {item.name}

          </Link>
        ))}

      </nav>

      )}

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {token && (

        <div className="relative">

          <button
          onClick={()=>setProfileOpen(!profileOpen)}
          className="w-11 h-11 rounded-full bg-gradient-to-r
           from-cyan-500 to-blue-500 text-white flex justify-center
            items-center text-2xl shadow-lg hover:scale-105 transition"
          >
            <CgProfile/>
          </button>

          {profileOpen && (

          <div className="absolute right-0 mt-4 w-60 rounded-2xl bg-white border shadow-2xl overflow-hidden">

            <div className="px-5 py-4 border-b">

              <p className="font-semibold">
                Welcome 👋
              </p>

              <p className="text-sm text-slate-500">
                Manage your account
              </p>

            </div>

            <button 
            onClick={()=>{
              navigate("/")
              setProfileOpen(false)
            }}
            className="w-full text-left px-5 py-3 hover:bg-slate-50 transition"
            >
              👤 My Profile
            </button>

            <button
            onClick={handleLogout}
            className="w-full text-left px-5 py-3 hover:bg-red-50 text-red-600 transition"
            >
              🚪 Logout
            </button>

          </div>

          )}

        </div>

        )}

        {/* MOBILE */}

        {token && (

        <button
        onClick={()=>setMobileOpen(true)}
        className="lg:hidden w-11 h-11 rounded-xl border bg-white shadow flex justify-center items-center hover:bg-slate-100 transition"
        >

          <RxHamburgerMenu className="text-2xl"/>

        </button>

        )}

      </div>

    </div>
  </div>
</header>
  );
};

export default Navbar;


