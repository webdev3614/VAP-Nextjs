'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MainNav, navItems } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import TrackAndManage from "@/components/overview-one"

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState('/overview')

  const handleNavigate = (href: string) => {
    setCurrentPage(href)
  }

  const renderContent = () => {
    switch (currentPage) {
      case '/overview':
        return (
          <div className="max-w-4xl">
            <TrackAndManage/>
          </div>
        )
      case '/platform/assistants':
        return (
          <div className="max-w-4xl">
            <TrackAndManage/>
          </div>
        )
      default:
        return (
          <div className="max-w-4xl">
            <h1 className="mb-2 text-2xl font-semibold text-white">{currentPage.split('/').pop()}</h1>
            <p className="mb-4 text-gray-400">
              This is the {currentPage.split('/').pop()} page content.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-[#1C1C1C]">
      {/* Sidebar */}
      <div className="flex w-64 flex-col border-r border-[#2A2A2A] bg-[#1C1C1C]">
        {/* Logo */}
        <div className="p-6">
          <span className="text-2xl font-semibold text-[#4DB6AC]">VAPI</span>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 space-y-1 px-3">
          <MainNav items={navItems} onNavigate={handleNavigate} />
        </div>

        {/* User Navigation */}
        <div className="p-3">
          <UserNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-8">
        {renderContent()}
      </div>

      {/* Ask AI Button */}
      <Button 
        className="fixed bottom-6 right-6 bg-[#2A2A2A] hover:bg-[#333333]"
        size="lg"
      >
        Ask AI
        <div className="ml-2 h-4 w-4 rounded bg-[#4DB6AC]">V</div>
      </Button>
    </div>
  )
}

