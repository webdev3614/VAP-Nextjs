import type { Metadata } from "next";
import { MainNav, navItems } from "@/components/layout/main-nav";
import { UserNav } from "@/components/layout/user-nav";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ToogleButton } from "./toogle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAPA Dashboard",
  description: "Track and manage your VAPI assistants"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`root min-h-screen ${inter.className}`}>
        <div className="body flex bg-background">
          <div className="left-panel flex w-64 flex-col border-r border-secondary bg-background">
            <div className="p-6 w-px-300">
              <span className="text-2xl font-semibold text-primary">VAPI</span>
            </div>

            <div className="flex-1 space-y-1 px-3 w-px-300">
              <MainNav items={navItems} />
            </div>
            <div className="p-3 w-px-300">
              <UserNav />
            </div>
          </div>
          <div className="toogle">
            <ToogleButton/>
          </div>
          <div className="right-panel flex-1 p-8 relative overflow-hidden">
            {children}

            <Button
              className="fixed bottom-6 right-6 bg-secondary hover:bg-secondary/80"
              size="lg"
            >
              <p className="text-secondary-foreground">Ask AI</p>
              <div className="ml-2 h-4 w-4 rounded bg-primary">V</div>
            </Button>
          </div>
        </div>
        <div className="footer">
        </div>
      </body>
    </html>
  );
}
