const { getChatResponse } = require("../services/chatService");

async function chatHandler(req, res) {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    const aiResponse = await getChatResponse(message);

    // if (!aiResponse || typeof aiResponse !== "object") {
    //   return res.status(500).json({ error: "Invalid AI response" });
    // }

    res.json({message:aiResponse});
  } catch (error) {
    console.log(error.message);
    
    console.error("Chat Controller Error:", error.message);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
}

module.exports = { chatHandler };
