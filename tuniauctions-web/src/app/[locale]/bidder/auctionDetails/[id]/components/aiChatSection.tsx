"use client";
import React, { useEffect } from "react";
import ChatBox from "./aiChat";
import { BsChatSquareTextFill } from "react-icons/bs";

interface Props {
  auctionListingTitle: string;
}
export default function AiChatSection({ auctionListingTitle }: Props) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<any>([]);
  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  useEffect(() => {
    if (messages.length <= 0) {
      setMessages([
        ...messages,
        {
          message: `Welcome! I'm Google's ai chat assistant "Gemini" and im here to help you with any questions you might have. Whether you need information, assistance, or just a bit of advice regarding the ${auctionListingTitle}, feel free to ask, and I'll do my best to provide the answers you're looking for.`,
          isUser: false,
        },
      ]);
    }
  }, []);
  return (
    <div>
      {/* Your other components... */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6  font-bold py-2  rounded-full transition duration-200"
      >
        <BsChatSquareTextFill size={45} className="text-xl" />
      </button>
      {isChatOpen && (
        <ChatBox
          onClose={handleChatClose}
          productName={auctionListingTitle}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </div>
  );
}
