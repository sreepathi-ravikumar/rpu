export async function askPuter(question) {
  const response = await puter.ai.chat(question);
  return response;
}
