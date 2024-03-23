import { NextRequest, NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
export async function POST(request: NextRequest) {
  try {
    const { userInput } = await request.json();
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBZSrcEAotU3NgTH9GZ-AMGRxhfdYosZks"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Given the product 'iPhone 15', please provide a concise response, keep it short and clean as you are talking to a user through a chat interface ,only answer the question and dont recommend websites for the user to visit, now the following user question: " +
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
