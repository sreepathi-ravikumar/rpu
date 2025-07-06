document.getElementById("submit").addEventListener("click", () => {
  const qn = document.getElementById("question").value;

  import('./route.js').then(module => {
    module.askPuter(qn).then(res => {
      document.getElementById("answer").innerText = res;
    });
  });
});
