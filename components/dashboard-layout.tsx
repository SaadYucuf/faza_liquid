"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "./auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  ChevronRight,
  Lock,
  User,
  LogOut,
  Loader2,
  CreditCard,
  BarChart3,
  HelpCircle,
  Settings,
  Wallet,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive?: boolean
  hasLock?: boolean
  children?: SidebarItemProps[]
}

function SidebarItem({ href, icon, label, isActive, hasLock, children }: SidebarItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const isCurrentlyActive =
    isActive || (children && children.some((child) => pathname.startsWith(child.href) && child.href !== "#"))

  if (children) {
    return (
      <div className="space-y-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
            isCurrentlyActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          <div className="flex items-center gap-3">
            {icon}
            <span>{label}</span>
          </div>
          {hasLock ? (
            <Lock className="h-4 w-4" />
          ) : isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        {isExpanded && (
          <div className="ml-6 space-y-1">
            {children.map((child) => (
              <SidebarItem key={child.href} {...child} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
        isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100",
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {hasLock && <Lock className="h-4 w-4" />}
    </Link>
  )
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { logout, userEmail, isLoggingOut } = useAuth()

  const sidebarItems: SidebarItemProps[] = [
    {
      href: "/dashboard",
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      label: "My accounts",
      isActive: pathname === "/dashboard",
    },
    {
      href: "#",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      label: "Payments & wallet",
      children: [
        {
          href: "/transaction-history",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Transaction history",
          isActive: pathname === "/transaction-history",
        },
        {
          href: "/deposit",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Deposit",
          isActive: pathname === "/deposit",
          hasLock: true,
        },
        {
          href: "/withdrawal",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Withdrawal",
          isActive: pathname === "/withdrawal",
          hasLock: true,
        },
        {
          href: "/crypto-wallet",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Crypto wallet",
          isActive: pathname === "/crypto-wallet",
          hasLock: true,
        },
      ],
    },
    {
      href: "/analytics",
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      label: "Analytics",
      isActive: pathname === "/analytics",
      hasLock: true,
    },
    {
      href: "/support",
      icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
      label: "Support hub",
      isActive: pathname === "/support",
      hasLock: true,
    },
    {
      href: "#",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      label: "Settings",
      children: [
        {
          href: "/profile",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Profile",
          isActive: pathname === "/profile",
        },
        {
          href: "/security",
          icon: <div className="w-3 h-3 bg-gray-400 rounded"></div>,
          label: "Security",
          isActive: pathname === "/security",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              Faza Liquit
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm hover:bg-gray-50 px-2 py-1 rounded-md transition-colors cursor-pointer"
            >
              <Wallet className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">120.00</span>
              <span className="text-gray-500">USD</span>
              <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </Link>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    onClick={() => console.log("[v0] Profile button clicked")}
                  >
                    <User className="h-4 w-4" />
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  sideOffset={5}
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => console.log("[v0] Profile link clicked")}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("[v0] Sign out clicked")
                      logout()
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Signing out...
                      </>
                    ) : (
                      <>
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.href} {...item} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
