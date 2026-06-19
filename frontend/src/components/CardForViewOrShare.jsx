import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareForm from './ShareForm';

const CardForViewOrShare = ({ company, onClose }) => {

  const navigate = useNavigate();
  const [shareData, setShareData] = useState(false);

    console.log("Company object:", company);



  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm 
      flex justify-center items-center z-50"
    >

      {!shareData && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-8 rounded-3xl shadow-2xl 
          flex flex-col items-center gap-6 w-[350px]"
        >
          <img
            src={company.logo}
            alt={company.logo}
            className="w-20 h-20 rounded object-cover shadow-md border border-slate-500 p-2"
          />

          <p className="text-2xl font-semibold text-gray-800">
            {company.name}
          </p>

          <div className="flex gap-5">

            {/* FIXED VIEW BUTTON */}
            <button 
              onClick={() => {
                navigate('/view', {
                  state: {
                    companyName: company.name,
                    companyImage: company.logo,
                    companyId: company._id
                  }
                });
                scroll(0, 0);
              }} 
              className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow 
              hover:bg-blue-600 transition cursor-pointer"
            >
              View 
            </button>

            {/* SHARE BUTTON */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShareData(true);
                
              }}
              className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg shadow 
              hover:bg-teal-500/30 transition cursor-pointer"
            >
              Share
            </button>
          </div>

        </div>
      )}

      {shareData && (
        <div 
          onClick={(e) => e.stopPropagation()}
          className="bg-white mt-10 mb-10 p-6 shadow-2xl 
          w-[650px] h-[90%]"
        >
          <ShareForm
            companyName={company.name}
            companyImage={company.logo}
            companyId={company._id}  
            closeForm={() => setShareData(false)} 
          />
        </div>
      )}

    </div>
  );
};

export default CardForViewOrShare;



