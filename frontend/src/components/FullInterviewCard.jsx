import React from "react";

const FullInterviewCard = ({ onClose, data }) => {
  
  return (
    <div
  onClick={onClose}
  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-center items-center p-4"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
  >

    {/* Top Gradient */}
    <div className="h-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

    {/* Close Button */}
    <button
      onClick={onClose}
      className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-500 transition flex items-center justify-center"
    >
      ✕
    </button>

    <div className="p-8 md:p-12">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center gap-6">

        {/* Avatar */}

        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
          {data.name?.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">

          <h1 className="text-4xl font-bold text-slate-800">
            Interview Experience
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            Shared by
            <span className="font-semibold text-slate-700">
              {" "}
              {data.name}
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            <span className="px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold">
              {data.role}
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
              Interview Experience
            </span>

          </div>

        </div>

      </div>

      {/* ================= INTRODUCTION ================= */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold text-slate-800 mb-5">
          Introduction
        </h2>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 leading-8 text-slate-600">
          {data.intro}
        </div>

      </div>

      {/* ================= ROUNDS ================= */}

      <div className="mt-12">

        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          Interview Rounds
        </h2>

        <div className="space-y-8">

          {data.rounds.map((round, index) => (

            <div
              key={index}
              className="relative pl-12"
            >

              {/* Timeline */}

              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-teal-200"></div>

              {/* Number */}

              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold flex items-center justify-center shadow">
                {index + 1}
              </div>

              {/* Card */}

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-teal-300 transition duration-300">

                <h3 className="text-xl font-semibold text-slate-800">
                  {round.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {round.details}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= TIPS ================= */}

      <div className="mt-14">

        <h2 className="text-2xl font-bold text-slate-800 mb-5">
          Tips & Advice
        </h2>

        <div className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6">

          <p className="leading-8 text-slate-700">
            {data.tips}
          </p>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div className="mt-14 flex justify-end">

        <button
          onClick={onClose}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:scale-105 transition duration-300"
        >
          Close
        </button>

      </div>

    </div>

  </div>
</div>
  );
};

export default FullInterviewCard;


