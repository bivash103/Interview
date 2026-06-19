import React from 'react'
import { FaClock,FaRoad } from "react-icons/fa";

const MapRoad = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white">

  {/* Background Blur */}
  <div className="absolute -top-32 left-0 w-96 h-96 bg-teal-200/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 blur-[120px] rounded-full"></div>

  <div className="relative max-w-5xl mx-auto px-6">

    {/* Badge */}

    <div className="flex justify-center mt-5">

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold shadow-sm">

        <FaClock className="text-xs" />

        Coming Soon

      </div>

    </div>

    {/* Card */}

    <div
      className="
      mt-10
      bg-white
      border
      border-slate-200
      rounded-[32px]
      shadow-xl
      hover:shadow-2xl
      transition-all
      duration-500
      p-10
      md:p-14
      text-center
      "
    >

      {/* Icon */}

      <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">

        <FaRoad className="text-white text-3xl" />

      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-bold tracking-tight text-slate-900">

        Role-Based

        <span className="text-teal-600"> Roadmaps</span>

      </h2>

      {/* Description */}

      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600">

        Structured learning paths designed from real interview experiences.

        Whether you're preparing for

        <span className="font-semibold text-slate-800">
          {" "}SDE-1, Frontend, Backend, Full Stack, Data Analyst, or DevOps
        </span>

        , you'll get a complete roadmap covering skills, projects,
        interview preparation, and placement strategy.

      </p>

      {/* Divider */}

      <div className="w-28 h-1 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto my-10"></div>

      {/* Footer */}

      <div className="flex flex-wrap justify-center gap-3">

        <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
          📚 Curated Resources
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
          💻 Project Guides
        </span>

        <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
          🎯 Interview Preparation
        </span>

      </div>

      <p className="mt-10 text-slate-500 font-medium">
        🚀 Launching Soon — Stay Tuned!
      </p>

    </div>

  </div>

</section>
  )
}

export default MapRoad
