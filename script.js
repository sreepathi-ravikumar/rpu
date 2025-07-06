function askAI() {
    const question = document.getElementById("userInput").value;
    const responseBox = document.getElementById("response");

    // Clear previous response and show loading...
    responseBox.innerText = "Thinking... 🤔";

    if (question.trim() === "") {
        responseBox.innerText = "Please enter a question.";
        return;
    }

    // Ask the question to the AI
    puter.ai.chat(question)
        .then(response => {
            responseBox.innerText = response;
        })
        .catch(error => {
            responseBox.innerText = "Oops! Something went wrong.";
            console.error(error);
        });
}
