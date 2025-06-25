// API Key --> AIzaSyCwIMeAsU6ce3332IumC8UtjJrGRpOiLj4

/*
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCwIMeAsU6ce3332IumC8UtjJrGRpOiLj4",
});


// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "what is my name?",
//   });
//   console.log(response.text);
// }


async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: "Hi I am anish." }],
      },
      {
        role: "model",
        parts: [
          { text: "Hi Anish, nice to meet you! How can I help you today?" },
        ],
      },
      {
        role: "user",
        parts: [{ text: "What is my name?" }],
      },
    ],
  });
  console.log(response.text);
}
await main();

*/

/*----------Continue chat---------*/

/*
import { GoogleGenAI } from "@google/genai";

import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCwIMeAsU6ce3332IumC8UtjJrGRpOiLj4",
});

const History = [];

async function gpt(endUser) {
  History.push({
    role: "user",
    parts: [{ text: endUser }],
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });
  History.push({
    role: "user",
    parts: [{ text: response.text }],
  });

  console.log(response.text);
}

async function main() {
  const user = readlineSync.question("Ask me anything :- ");
  await gpt(user);
  main();
}
await main();

*/

/*----------Continue Chat---------*/
/*
import { GoogleGenAI } from "@google/genai";

import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCwIMeAsU6ce3332IumC8UtjJrGRpOiLj4",
});

const chat = ai.chats.create({})

async function main() {
  const user = readlineSync.question("Ask me anything :- ");
  const response1 = await Chat.sendMessage({
    mesaage:"I have 2 dogs in my house."
  });
  await gpt(user);
  main();
}
await main();
*/
