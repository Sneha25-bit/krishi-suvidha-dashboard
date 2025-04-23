
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatbotDialog from "./ChatbotDialog";
import { Button } from "../components/ui/button";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary rounded-full shadow-xl hover:bg-primary/90 transition-colors p-4 flex items-center justify-center"
        aria-label="Open AI Chatbot"
        onClick={() => setOpen(true)}
      >
        <MessageCircle className="text-white" size={28} />
      </button>
      <ChatbotDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default ChatbotButton;
