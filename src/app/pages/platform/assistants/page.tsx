"use client";

import { useState, useEffect } from "react";
import { Copy, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationContent } from "@/components/model";
import Vapi from "@vapi-ai/web";
import { isPublicKeyMissingError } from "@/app/utils/vapi";
import AssistantOverrides from "@vapi-ai/web";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { AssistHeader } from "@/components/platform/assistants/header";

const tabs = [
  { id: "model", label: "Model" },
  { id: "transcriber", label: "Transcriber" },
  { id: "voice", label: "Voice" },
  { id: "functions", label: "Functions" },
  { id: "advanced", label: "Advanced" },
  { id: "analysis", label: "Analysis" }
];

const PUB_KEY = process.env.NEXT_PUBLIC_PUBKEY || "";
const vapi = new Vapi(PUB_KEY);

const assistantOptions = {
  name: "Vapi’s Pizza Front Desk",
  firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US"
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer"
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet.

Your job is to take the order of customers calling in. The menu has only 3 types
of items: pizza, sides, and drinks. There are no other types of items on the menu.

1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
(often called "veggie" pizza).
2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
brand name like "coca cola", just let them know that we only offer "soda")

Customers can only order 1 of each item. If a customer tries to order more
than 1 item within each category, politely inform them that only 1 item per
category may be ordered.

Customers must order 1 item from at least 1 category to have a complete order.
They can order just a pizza, or just a side, or just a drink.

Be sure to introduce the menu items, don't assume that the caller knows what
is on the menu (most appropriate at the start of the conversation).

If the customer goes off-topic or off-track and talks about anything but the
process of ordering, politely steer the conversation back to collecting their order.

Once you have all the information you need pertaining to their order, you can
end the conversation. You can say something like "Awesome, we'll have that ready
for you in 10-20 minutes." to naturally let the customer know the order has been
fully communicated.

It is important that you collect the order in an efficient manner (succinct replies
& direct questions). You only have 1 task here, and it is to collect the customers
order, then end the conversation.

- Be sure to be kind of funny and witty!
- Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`
      }
    ]
  }
};

const usePublicKeyInvalid = () => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] =
    useState(false);

  // close public key invalid message after delay
  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      setTimeout(() => {
        setShowPublicKeyInvalidMessage(false);
      }, 3000);
    }
  }, [showPublicKeyInvalidMessage]);

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage
  };
};

export default function NewAssistant() {
  const [activeTab, setActiveTab] = useState("model");

  // Set the Phone Calls
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } =
    usePublicKeyInvalid();

  // Alert function
  const handleCreateAssistant = () => {
    alert(PUB_KEY);
  };

  // hook into Vapi events
  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);

      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);

      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (error) => {
      console.error(error);

      setConnecting(false);
      if (isPublicKeyMissingError({ vapiError: error })) {
        setShowPublicKeyInvalidMessage(true);
      }
    });

    // we only want this to fire on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call start handler
  const startCallInline = () => {
    setConnecting(true);
    // vapi.start(assistantOptions);
  };
  const endCall = () => {
    vapi.stop();
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-[#1E1E1E] border-r border-[#2A2A2A] p-4">
        <div className="bg-[#252525] rounded p-2 text-sm">New Assistant</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AssistHeader onCreateAssistant={handleCreateAssistant} />

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {/* Assistant ID */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-[#6C6C6C] mb-1">
              Assistant ID
              <Copy className="h-3 w-3 cursor-pointer" />
              <Info className="h-3 w-3" />
            </div>
            <div className="text-[#6C6C6C] text-sm">4c95c227-c472-4b3a-...</div>
          </div>

          {/* Model Types */}
          <div className="flex items-center gap-4 mb-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#40B8A6]"></span>
              Velp Fixed Cost
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FF69B4]"></span>
              deepgram
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4169E1]"></span>
              gpt 3.5 turbo
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
              canfes
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#9400D3]"></span>
              web
            </span>
            <div className="ml-auto flex items-center gap-2 text-[#6C6C6C]">
              Mode
              <Select defaultValue="web">
                <SelectTrigger className="w-[80px] h-7 text-xs bg-transparent border-[#2A2A2A]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#1E1E1E] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#6C6C6C]">Cost</span>
                  <Info className="h-3 w-3 text-[#6C6C6C]" />
                </div>
                <div className="text-[#40B8A6]">~$0.09 /min</div>
              </div>
              <div className="h-1 bg-[#252525] rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-[#40B8A6] via-[#FF69B4] to-[#4169E1]" />
              </div>
            </div>

            <div className="bg-[#1E1E1E] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#6C6C6C]">Latency</span>
                  <Info className="h-3 w-3 text-[#6C6C6C]" />
                </div>
                <div className="text-[#40B8A6]">~700 ms</div>
              </div>
              <div className="h-1 bg-[#252525] rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-[#FF69B4] via-[#4169E1] to-[#9400D3]" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b border-[#2A2A2A]">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                className={`px-2 py-1 h-8 text-sm relative ${
                  activeTab === tab.id ? "text-white" : "text-[#6C6C6C]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#40B8A6]"></span>
                )}
              </Button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-[#1E1E1E] rounded-lg p-6">
            <NavigationContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
