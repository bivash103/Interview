import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MapRoad = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

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
      const res = await axios.post(`${API}/api/msg/chat`, {
        msg: currentMsg,
      });

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
    <div className="min-h-screen bg-slate-100 mt-15 flex justify-center items-center pt-16 p-2 sm:p-4">
  <div className="w-full max-w-5xl h-[100dvh] sm:h-[90vh] bg-white rounded-none sm:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden flex flex-col">

    {/* Header */}
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 sm:px-6 py-4 sm:py-5">
      <h1 className="text-xl sm:text-2xl font-bold">
        AI Assistant
      </h1>

      <p className="text-xs sm:text-sm text-cyan-100">
        Ask anything and get instant answers
      </p>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 overflow-y-auto bg-slate-100 px-3 sm:px-8 py-4 sm:py-8 space-y-5 sm:space-y-8">

      {messages.map((item, index) =>
        item.sender === "user" ? (

          <div key={index} className="flex justify-end">

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4 max-w-[90%] sm:max-w-[75%] shadow-lg text-sm sm:text-base leading-6 break-words">
              {item.text}
            </div>

          </div>

        ) : (

          <div key={index} className="flex items-start gap-2 sm:gap-3">

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center text-base sm:text-lg flex-shrink-0">
              🤖
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 px-4 sm:px-8 py-4 sm:py-6 max-w-[92%] sm:max-w-[85%] overflow-x-auto">

              <div
                className="
                  prose
                  prose-sm
                  sm:prose-base
                  lg:prose-lg
                  max-w-none
                  prose-slate
                  break-words

                  prose-h1:text-2xl sm:prose-h1:text-5xl
                  prose-h2:text-xl sm:prose-h2:text-4xl
                  prose-h3:text-lg sm:prose-h3:text-3xl
                  prose-h4:text-base sm:prose-h4:text-2xl
                "
              >
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

        <div className="flex items-start gap-2 sm:gap-3">

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
            🤖
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 px-4 sm:px-6 py-4 sm:py-5">

            <p className="text-xs sm:text-sm text-gray-500 mb-2">
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
    <div className="border-t bg-white p-3 sm:p-5">

      <form
        onSubmit={handleSendButton}
        className="flex items-center gap-2 sm:gap-4"
      >

        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Ask anything..."
          className="flex-1 h-11 sm:h-14 rounded-full border border-slate-300 px-4 sm:px-6 text-sm sm:text-base outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="h-11 sm:h-14 px-5 sm:px-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold transition hover:scale-105 disabled:opacity-60 whitespace-nowrap"
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
