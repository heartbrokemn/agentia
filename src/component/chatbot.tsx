'use client'
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion"; // Animation Library

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // AI Typing Effect

  const genAI = new GoogleGenerativeAI("AIzaSyAx61tP4H9__3Kbry9bSwFspX1xQV0ZjgU");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true); // Start loading animation

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const response = await model.generateContent(input);
      const aiResponseText = response?.response?.text?.() || "No response from AI";

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "ai", text: aiResponseText }]);
        setLoading(false); // Stop loading animation
      }, 1500);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Animated Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-purple-500"
      >
        {/* Header */}
        <div className="bg-purple-700 text-white flex items-center justify-between p-4">
          <button className="text-lg font-semibold" onClick={() => window.history.back()}>
            ← Back
          </button>
          <h1 className="text-xl font-bold">🤖 Robo Chat</h1>
          <span className="w-6"></span>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-2 bg-gray-800">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.role === "user" ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-purple-600 text-white rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* AI Typing Animation */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="flex justify-start"
            >
              <div className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                <span className="dot-flash">●●●</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Box */}
        <div className="p-4 flex border-t bg-gray-900">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 bg-gray-700 text-white border rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-purple-700 text-white px-4 py-2 rounded-r-lg hover:bg-purple-800 transition"
          >
            Send
          </button>
        </div>
      </motion.div>

      {/* Extra CSS for Animation */}
      <style>{`
        .dot-flash {
          font-size: 1.5rem;
          letter-spacing: 0.2rem;
          animation: dots 1.5s infinite;
        }

        @keyframes dots {
          0% { content: "●  "; }
          33% { content: "●● "; }
          66% { content: "●●●"; }
          100% { content: "●  "; }
        }
      `}</style>
    </div>
  );
}
