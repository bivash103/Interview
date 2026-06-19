import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import FullInterviewCard from "./FullInterviewCard";
import { useAppContext } from "../context/AppContext";

const RoleExperience = () => {

  const location = useLocation();
  const { companyId, companyName, companyImage, role } = location.state || {};
  console.log("STATE RECEIVED:", location.state);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;


  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fullInterviewShow, setFullInterviewShow] = useState(false);
  const [selectInterview, setSelectInterview] = useState(null);

  const [visible, setVisible] = useState(6);
  const {token} = useAppContext()

  const handleMore = () => setVisible((prev) => prev + 6);

  // --- FETCH FROM BACKEND ---
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        let url = `${BASE_URL}/api/interviews/by-role?companyId=${companyId}`;
        if (role) url += `&role=${encodeURIComponent(role)}`;


        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: ` ${token}`, // make sure your backend expects "Bearer "
          },
        });

        const data = await res.json();
      

        if (data.success) {
          setInterviews(data.interviews);
        }
      } catch (err) {
        console.error("Error fetching interviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, [companyId, role, token]);


  // Loader
 if (loading) {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-teal-200
                        border-t-teal-500 animate-spin" />

        {/* Text */}
        <p className="text-gray-500 text-lg font-medium">
          Loading interview experiences...
        </p>
      </div>
    </div>
  );
}


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20
    mt-5">

  <div className="max-w-7xl mx-auto px-5">

    {/* Company Header */}

    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 mb-16">

      <div className="flex flex-col md:flex-row items-center md:items-center gap-6">

        <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center p-4">
          <img
            src={companyImage}
            alt={companyName}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left">

          <span className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold">
            {companyName}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-800">
            {role}
          </h1>

          <p className="mt-2 text-slate-500">
            Browse authentic interview experiences shared by candidates who interviewed for this role.
          </p>

        </div>

      </div>

    </div>

    {/* Empty State */}

    {interviews.length === 0 ? (

      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg py-24 text-center">

        <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-5xl shadow-lg">
          🎤
        </div>

        <h2 className="mt-8 text-3xl font-bold text-slate-800">
          No Interview Experiences Yet
        </h2>

        <p className="mt-4 text-slate-500 max-w-lg mx-auto leading-7">
          Nobody has shared their interview experience for this role yet.
          Help thousands of students by sharing your own interview journey.
        </p>

        <button
          onClick={() => navigate("/experience")}
          className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:scale-105 transition duration-300"
        >
          Share Your Experience
        </button>

      </div>

    ) : (

      <>

        {/* Interview Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {interviews.slice(0, visible).map((exp) => (

            <div
              key={exp._id}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top Accent */}

              <div className="h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

              {/* Glow */}

              <div className="absolute -top-16 -right-16 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-7 flex flex-col h-full">

                {/* Avatar */}

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                    {exp.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-slate-800">
                      {exp.name}
                    </h2>

                    <p className="text-sm text-teal-600 font-medium">
                      {exp.role}
                    </p>

                  </div>

                </div>

                {/* Divider */}

                <div className="my-6 border-t border-slate-100"></div>

                {/* Description */}

                <p className="text-slate-500 leading-7 flex-grow">
                  Explore the complete interview process including coding rounds,
                  technical discussions, HR questions, tips and candidate experience.
                </p>

                {/* Footer */}

                <button
                  onClick={() => {
                    setFullInterviewShow(true);
                    setSelectInterview(exp);
                  }}
                  className="mt-8 w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition duration-300"
                >
                  View Experience
                  <span>→</span>
                </button>

              </div>

            </div>

          ))}

        </div>

      </>

    )}

    {/* Load More */}

    {interviews.length > 0 && visible < interviews.length && (

      <div className="flex justify-center mt-16">

        <button
          onClick={handleMore}
          className="group px-8 py-3 rounded-xl bg-white border border-slate-200 shadow-md hover:border-teal-400 hover:text-teal-600 hover:shadow-xl transition-all duration-300 flex items-center gap-3 font-semibold"
        >
          Load More

          <FaArrowRightLong className="group-hover:translate-x-1 transition" />

        </button>

      </div>

    )}

    {/* Popup */}

    {fullInterviewShow && (

      <FullInterviewCard
        data={selectInterview}
        onClose={() => setFullInterviewShow(false)}
      />

    )}

  </div>

</div>
  );
};

export default RoleExperience;
