export async function askPuter(question) {
  try {
    const response = await puter.ai.chat(question);
    return response;
  } catch (err) {
    return "Error: " + err.message;
  }
}
