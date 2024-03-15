import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);
  const [isScrolledUp, setIsScrollUp] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("interval message...");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(1, 1),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (!isScrolledUp) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isScrolledUp]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    setIsScrollUp(scrollTop !== 0 && scrollTop + clientHeight < scrollHeight);
  };

  return (
    <>
      <div className="h-[475px] w-full border border-black p-2 bg-slate-50 rounded-lg">
        <div className="font-lg border-b-2 border-black font-medium p-2 mb-3">
          Live Chat
        </div>
        <div
          className=" overflow-y-scroll h-[355px] flex flex-col-reverse"
          ref={chatContainerRef}
          onScroll={handleScroll}
        >
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <form
          className="w-full p-2 mt-2 border-t-2 space-x-2 border-black"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("On Form Submit", liveMessage);
            dispatch(
              addMessage({
                name: "Sparsh Bhardwaj",
                message: liveMessage,
              })
            );
            setLiveMessage("")
          }}
        >
          <input
            className="w-96 px-3 py-1 bg-white rounded-lg"
            placeholder="Type here"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="px-4 bg-gray-600 text-white rounded-lg py-1">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
