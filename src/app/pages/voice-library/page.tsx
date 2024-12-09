"use client";

import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/VoiceSlider"
import { useRouter } from "next/navigation";
import { LineChart } from "lucide-react";

export default function OverView() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/pages/platform/assistants"); // Replace '/your-target-page' with the route you want to navigate to
  };

  return (
    <div className="max-w-6xl px-2 overflow-hidden">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-white">Voice Library</h1>
        <h2 className="text-lg text-gray-400">Featured Voices</h2>
      </header>
      <div className="relative">
        <Slider />
      </div>
    </div>
  );
  
}
