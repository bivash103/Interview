
import Interview from "../models/Interview.js";
import mongoose from 'mongoose';

//store interview in db
export const createInterview = async(req, res) =>{

      try {

            const {name, intro, rounds, tips, role, company} = req.body;

            if(!name  || !intro || !tips || !role || !Array.isArray(rounds) || rounds.length === 0){
                  return res.status(401).json({
                        success:false,
                        message:'Fill all the fields',
                  })
            }

            const interview = await Interview.create({
                  role,
                  name,
                  rounds,
                  intro,
                  tips,
                  company,
                  userId: req.user._id
            });


            res.status(201).json({
                  success: true,
                  message: "Interview added successfully",
                  interview,
            });
            
      } catch (error) {
            console.log(error.message)
            return res.json({
                  success:false,
                  message:error.message
            })

      }
}

//fetch interview based on role + company from db



//fetch interview data from db based on user id(particular user)
export const getInterviewById = async (req, res) => {

      try {

            const { id: interviewId } = req.params;

            if (!mongoose.Types.ObjectId.isValid(interviewId)) {
                  return res.status(400).json({ success: false, message: "Invalid interview ID" });
            }

            // Find the interview that belongs to this user
            const interview = await Interview.findById(interviewId);
                  

            if (!interview) {
                  return res.status(404).json({ success: false, message: "Interview not found" });
            }

            res.status(200).json({
                  success: true,
                  interview
            });

      } catch (error) {
           res.status(500).json({ success: false, message: error.message });
      }
};



// Fetch interviews by companyId AND optional role
// Fetch interviews by companyId AND optional role

export const getInterviewsByCompanyAndRole = async (req, res) => {
      try {
      const { companyId, role } = req.query;
      console.log(companyId);
      console.log(role);

      if (!companyId) {
            return res.status(400).json({ success: false, message: "companyId is required" });
      }

      // Validate ObjectId
      if (!mongoose.Types.ObjectId.isValid(companyId)) {
            return res.status(400).json({ success: false, message: "Invalid companyId" });
      }

      const filter = { company: companyId }; // safe now

      if (role && role.trim() !== "") {
            filter.role = { $regex: role.trim(), $options: "i" };
      }

      const interviews = await Interview.find(filter)
            .populate('company', 'name type')
            .sort({ createdAt: -1 });

      

      return res.status(200).json({ success: true, interviews });

      } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
      }
};




