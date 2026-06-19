import Company from "../models/Company.js";
import imagekit from "../configs/imageKit.js";

export const createCompany = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (!name || !type)
      return res.status(400).json({ success: false, message: "Name & type required" });

    if (!req.file)
      return res.status(400).json({ success: false, message: "No logo uploaded" });

    // Case-insensitive duplicate check WITHOUT normalizedName
    const existingCompany = await Company.findOne({ name })
      .collation({ locale: "en", strength: 2 });

    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    // Upload logo
    const uploaded = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-logo.png`,
      folder: "/company-logos",
    });

    // Save company
    const company = await Company.create({
      name,
      type,
      logo: uploaded.url,
    });

    res.status(201).json({
      success: true,
      message: "Company created successfully",
      company,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//fetch compnay based on type
// GET /api/company?type=product or /api/company?type=service
export const getCompaniesByType = async (req, res) => {
  try {
    const { type } = req.query;

    if (!type) {
      return res.status(400).json({ success: false, message: "Type is required" });
    }

    // Return RAW mongoose objects (BEST)
    const companies = await Company.find({ type }).sort({ name: 1 });

    res.status(200).json({
      success: true,
      companies,   // ← DO NOT MAP, return full object!!
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

