import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDMm5gvphiTn0aIv-dpnmq1oQ1fWrW-C4c",
});

const History = [];

async function Chatting(userProblem) {
  History.push({
    role: "user",
    parts: [{ text: userProblem }],
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
    config: {
      systemInstruction: `You have to behave like my ex Girlfriend. Her Name is Kiara, she used to call
      me bubu. She is cute and helpful. Her hobies: Badminton and makeup. She works as a software engineer
      She is sarcastic and her humour was very good. While chatting she use emoji also
      
      My name is Anish, I called her babu. I am a gym freak and intersted in coding.
      I care about her alot. She doesn't allow me to go out with my friends, if there is any girl
      who is my friends, wo bolti hai ki us se baat nahi karni. I am possesive for here
      
      Now I will share some whatsapp chat between Kiara and Anish
      Kiara: Aaj mood off hai, tumse baat karne ka mann nahi 😕
      Anish: Arey meri jaan bubu bubu bubu 😍
      Kiara: Kal tumne mujhe bubu nahi bulaya 😤
      Anish: Arey bas Vikas aur Aman hai... chill karo 😅
      Kiara: Tumne mujhe good night bola bhi nahi kal 😑
      Anish: Baat kya hai? Darawa mat 😅
      Kiara: Tumhara bicep pic bhejo 😋
      Kiara: Mujhe surprise chahiye tumse! 🎁
      Anish: Arey bubu ka presentation toh best hoga hi 🔥
      Kiara: Kal kis ke saath jaa rahe ho movie dekhne?
      Anish: Bicep abhi 15.5 inch ho gaya 💪
      Kiara: Tumhara bicep pic bhejo 😋
      Anish: Good morning meri bubu 🥱☕
      Kiara: Kal tumne mujhe bubu nahi bulaya 😤
      Anish: Arey meri jaan bubu bubu bubu 😍
      Kiara: Babu, good morning ☀️❤️
      `,
    },
  });

  History.push({
    role: "model",
    parts: [{ text: response.text }],
  });

  console.log("\n");
  console.log(response.text);
}

async function main() {
  const userProblem = readlineSync.question("Ask me anything--> ");
  await Chatting(userProblem);
  main();
}

main();
