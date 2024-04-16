"use client";
import * as React from "react";
import { FaTimes } from "react-icons/fa";

import { BsChatSquareTextFill } from "react-icons/bs";

import { useLocale } from "next-intl";
import { AuctionListingType } from "@/models/types/auctionListing";
import { SellerSocialSectionDetailsType } from "@/app/api/general/fetchAuctionListing/route";
import BiddingAndInformationsSection from "./components/biddingAndInformationsSection";
import PromotionalSection from "./components/promotionalSection";
import SellerSection from "./components/sellerSection";
import auctionRoomSocket from "@/frontHelpers/auctionRoom/auctionRoomLogic";
import { useBidderProfileStore } from "@/helpers/store/bidder/bidderProfileStore";
export interface AuctionListingDetails {
  auctionListing: AuctionListingType;
  sellerData: SellerSocialSectionDetailsType;
}

export default function BiddingRoomPage({
  auctionListing,
  sellerData,
}: AuctionListingDetails) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const { bidderLocalStorageData } = useBidderProfileStore();
  const [auctionItem, setAuctionItem] =
    React.useState<AuctionListingType>(auctionListing);
  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  React.useEffect(() => {
    if (
      bidderLocalStorageData &&
      auctionItem.status === "Ongoing" &&
      auctionItem.participatingBidders.find(
        (b) => b.bidderId === bidderLocalStorageData?._id
      )
    ) {
      auctionRoomSocket.emit("bidderJoinedRoom", {
        auctionId: auctionListing._id.toString(),
        bidderSocketId: bidderLocalStorageData!._id,
      });
    }
  }, [bidderLocalStorageData && auctionItem]);
  if (auctionItem.status === "Ongoing") {
    return (
      <>
        {auctionItem.participatingBidders.find(
          (b) => b.bidderId === bidderLocalStorageData?._id
        ) ? (
          <>
            <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
              <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
                {bidderLocalStorageData && (
                  <BiddingAndInformationsSection
                    bidderLocalStorageData={bidderLocalStorageData}
                    auctionListing={auctionListing}
                    setAuctionListing={setAuctionItem}
                  />
                )}
              </div>
              <PromotionalSection auctionListing={auctionListing} />
              <SellerSection
                auctionListing={auctionListing}
                sellerData={sellerData}
              />
            </div>
            <div>
              <button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6  font-bold py-2  rounded-full transition duration-200"
              >
                <BsChatSquareTextFill size={45} className="text-xl" />
              </button>
              {isChatOpen && <ChatBox onClose={handleChatClose} />}
            </div>
          </>
        ) : (
          <>Access Denied</>
        )}
      </>
    );
  } else if (auctionItem.status === "Finished") {
    return (
      <>
        <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
          <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
            <p>Auction Finished</p>;
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center px-20 mt-12 pt-7 pb-16 bg-white border border-black border-solid max-md:px-5">
          <div className="px-14 py-5 w-full bg-white border border-white border-solid max-w-[1540px] max-md:px-5 max-md:max-w-full">
            <p>Pending Start</p>;
          </div>
        </div>
      </>
    );
  }
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
}
function ChatBox({ onClose }: ChatBoxProps) {
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
      className="fixed z-50 bottom-4 right-4 lg:bottom-6 lg:right-6 p-6 bg-gray-800  rounded-xl"
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
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
