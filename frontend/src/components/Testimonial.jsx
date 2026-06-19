import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Software Engineer Intern",
    location: "Bangalore, India",
    image: "https://img.freepik.com/free-photo/vertical-shot-nice-guy-sitting-chair-street_176420-8226.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review: "Amazing platform! Real interview experiences helped me prepare confidently and understand what top companies expect."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Full-Stack Developer",
    location: "Texas, USA",
    image: "https://img.freepik.com/free-photo/cheerful-woman-with-binoculars_23-2147654303.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    review: "Very helpful insights from real candidates. Clean design and super easy to navigate. Highly recommended!"
  },
  {
    id: 3,
    name: "Karan Sharma",
    role: "Data Analyst",
    location: "Pune, India",
    image: "https://www.blitzxpat.com/daniel.png",
    rating: 5,
    review: "Loved the detailed interview explanations. Helped me crack my first tech interview with confidence!"
  }
];

const Testimonials = () => {
  return (
   <div className="max-w-[1200px] mx-auto px-4 py-20">

  {/* Heading */}

  <div className="text-center max-w-3xl mx-auto mb-16">

    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
      What Our Users Say
    </h1>

    <p className="mt-4 text-slate-500 text-base md:text-lg leading-8">
      Real stories from candidates who improved their interview preparation
      using IntervueStories.
    </p>

  </div>

  {/* Testimonials */}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {testimonials.map((t) => (

      <div
        key={t.id}
        className="
        group
        relative
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-3
        transition-all
        duration-500
        overflow-hidden
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

        {/* Quote */}

        <div className="relative text-5xl text-teal-500 font-bold leading-none">
          “
        </div>

        {/* User */}

        <div className="relative flex items-center gap-4 mt-4">

          <img
            src={t.image}
            alt={t.name}
            className="
            w-16
            h-16
            rounded-full
            object-cover
            ring-2
            ring-slate-100
            group-hover:ring-teal-200
            transition
            "
          />

          <div>

            <h3 className="font-semibold text-lg text-slate-800">
              {t.name}
            </h3>

            <p className="text-sm text-slate-500">
              {t.role}
            </p>

            <p className="text-xs text-slate-400">
              {t.location}
            </p>

          </div>

        </div>

        {/* Rating */}

        <div className="relative flex gap-1 mt-5 text-yellow-400 text-lg">

          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}

        </div>

        {/* Review */}

        <p className="relative mt-6 text-slate-600 leading-7">
          {t.review}
        </p>

      </div>

    ))}

  </div>

</div>
  );
};

export default Testimonials;

