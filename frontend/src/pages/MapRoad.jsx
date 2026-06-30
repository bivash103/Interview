import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MapRoad = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 How can I help you today?",
    },
  ]);

  async function handleSendButton(e) {
    e.preventDefault();

    if (!msg.trim()) return;

    const userMessage = {
      sender: "user",
      text: msg,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMsg = msg;
    setMsg("");

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/msg/chat",
        {
          msg: currentMsg,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast.error("Message Send Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4 mt-15">
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-5">
          <h1 className="text-2xl font-bold">AI Assistant</h1>
          <p className="text-sm text-cyan-100">
            Ask anything and get instant answers
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-slate-100 px-8 py-8 space-y-8">

          {messages.map((item, index) =>
            item.sender === "user" ? (

              <div key={index} className="flex justify-end">

                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl px-6 py-4 max-w-[75%] shadow-xl leading-7">
                  {item.text}
                </div>

              </div>

            ) : (

              <div key={index} className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center text-lg">
                  🤖
                </div>

             <div className="bg-white rounded-3xl shadow-xl border border-slate-200 px-8 py-6 max-w-[85%]">

              <div
              className="
                  prose
                  prose-lg
                  max-w-none
                  prose-slate

                  prose-h1:text-5xl
                  prose-h1:font-extrabold
                  prose-h1:mb-6

                  prose-h2:text-4xl
                  prose-h2:font-bold
                  prose-h2:mb-5

                  prose-h3:text-3xl
                  prose-h3:font-bold
                  prose-h3:mb-4

                  prose-h4:text-2xl
                  prose-h4:font-semibold
                  prose-h4:mb-3
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.text}
                  </ReactMarkdown>
               </div>

            </div>

              </div>

            )
          )}

          {/* Loading */}
          {loading && (

            <div className="flex items-start gap-3">

              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                🤖
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 px-6 py-5">

                <p className="text-sm text-gray-500 mb-2">
                  AI is thinking...
                </p>

                <div className="flex gap-2">

                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>

                  <span
                    className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>

                  <span
                    className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></span>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* Input */}
        <div className="border-t bg-white p-5">

          <form
            onSubmit={handleSendButton}
            className="flex gap-4"
          >

            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              placeholder="Ask anything..."
              className="flex-1 h-14 rounded-full border border-slate-300 px-6 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default MapRoad;