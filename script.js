document.getElementById("submit").addEventListener("click", async () => {
  const qn = document.getElementById("question").value;

  const module = await import('./route.js');
  const res = await module.askPuter(qn);

  document.getElementById("answer").innerText = res;
});
