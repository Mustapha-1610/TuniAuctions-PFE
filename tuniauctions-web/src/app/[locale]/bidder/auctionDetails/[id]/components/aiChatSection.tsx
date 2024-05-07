import React from "react";
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
