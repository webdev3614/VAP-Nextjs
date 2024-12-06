'use client'

import { Info } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ContentProps {
  activeTab: string;
}

export function NavigationContent({ activeTab }: ContentProps) {
  if (activeTab === 'model') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-base font-semibold">Model</h2>
          <p className="text-[#6C6C6C] text-xs mt-1">This section allows you to configure the model for the assistant.</p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">First Message</span>
                <Info className="h-4 w-4 text-[#6C6C6C]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6C6C6C] text-sm">Provider</span>
                <Select defaultValue="openai">
                  <SelectTrigger className="w-[120px] bg-[#252525] border-[#2A2A2A]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">openai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Textarea 
              className="bg-[#252525] border-[#2A2A2A] min-h-[100px] resize-none" 
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">System Prompt</span>
              <Info className="h-4 w-4 text-[#6C6C6C]" />
            </div>
            <Textarea 
              className="bg-[#252525] border-[#2A2A2A] min-h-[100px] resize-none"
              defaultValue="This is a blank template with minimal defaults, you can change the model, temperature, and messages."
            />
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Model</span>
                <Info className="h-4 w-4 text-[#6C6C6C]" />
              </div>
              <Select defaultValue="gpt-3.5-turbo">
                <SelectTrigger className="w-full bg-[#252525] border-[#2A2A2A]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <span className="block mb-2 text-sm">Knowledge Base</span>
              <Select defaultValue="select">
                <SelectTrigger className="w-full bg-[#252525] border-[#2A2A2A]">
                  <SelectValue placeholder="Select Files" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select">Select Files</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">Temperature</span>
                <Info className="h-4 w-4 text-[#6C6C6C]" />
              </div>
              <span className="text-sm">0.7</span>
            </div>
            <Slider 
              defaultValue={[0.7]} 
              max={1} 
              step={0.1}
              className="[&_[role=slider]]:bg-[#40B8A6]"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">Max Tokens</span>
              <Info className="h-4 w-4 text-[#6C6C6C]" />
            </div>
            <input 
              type="number" 
              defaultValue="250"
              className="w-full bg-[#252525] border border-[#2A2A2A] rounded p-2 text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Detect Emotion</span>
              <Info className="h-4 w-4 text-[#6C6C6C]" />
            </div>
            <Switch />
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === 'transcriber') {
    return (
      <div>
        <h2 className="text-base font-semibold">Transcriber</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">Configure transcription settings for your assistant.</p>
        {/* Add transcriber content */}
      </div>
    )
  }

  if (activeTab === 'voice') {
    return (
      <div>
        <h2 className="text-base font-semibold">Voice</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">Configure voice settings for your assistant.</p>
        {/* Add voice content */}
      </div>
    )
  }

  if (activeTab === 'functions') {
    return (
      <div>
        <h2 className="text-base font-semibold">Functions</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">Configure custom functions for your assistant.</p>
        {/* Add functions content */}
      </div>
    )
  }

  if (activeTab === 'advanced') {
    return (
      <div>
        <h2 className="text-base font-semibold">Advanced</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">Configure advanced settings for your assistant.</p>
        {/* Add advanced content */}
      </div>
    )
  }

  if (activeTab === 'analysis') {
    return (
      <div>
        <h2 className="text-base font-semibold">Analysis</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">View and configure analysis settings.</p>
        {/* Add analysis content */}
      </div>
    )
  }

  return null
}

