"use client";
import SmallCard from "@/components/ui/SmallCard";
import smallCardData from "@/components/ui/smallCardData";
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/VoiceSlider";
import { useRouter } from "next/navigation";
import { LineChart } from "lucide-react";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function OverView() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/pages/platform/assistants");
  };

  return (
    <div className="max-w-6xl px-2 overflow-hidden">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-white">Voice Library</h1>
        <h2 className="text-lg text-gray-400">Featured Voices</h2>
      </header>
      <div className="relative mb-8">
        <Slider />
      </div>
      <h2 className="text-lg text-gray-400 mb-4">Explore All Voices</h2>
      <div className="flex items-center gap-4 mb-6">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search for voices..."
          className="flex-grow min-w-[200px] px-4 py-2 border rounded bg-black text-white border-gray-700 focus:outline-none"
        />
        {/* Dropdown menus */}
        <Select defaultValue="all">
          <SelectTrigger className="w-40 bg-black border-[#2A2A2A] text-blue-100">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="11labs">
          <SelectTrigger className="w-40 bg-black border-[#2A2A2A] text-blue-100">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="11labs">11labs</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="select">
          <SelectTrigger className="w-40 bg-black border-[#2A2A2A] text-blue-100">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="select">Select Accent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Small Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {smallCardData.map((card, index) => (
          <SmallCard
            key={index}
            title={card.title}
            rate={card.rate}
            ping={card.ping}
          />
        ))}
      </div>
    </div>
  );
}
