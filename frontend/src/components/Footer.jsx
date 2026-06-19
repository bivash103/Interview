import React from "react";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Footer = () => {
  const { token } = useAppContext();

  if (!token) return null;

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-slate-200">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50"></div>

      {/* Blur */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Logo */}

          <div className="flex flex-col items-center md:items-start">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex justify-center items-center shadow-lg">

                <PiMicrophoneStageFill className="text-white text-3xl"/>

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-800">
                  IntervueStories
                </h2>

                <p className="text-sm text-slate-500">
                  Learn • Share • Crack Interviews
                </p>

              </div>

            </div>

          </div>

          {/* Links */}

          <div className="flex flex-col items-center">

            <h3 className="font-semibold text-slate-700 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="#"
                className="text-slate-500 hover:text-teal-600 transition"
              >
                Brand Guidelines
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-teal-600 transition"
              >
                Trademark Policy
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-teal-600 transition"
              >
                Privacy Policy
              </a>

            </div>

          </div>

          {/* Social */}

          <div className="flex flex-col items-center md:items-end">

            <h3 className="font-semibold text-slate-700 mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow hover:bg-teal-500 hover:text-white transition flex justify-center items-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow hover:bg-teal-500 hover:text-white transition flex justify-center items-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white shadow hover:bg-teal-500 hover:text-white transition flex justify-center items-center"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2025 <span className="font-semibold text-slate-700">IntervueStories</span>. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
