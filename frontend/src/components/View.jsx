import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const View = () => {


    const location = useLocation();
    const { companyName, companyImage, companyId } = location.state || {};
    const navigate = useNavigate();


  const roles = [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Senior Software Engineer" },
    { id: 3, name: "Full Stack Developer" },
    { id: 4, name: "Data Scientist" },
    { id: 5, name: "Product Manager" },
    { id: 6, name: "UX/UI Designer" },
    { id: 7, name: "QA Engineer" },
    { id: 8, name: "DevOps Engineer" },
    { id: 9, name: "Intern" },
    { id: 10, name: "Other" },
  ];

  return (
<div className="w-full min-h-screen bg-gradient-to-br from-slate-50
 via-white to-teal-50 py-20 mt-5">

  <div className="max-w-7xl mx-auto px-5">

    {/* Company Logo */}
    <div className="flex justify-center">
      <div
        className="w-36 h-36 md:w-40 md:h-40
        bg-white rounded-3xl
        border border-slate-200
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        flex items-center justify-center
        p-6 transition duration-300
        hover:scale-105 hover:shadow-[0_25px_70px_rgba(20,184,166,0.18)]"
      >
        <img
          src={companyImage}
          alt={companyName}
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    {/* Heading */}
    <div className="text-center mt-10">

      <span
        className="inline-flex items-center
        px-5 py-2 rounded-full
        bg-teal-100 text-teal-700
        font-semibold text-sm"
      >
        {companyName}
      </span>

      <h1
        className="mt-6
        text-4xl md:text-5xl lg:text-6xl
        font-bold tracking-tight
        text-slate-800"
      >
        Choose Your
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
          {" "}Interview Role
        </span>
      </h1>

      <p
        className="max-w-3xl mx-auto
        mt-5
        text-slate-500
        text-lg
        leading-8"
      >
        Browse authentic interview experiences shared by candidates.
        Discover coding rounds, HR discussions, technical interviews,
        and hiring processes for your selected role.
      </p>

    </div>

    {/* Cards */}

    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-8
      mt-20"
    >

      {roles.map((item) => (

        <div

          key={item.id}

          onClick={() =>
            navigate("/role-experience", {
              state: {
                companyId,
                companyName,
                companyImage,
                role: item.name,
              },
            })
          }

          className="group cursor-pointer"

        >

          <div
            className="
            relative
            h-full
            bg-white
            rounded-3xl
            border border-slate-200
            p-8
            overflow-hidden

            shadow-[0_8px_30px_rgba(15,23,42,0.05)]

            transition-all
            duration-300

            hover:-translate-y-3
            hover:border-teal-300
            hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)]"
          >

            {/* Glow */}

            <div
              className="
              absolute
              -right-10
              -top-10

              w-36
              h-36

              rounded-full

              bg-teal-200/40

              blur-3xl

              opacity-0

              group-hover:opacity-100

              transition
              duration-500"
            />

            {/* Icon */}

            <div
              className="
              w-16
              h-16

              rounded-2xl

              bg-gradient-to-r
              from-teal-500
              to-cyan-500

              text-white

              flex
              items-center
              justify-center

              text-2xl

              shadow-lg"
            >
              💼
            </div>

            {/* Role */}

            <h2
              className="
              mt-7
              text-2xl
              font-bold
              text-slate-800

              group-hover:text-teal-600

              transition"
            >
              {item.name}
            </h2>

            {/* Description */}

            <p
              className="
              mt-4
              text-slate-500
              leading-7
              text-[15px]"
            >
              Explore technical interviews, coding rounds,
              HR discussions, hiring process and interview
              experiences shared by real candidates.
            </p>

            {/* Bottom */}

            <div
              className="
              mt-8

              flex
              items-center
              justify-between"
            >

              <span
                className="
                text-teal-600
                font-semibold"
              >
                Explore
              </span>

              <div
                className="
                w-10
                h-10

                rounded-full

                bg-teal-50

                flex
                items-center
                justify-center

                text-teal-600

                group-hover:bg-teal-500
                group-hover:text-white

                transition-all
                duration-300"
              >
                →
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
  )
}

export default View
