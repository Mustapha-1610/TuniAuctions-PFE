"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";

interface IBid {
  name: string;
  timeAgo: string;
  amount: string;
}

const MyComponent: React.FC = () => {
  const [bids, setBids] = useState<IBid[]>([
    { name: "Robart FOX", timeAgo: "23 minutes ago", amount: "24.5$" },
    { name: "Leslie Alexander", timeAgo: "23 minutes ago", amount: "24.5$" },
    { name: "Jane Cooper", timeAgo: "23 minutes ago", amount: "24.5$" },
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="flex mt-12 mb-8  flex-col items-center bg-white px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="pt-12 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="bg-slate-900 text-white p-6 rounded-md">
              <p className="font-semibold">Current Bid</p>
              <p className="text-xl font-bold mt-1.5">$20,0379.00</p>
              <p className="mt-4">00D : 00H : 00M : 00S</p>
            </div>
            <div className="mt-6 relative">
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ca61b1481e8a15033992a2caeb914ce1705d9521673d3f143c8870f7028d92?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {/* Repeat for each small image under the big one */}
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4ae5ca45f36bbf998f9cb4b476d3b3317842172483f8633d8eab532abbc26f?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8e310620acbb6e7cd46594befec711471b57815bb10264269b35c65038e278?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0ca7936f2ab559b2c1c025474af0e7861bad788329fc5a61fa1a6556708439?apiKey=452d394c7c1e42459c0e2415b6f84ad2&"
                className="w-full h-auto"
              />
            </div>
            <p className="text-zinc-600 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            {/* START Share Now Section */}
            <div className="w-full bg-white p-8 mt-8 rounded-md shadow-xl">
              <p className="font-bold text-center text-lg">Share Now</p>
              <div className="flex mt-4 justify-center">
                {/* Repeat for each social media button */}
                <button className="mx-2 bg-blue-500 text-white p-2 rounded">
                  Facebook
                </button>
                <button className="mx-2 bg-blue-400 text-white p-2 rounded">
                  Twitter
                </button>
                <button className="mx-2 bg-red-600 text-white p-2 rounded">
                  Pinterest
                </button>
              </div>
            </div>
            {/* END Share Now Section */}
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">
              Lamborghini Huracán Red Mercedes AMG
            </p>
            <p className="text-neutral-800 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque.
            </p>

            <iframe
              className="mt-2 mb-2"
              width="100%"
              height="25%"
              src="https://www.youtube.com/embed/xy3AcmW0lrQ"
              style={{
                borderRadius: "15px",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            ></iframe>
            <div className="bg-white p-8 rounded-md shadow-xl">
              <p className="text-slate-900 font-extrabold uppercase">Bid Now</p>
              <form className="mt-4">
                <label
                  htmlFor="bidAmount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your bid
                </label>
                <input
                  type="text"
                  id="bidAmount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Minimum Bid 20.00$"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-slate-900 text-white font-bold uppercase rounded-lg"
                >
                  Place Bid
                </button>
              </form>
            </div>
            <div className="mt-6 bg-white p-8 rounded-md shadow-xl">
              <p className="text-slate-900 font-extrabold uppercase">
                Bidding History
              </p>
              <ul className="mt-4">
                {bids.map((bid, index) => (
                  <li key={index} className="flex items-center gap-4 mt-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-bold text-slate-900">{bid.name}</p>
                      <p className="text-zinc-600">
                        {bid.timeAgo} for {bid.amount}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Your other components... */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-200"
        >
          <FaEnvelope className="text-xl" />
        </button>
        {isChatOpen && <ChatBox onClose={handleChatClose} />}
      </div>
    </div>
  );
};

export default MyComponent;

interface messageProps {
  message: string;
  isUser: boolean;
}
function ChatMessage({ message, isUser }: messageProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg px-4 py-2 m-2 ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
        style={{ maxWidth: "200px", wordWrap: "break-word" }}
      >
        {message}
      </div>
    </div>
  );
}

interface ChatBoxProps {
  onClose: (open: boolean) => void;
}
function ChatBox({ onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    const userMessages = newMessage;
    setNewMessage("");
    await handleGoogleApiSend(userMessages);
  };

  const handleGoogleApiSend = async (message: string) => {
    try {
      const response = await fetch("/api/googleApi", {
        method: "POST",
        body: JSON.stringify({
          userInput: message,
        }),
      });
      const res = await response.json();
      if (res.success) {
        setMessages([
          ...messages,
          { message: message, isUser: true },
          { message: res.success, isUser: false },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 p-6 bg-white border rounded-xl"
      style={{
        height: "55vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Chat</h3>
        <button
          onClick={() => onClose(true)}
          className="text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
      </div>
      <div className="overflow-y-auto flex-grow">
        {messages.map((message: messageProps, index: number) => (
          <ChatMessage
            key={index}
            message={message.message}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border rounded-lg p-2 mr-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
