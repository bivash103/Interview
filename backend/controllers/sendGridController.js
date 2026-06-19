import sgMail from "../configs/sendGrid.js";

export const contactMail = async (req, res) => {
  try {
    const { name, email, para } = req.body;
    

    await sgMail.send({
      to: email,
      from: process.env.EMAIL,
      subject: "Mail From User",
      text: para,
      html: `
    <h1>Message From User</h1>
    <p>${para}</p>
  `,
    });

    res.json({
      success: true,
      message: "Successfully Sent Mail",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Something went wrong ${error}`,
    });
  }
};
