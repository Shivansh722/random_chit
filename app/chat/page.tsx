"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessages = () => {
    setMessages([...messages, message]);
    setMessage("");
  }

  const handleSend = (e: any) => {
    console.log(message);
    setMessage(e.target.value);

  };

  

  return (
    //put this div at the bottom of the page

    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">{message}

        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Textarea value={message} onChange={handleSend} />
        <Button onClick={handleSendMessages}>Send </Button>
      </div>
    </>
  );
}
