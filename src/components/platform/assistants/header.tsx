import { Button } from "@/components/ui/button";
import { MoreVertical, Phone } from "lucide-react";

export function AssistHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A]">
      <div className="flex items-center gap-4">
        <Button className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-1 h-7 rounded">
          Create Assistant <span className="ml-1 opacity-50">⌘</span>
        </Button>
        <span className="text-[#6C6C6C] text-sm">Document...</span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-1 h-7 rounded"
        >
          <Phone className="h-3 w-3 mr-2" />
          Talk with Assistant
        </Button>
        <Button variant="ghost" size="icon" className="text-[#6C6C6C]">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
