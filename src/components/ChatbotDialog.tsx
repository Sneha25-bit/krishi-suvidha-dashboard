
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatbotDialog: React.FC<ChatbotDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input.trim() };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "/functions/v1/ai-chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: input.trim() }),
        }
      );
      const data = await response.json();
      if (data.generatedText) {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: data.generatedText },
        ]);
      } else {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: "Sorry, something went wrong." },
        ]);
      }
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, I couldn't contact the AI." },
      ]);
    }
    setLoading(false);
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-lg p-0 flex flex-col h-[80vh] max-h-[600px]"
      >
        <DialogHeader className="py-4 px-6 border-b">
          <DialogTitle>
            <span className="flex items-center gap-2">
              <MessageCircle className="mr-1" size={20} />
              AI Chatbot
            </span>
          </DialogTitle>
          <DialogClose />
        </DialogHeader>
        <div className="flex-1 px-4 py-2 overflow-y-auto bg-muted">
          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-md mb-1 ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-card text-card-foreground rounded-bl-none"
                  } text-sm shadow`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>
        <form
          onSubmit={sendMessage}
          className="flex gap-2 p-4 border-t"
          autoComplete="off"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="flex-1"
            disabled={loading}
            autoFocus
            autoCapitalize="sentences"
            autoCorrect="on"
            spellCheck
          />
          <Button 
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotDialog;
