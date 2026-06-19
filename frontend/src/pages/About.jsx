import React from "react";
import { FaRoad, FaUserTie, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();


  return (
    <section className="relative bg-gray-50 py-20 px-6 md:px-20 overflow-hidden mt-10">
      
      {/* Background Gradient Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why <span className="text-blue-600">InterviewSite</span>?
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            InterviewSite helps students prepare efficiently by combining structured
            role-based roadmaps with real interview experiences from top companies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
              <FaRoad size={26} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Role-based Roadmaps
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Carefully designed learning paths for roles like SDE-1, Data Analyst,
              and MERN Developer — broken into clear stages and topics.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
              <FaUserTie size={26} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Real Interview Insights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from real candidates’ experiences including interview rounds,
              questions asked, preparation strategies, and mistakes to avoid.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6">
              <FaLightbulb size={26} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Smart & Focused Prep
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Instead of random studying, focus only on what actually matters —
              guided by structured roadmaps and real interview patterns.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Built by a student, for students — to crack interviews with confidence.
          </p>
          <button onClick={()=> {navigate('/roadmap'), scroll(0,0)}}
          className="px-8 py-3 rounded-xl cursor-pointer bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Explore Roadmaps
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;


