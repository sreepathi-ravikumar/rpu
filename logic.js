const axios = require("axios");

async function askAI(question) {
  try {
    const res = await axios.post("https://api.puter.com/v2/chat", {
      prompt: question
    });

    return res.data.response || "No response from AI.";
  } catch (err) {
    return "Error: " + err.message;
  }
}

module.exports = askAI;