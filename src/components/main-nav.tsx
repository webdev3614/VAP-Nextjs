import React, { useState } from "react";
import {
  Users,
  Phone,
  FileText,
  PenToolIcon as Tool,
  CuboidIcon as Cube,
  UsersRound,
  LineChart,
  MessageSquare,
  Webhook,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isExpandable?: boolean;
  isSelected?: boolean;
  subItems?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: LineChart,
    isSelected: true,
  },
  {
    title: "Platform",
    href: "/platform",
    icon: Tool,
    isExpandable: true,
    subItems: [
      {
        title: "Assistants",
        href: "/platform/assistants",
        icon: Users,
      },
      {
        title: "Phone Numbers",
        href: "/platform/phone-numbers",
        icon: Phone,
      },
      {
        title: "Files",
        href: "/platform/files",
        icon: FileText,
      },
      {
        title: "Tools",
        href: "/platform/tools",
        icon: Tool,
      },
      {
        title: "Blocks",
        href: "/platform/blocks",
        icon: Cube,
      },
      {
        title: "Squads",
        href: "/platform/squads",
        icon: UsersRound,
      },
    ],
  },
  {
    title: "Voice Library",
    href: "/voice-library",
    icon: MessageSquare,
  },
  {
    title: "Logs",
    href: "/logs",
    icon: FileText,
    isExpandable: true,
    subItems: [
      {
        title: "Calls",
        href: "/logs/calls",
        icon: Phone,
      },
      {
        title: "API Requests",
        href: "/logs/api",
        icon: Tool,
      },
      {
        title: "Webhooks",
        href: "/logs/webhooks",
        icon: Webhook,
      },
    ],
  },
];

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

export function MainNav({ className, items, ...props }: MainNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {items?.map((item) => (
        <div key={item.title}>
          <a
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              item.isSelected
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
            )}
            onClick={(e) => {
              if (item.isExpandable) {
                e.preventDefault();
                toggleExpand(item.title);
              }
            }}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
            {item.isExpandable && (
              <ChevronDown
                className={cn(
                  "ml-auto h-4 w-4 transition-transform duration-200",
                  expandedItems.includes(item.title) ? "rotate-180" : ""
                )}
              />
            )}
          </a>
          {item.subItems && expandedItems.includes(item.title) && (
            <div className="ml-6 mt-1 space-y-1">
              {item.subItems.map((subItem) => (
                <a
                  key={subItem.title}
                  href={subItem.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-[#2A2A2A] hover:text-white"
                >
                  <subItem.icon className="h-4 w-4" />
                  <span>{subItem.title}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
