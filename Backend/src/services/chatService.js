
require("dotenv").config({ path: "../../.env" }); // Adjust the path to the root .env file
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getChatResponse(message) {

const genAI = new GoogleGenerativeAI("AIzaSyDTwz0O8mIauydGwFsGvo0z0CqnvhUqtE4");
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",systemInstruction:`You are a helpful medical diagnosis chatbot respond to users every query and provide proper well structured and good lengthend reply to patient , make sure that the reply is directly readable and dont use any unnecesary symbols you can also add newlines to break reply into pointwise sentences,provide shorter reply`,temperature: 0.5, maxOutputTokens: 1000, stopSequences: ["\n\n"] });



  const result = await model.generateContent(message);

  console.log(result.response.text())

  return result.response.text();

}

module.exports = { getChatResponse };