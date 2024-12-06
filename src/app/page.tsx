"use client";
import { Button } from "@/components/ui/button";
import { MainNav, navItems } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { LineChart } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="flex w-64 flex-col border-r border-secondary bg-background">
        {/* Logo */}
        <div className="p-6">
          <span className="text-2xl font-semibold text-primary">VAPI</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 space-y-1 px-3">
          <MainNav items={navItems} />
        </div>

        {/* User Navigation */}
        <div className="p-3">
          <UserNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="max-w-4xl">
          <div className="mb-4">
            <LineChart className="h-24 w-24 text-gray-600" />
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-white">
            Track & Manage
          </h1>
          <p className="mb-4 text-gray-400">
            Track how your assistants are performing, how much you're spending,
            and more.
          </p>
          <p className="mb-6 text-gray-500">
            Looks like there are no metrics here - create an assistant to start
            seeing your metrics.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
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
      </div>

      {/* Ask AI Button */}
      <Button
        className="fixed bottom-6 right-6 bg-secondary hover:bg-secondary/80"
        size="lg"
      >
        Ask AI
        <div className="ml-2 h-4 w-4 rounded bg-primary">V</div>
      </Button>
    </div>
  );
}
