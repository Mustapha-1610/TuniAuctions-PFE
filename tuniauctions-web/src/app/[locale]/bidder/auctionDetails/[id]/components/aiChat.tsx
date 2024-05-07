"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
  productName: string;
  messages: any[];
  setMessages: (value: any) => void;
}
export default function ChatBox({
  onClose,
  productName,
  messages,
  setMessages,
}: ChatBoxProps) {
  const [newMessage, setNewMessage] = React.useState<any>("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
  const [loading, setLoading] = useState(false);

  const handleGoogleApiSend = async (message: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/googleApi", {
        method: "POST",
        body: JSON.stringify({
          userInput: message,
          productName,
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
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="fixed z-50 bottom-4 right-4 lg:bottom-6 lg:right-6 p-6 bg-neutral-900 w-[400px]  rounded-xl"
      style={{
        height: "55vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-white font-semibold">Chat</h3>
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
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={loading}
        >
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white rounded-lg px-2 py-2"
          >
            <IoIosSend size={27} />
          </button>
        </Spin>
      </div>
    </div>
  );
}
