import client from "../configs/gemini.js"


export const userChat = async(req, res)=>{

      try {

            const {msg} = req.body

            const result = await client.models.generateContent({
                  model:"gemini-2.5-flash",
                  contents:msg
            })

            res.json({
                  success:true,
                  reply:result.text,
            })
            
      } catch (error) {
            res.json({
                  success:false,
                  message:error.message
            })
      }
}