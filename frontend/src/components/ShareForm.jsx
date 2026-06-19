import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ShareForm = ({ closeForm, companyName, companyImage, companyId }) => {
  const [rounds, setRounds] = useState([{ title: "", details: "" }]);
  const [company, setCompany] = useState(companyId)

  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');
  const [role, setRole] = useState('');
  const [tips, setTips] = useState('');
  
  const BASE_URL = import.meta.env.VITE_API_URL;

  const {token} = useAppContext();

  // Update round input
  const handleRoundChange = (index, field, value) => {
    const updated = [...rounds];
    updated[index][field] = value;
    setRounds(updated);
  };

  // Add a new round
  const addRound = () => {
    setRounds([...rounds, { title: "", details: "" }]);
  };


  const handleSubmit = async ()=>{
      
      try {

        

        const payload = {
           name,
           role,
           intro,
           rounds,
           company:companyId,
           tips
        }

        const response = await fetch(`${BASE_URL}/api/interviews/create`,{
           method:"POST",
           headers: {
              "Content-Type": "application/json",
              Authorization: token, // send token directly
           },
           body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log(data);

        if(data.success){
          toast.success('Interview Added Successfully');
          closeForm();
          setName('');
          setIntro('');
          setRole('');
          setRounds([{ title: "", details: "" }]);
          setTips('')
        }else{
          toast.error(data.message)
        }
        
      } catch (error) {
        console.log(error.messgae);
        toast.error(error.message)
      }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start py-10 overflow-y-auto z-50">
      <div
        className="bg-white w-[95%] md:w-[750px] rounded-2xl p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
        {/* BACK BUTTON */}
          <button
            type="button"
            onClick={closeForm}
            className="text-blue-500 underline px-4 py-1.5  text-medium
           transition-all duration-300 cursor-pointer"
          >
            Back
          </button>
          {/* SUBMIT BUTTON (TOP RIGHT) */}
        <button onClick={handleSubmit}
          className=" bg-primary text-white px-4 py-1.5 rounded-lg text-sm
           hover:bg-primary-dull transition-all duration-300 cursor-pointer"
        >
          Submit
        </button>
        
        </div>

        {/* HEADER */}
        <div className="flex items-center gap-4 mt-2">
          <img
            src={companyImage}
            className="w-16 h-16 object-cover border border-slate-500 shadow-lg rounded p-2"
          />
          <h1 className="text-2xl font-semibold text-gray-800">
            Share Your Experience – {companyName}
          </h1>
        </div>

        <hr className="mt-4 mb-6 border-gray-300" />

        {/* FORM */}
        <form className="flex flex-col gap-6">
          {/* NAME */}
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input onChange={(e) =>setName(e.target.value)}
              type="text"
              value={name}
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg 
              focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* INTRO */}
          <div>
            <label className="text-gray-700 font-medium">Small Introduction</label>
            <textarea onChange={(e) =>setIntro(e.target.value)}
              rows={3}
              value={intro}
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg 
              focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="Short introduction about yourself"
            ></textarea>
          </div>

          {/* Add role */}
          <select onChange={(e) =>setRole(e.target.value)}
          value={role}
           className="text-gray-700 font-medium
          w-full mt-1 border border-gray-300 p-3 rounded-lg 
              focus:ring-2 focus:ring-teal-500 outline-none">
            <option value="">Select Role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Senior Software Engineer">Senior Software Engineer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>

          {/* MULTIPLE ROUNDS */}
          <div className="flex flex-col gap-4">
            {rounds.map((round, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-5 bg-gray-50 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Round {index + 1}
                </h3>

                {/* Round Title */}
                <input
                  type="text"
                  placeholder="Round title (e.g. Technical Round, HR Round)"
                  className="w-full border border-gray-300 p-3 rounded-lg 
                  focus:ring-2 focus:ring-teal-500 outline-none"
                  value={round.title}
                  onChange={(e) =>
                    handleRoundChange(index, "title", e.target.value)
                  }
                />

                {/* Round Description */}
                <textarea
                  rows="5"
                  placeholder="Write detailed experience"
                  className="w-full mt-3 border border-gray-300 p-3 rounded-lg 
                  focus:ring-2 focus:ring-teal-500 outline-none"
                  value={round.details}
                  onChange={(e) =>
                    handleRoundChange(index, "details", e.target.value)
                  }
                ></textarea>
              </div>
            ))}

            {/* small tips */}
            <div>
            <label className="text-gray-700 font-medium">Tips or Suggestions</label>
            <textarea onChange={(e) =>setTips(e.target.value)}
              rows={3}
              value={tips}
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg 
              focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="Any tips or suggestion for tech asparaint......."
            ></textarea>
          </div>

            {/* SMALL "ADD ROUND" BUTTON */}
            <button
              type="button"
              onClick={addRound}
              className="self-start px-4 py-2 bg-primary text-white rounded-md 
              text-sm hover:bg-primary-dull cursor-pointer transition-all duration-300"
            >
              + Add Round
            </button>
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default ShareForm;
