'use client'

import { useState } from 'react'
import { Copy, Info, MoreVertical, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NavigationContent } from '@/components/model'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const tabs = [
  { id: 'model', label: 'Model' },
  { id: 'transcriber', label: 'Transcriber' },
  { id: 'voice', label: 'Voice' },
  { id: 'functions', label: 'Functions' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'analysis', label: 'Analysis' },
]

export default function NewAssistant() {
  const [activeTab, setActiveTab] = useState('model')

  return (
    <div className="flex h-screen bg-[#121212] text-white font-sans">
      {/* Sidebar */}
      <div className="w-60 bg-[#1E1E1E] border-r border-[#2A2A2A] p-4">
        <div className="bg-[#252525] rounded p-2 text-sm">
          New Assistant
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-4">
            <Button className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-1 h-7 rounded">
              Create Assistant <span className="ml-1 opacity-50">⌘</span>
            </Button>
            <span className="text-[#6C6C6C] text-sm">Document...</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-1 h-7 rounded">
              <Phone className="h-3 w-3 mr-2" />
              Talk with Assistant
            </Button>
            <Button variant="ghost" size="icon" className="text-[#6C6C6C]">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {/* Assistant ID */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-[#6C6C6C] mb-1">
              Assistant ID
              <Copy className="h-3 w-3 cursor-pointer" />
              <Info className="h-3 w-3" />
            </div>
            <div className="text-[#6C6C6C] text-sm">
              4c95c227-c472-4b3a-...
            </div>
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
                  activeTab === tab.id ? 'text-white' : 'text-[#6C6C6C]'
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
  )
}

