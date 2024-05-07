import { NextRequest, NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
export async function POST(request: NextRequest) {
  try {
    const { userInput, productName } = await request.json();
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBZSrcEAotU3NgTH9GZ-AMGRxhfdYosZks"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are an AI assistant in a chat interface. A user is asking a question about a product named ${productName}. 
    The user's question is: "${userInput}". Please provide a concise and professional response. If you don't know the answer 
    or don't recognize the product, please say so. Do not provide false information or recommend websites for the user to visit.
     Your response should be in the form of a short paragraph, as if a human is typing. Please respond in the same language as the user's 
     question, if possible. If you don't understand the language, please respond in English.`;
    userInput;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return NextResponse.json({ success: text });
  } catch (err) {
    return NextResponse.json({ error: "Error" });
  }
}
