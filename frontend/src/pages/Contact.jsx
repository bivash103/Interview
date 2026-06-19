import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');


  async function handleContact(e) {
    e.preventDefault();

    try {
        const res = await axios.post('http://localhost:8000/api/email/send',
          {name, email, para:text}
        );

        toast.success('Send Message Successfully');
        setEmail('');
        setName('');
        setText('');

    } catch (error) {
       console.log(error);
    }
  }

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white">

  {/* Background Blur */}
  <div className="absolute -top-32 left-0 w-96 h-96 bg-teal-200/20 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 blur-[120px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm">

        💬 Contact Us

      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">

        We'd Love to Hear From You

      </h2>

      <p className="mt-5 text-lg text-slate-500 leading-8">

        Whether you have an interview experience to share,
        feedback to improve the platform, or just want to say hello,
        we're always happy to connect with our community.

      </p>

    </div>

    {/* Contact Card */}

    <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden">

      <div className="grid md:grid-cols-2">

        {/* Left Side */}

        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-10 text-white flex flex-col justify-center">

          <h3 className="text-3xl font-bold">
            Let's Connect
          </h3>

          <p className="mt-5 leading-8 text-teal-50">

            Share your interview journey,
            ask questions,
            or suggest new features.

            Every message helps us build a better platform for students.

          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">

              <FaEnvelope />

              <span>support@intervuestories.com</span>

            </div>

            <div className="flex items-center gap-3">

              <FaUser />

              <span>Usually replies within 24 hours</span>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <form className="space-y-6">

            <div className="relative">

              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

              <input onChange={(e)=>setName(e.target.value)}
              value={name}
                type="text"
                placeholder="Full Name"
                className="w-full h-14 rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition"
              />

            </div>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>

              <input onChange={(e)=>setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Email Address"
                className="w-full h-14 rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition"
              />

            </div>

            <div className="relative">

              <FaCommentDots className="absolute left-4 top-5 text-slate-400"/>

              <textarea onChange={(e)=>setText(e.target.value)}
                rows="5"
                value={text}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-200 pl-12 pr-4 py-4 resize-none outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition"
              />

            </div>

            <button onClick={handleContact}
              type="submit"
              className="
              w-full
              h-14
              rounded-xl
              bg-gradient-to-r
              from-teal-500
              to-cyan-500
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>
  );
};

export default Contact;


