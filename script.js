document.getElementById("submit").addEventListener("click", async () => {
  const qn = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");
  answerBox.innerText = "Thinking...";

  const module = await import('./route.js');
  const fullText = await module.askPuter(qn);

  // 🧠 Split into words and stream
  const words = fullText.split(" ");
  answerBox.innerText = ""; // Clear previous

  for (let i = 0; i < words.length; i++) {
    answerBox.innerText += words[i] + " ";
    await new Promise(resolve => setTimeout(resolve, 80)); // 80ms delay between words
  }
});
