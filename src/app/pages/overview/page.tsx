"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LineChart } from "lucide-react";

export default function OverView() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/pages/platform/assistants"); // Replace '/your-target-page' with the route you want to navigate to
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-4">
        <LineChart className="h-24 w-24 text-gray-600" />
      </div>
      <h1 className="mb-2 text-2xl font-semibold text-white">Track & Manage</h1>
      <p className="mb-4 text-gray-400">
        Track how your assistants are performing, how much you're spending, and
        more.
      </p>
      <p className="mb-6 text-gray-500">
        Looks like there are no metrics here - create an assistant to start
        seeing your metrics.
      </p>
      <Button
        onClick={handleButtonClick}
        className="bg-[#4DB6AC] hover:bg-[#45A399] text-white font-medium py-2 px-4 rounded flex items-center"
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
}
