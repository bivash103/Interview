import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddCard = ({ add, setAdd, onClose }) => {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [logo, setLogo] = useState(null);

  const defaultLogo =
    "https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg";

  // ✅ ADD THIS LINE
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !type || !logo) {
      toast.error("Please fill all fields and upload a logo");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('type', type);
      formData.append('logo', logo);

      // ✅ CHANGE THIS LINE
      const response = await fetch(
        `${BASE_URL}/api/company/company-create`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Company added successfully!");
        setAdd(false);
        setName('');
        setType('');
        setLogo(null);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-75"
    >
      {add && (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-3 w-[350px]"
        >
          <label className="flex flex-col items-center cursor-pointer">
            <img
              className="w-24 h-24 object-contain bg-slate-500/10 p-6 rounded-full"
              src={logo ? URL.createObjectURL(logo) : defaultLogo}
              alt="Logo Preview"
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </label>

          <input
            type="text"
            className="border border-slate-500 px-4 py-2 rounded w-full"
            placeholder="Company name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="w-full border border-slate-500 px-4 py-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Type of Company...</option>
            <option value="product">Product Based</option>
            <option value="service">Service Based</option>
          </select>

          <div className="flex gap-5 w-full justify-center">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCard;

