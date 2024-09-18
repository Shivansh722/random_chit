"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { db } from "@/firebaseConfig"; // Import the Firestore config
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore"; // Firestore functions

interface Message {
  id?: string;
  content: string;
  votes: number;
  voted: "none" | "up" | "down"; // To track vote status
}

export default function ChatPage() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref to the end of messages container

  // Load messages from Firestore on component mount
  useEffect(() => {
    const loadMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const loadedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        loadedMessages.push({
          id: doc.id,
          content: data.content,
          votes: data.votes,
          voted: "none", // Set default voted status to "none"
        });
      });
      setMessages(loadedMessages);
    };

    loadMessages();
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessages = async () => {
    if (message.trim() === "") return; // prevent sending empty messages

    // Store the message in Firestore
    const docRef = await addDoc(collection(db, "messages"), {
      content: message,
      votes: 0, // default vote count
    });

    setMessages([...messages, { id: docRef.id, content: message, votes: 0, voted: "none" }]);
    setMessage("");
  };

  const handleSend = (e: any) => {
    setMessage(e.target.value);
  };

  const handleUpvote = async (index: number) => {
    const newMessages = [...messages];
    const message = newMessages[index];

    if (message.voted === "up") {
      message.votes -= 1;
      message.voted = "none";
    } else {
      message.votes += message.voted === "down" ? 2 : 1;
      message.voted = "up";
    }

    // Update Firestore with the new vote count
    if (message.id) {
      const messageRef = doc(db, "messages", message.id);
      await updateDoc(messageRef, {
        votes: message.votes,
      });
    }

    setMessages(newMessages);
  };

  const handleDownvote = async (index: number) => {
    const newMessages = [...messages];
    const message = newMessages[index];

    if (message.voted === "down") {
      message.votes += 1;
      message.voted = "none";
    } else {
      message.votes -= message.voted === "up" ? 2 : 1;
      message.voted = "down";
    }

    // Update Firestore with the new vote count
    if (message.id) {
      const messageRef = doc(db, "messages", message.id);
      await updateDoc(messageRef, {
        votes: message.votes,
      });
    }

    setMessages(newMessages);
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-between"
        style={{
          backgroundImage: 'url("/assets/wallpaper_site_2.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Messages */}
        <div className="w-full max-w-md p-4 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="relative bg-gray-100 p-4 rounded shadow-md bg-yellow-300"
            >
              <div className="text-black">{message.content}</div>
              <div className="flex items-center mt-2 text-black">
                {/* Votes display */}
                <span>UpVotes: {message.votes}</span>
              </div>
              {/* Upvote and Downvote Icons */}
              <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                <AiOutlineArrowUp
                  className={`cursor-pointer text-3xl mb-1 ${
                    message.voted === "up" ? "text-green-500" : "text-gray-500"
                  }`}
                  onClick={() => handleUpvote(index)}
                />
                <AiOutlineArrowDown
                  className={`cursor-pointer text-3xl ${
                    message.voted === "down" ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => handleDownvote(index)}
                />
              </div>
            </div>
          ))}
          {/* Scroll to Bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="w-full max-w-md p-4 bg-red-200 text-black shadow-md rounded-md">
          <Textarea
            value={message}
            onChange={handleSend}
            placeholder="Type your message..."
            className="mb-4 w-full"
          />
          <Button
            onClick={handleSendMessages}
            className="w-full"
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
