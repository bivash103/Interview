import mongoose from "mongoose";


const roundSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
});

const interviewSchema = new mongoose.Schema({


    role: {
      type: String,
      required: true,
      enum: [
        "Software Engineer",
        "Senior Software Engineer",
        "Full Stack Developer",
        "Data Scientist",
        "Product Manager",
        "UX/UI Designer",
        "QA Engineer",
        "DevOps Engineer",
        "Intern",
        "Other"
      ]
    },

    name: { type: String, required: true },

    intro: { type: String, required: true },

    rounds: [roundSchema],

    tips: { type: String },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },

}, { timestamps: true });

const Interview = mongoose.model('Interview', interviewSchema);

export default Interview;


