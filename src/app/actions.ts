"use server"; // This defines it as a Server Action

// 1. Import Google AI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function askMIA(query: string) {
  try {
    // 2. Load the API Key safely from the environment
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!apiKey) {
      return { answer: "Error: API Key is missing." };
    }

    // 3. Initialize Google AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // or "gemini-1.5-flash"

    // 4. Generate content
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();

    // 5. Return the text in the format your frontend expects
    // Your frontend expects an object with an "answer" property (based on line 44 of your screenshot)
    return { answer: text };

  } catch (error) {
    console.error("AI Error:", error);
    return { answer: "Sorry, I am having trouble connecting to the server right now." };
  }
}
