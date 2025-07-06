const express = require("express");
const bodyParser = require("body-parser");
const askAI = require("./logic");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/ask", async (req, res) => {
  const question = req.body.question;
  const answer = await askAI(question);
  res.json({ answer });
});

app.listen(port, () => {
  console.log(✅ Server running at http://localhost:${port});
});