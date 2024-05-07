"use client";
import * as React from "react";
import { FaTimes } from "react-icons/fa";

import { BsChatSquareTextFill } from "react-icons/bs";

import { useLocale } from "next-intl";
import { AuctionListingType } from "@/models/types/auctionListing";
import ProductInformations from "./components/productInformations";
import PromotionalVideoAndButItNowSection from "./components/promotionalVideoAndBuyItNowSection";
import { SellerSocialSectionDetailsType } from "@/app/api/general/fetchAuctionListing/route";
import SellerPromotionSection from "./components/sellerPromotionalSection";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
import FinishedAuctionDisplay from "./components/finishedAuction";
import { IoIosSend } from "react-icons/io";

export interface AuctionListingDetails {
  auctionListing: AuctionListingType;
  sellerData: SellerSocialSectionDetailsType;
}
export default function AuctionPage({
  auctionListing,
  sellerData,
}: AuctionListingDetails) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [auctionListingItem, setAuctionListingItem] =
    React.useState<AuctionListingType>(auctionListing);
  const { bidderLocalStorageData } = useBidderProfileStore();
  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  React.useEffect(() => {
    async function registerView(auctionId: string) {
      await fetch("/api/bidder/registerView", {
        method: "POST",
        body: JSON.stringify({ auctionId }),
      });
    }
    if (
      bidderLocalStorageData &&
      auctionListing.listingType !== "Basic" &&
      !auctionListing.uniqueViews.bidders.includes(bidderLocalStorageData._id)
    ) {
      registerView(String(auctionListing._id));
    }
  }, [auctionListing && bidderLocalStorageData]);
  return (
    <>
      <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
        <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
          {auctionListing && auctionListing.status === "Finished" ? (
            <FinishedAuctionDisplay auctionListing={auctionListing} />
          ) : (
            <ProductInformations
              auctionListing={auctionListingItem}
              setAuctionListing={setAuctionListingItem}
            />
          )}
        </div>
        <PromotionalVideoAndButItNowSection auctionListing={auctionListing} />
        <SellerPromotionSection
          auctionListing={auctionListing}
          sellerData={sellerData}
        />
      </div>
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
            productName={auctionListing.title}
          />
        )}
      </div>
    </>
  );
}

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
}
function ChatBox({ onClose, productName }: ChatBoxProps) {
  const [messages, setMessages] = React.useState<any>([]);
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
    await handleGoogleApiSend(userMessages);
  };

  const handleGoogleApiSend = async (message: string) => {
    try {
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
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-lg px-2 py-2"
        >
          <IoIosSend size={27} />
        </button>
      </div>
    </div>
  );
}
