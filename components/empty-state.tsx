"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileX, TrendingUp } from "lucide-react"

interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  icon?: React.ReactNode
}

export function EmptyState({ title, description, actionLabel, onAction, icon }: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="mb-4 text-gray-400">{icon || <FileX className="h-12 w-12" />}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 max-w-md">{description}</p>
        {actionLabel && onAction && (
          <Button onClick={onAction} className="bg-blue-600 hover:bg-blue-700">
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function EmptyTransactionHistory() {
  return (
    <EmptyState
      icon={<TrendingUp className="h-12 w-12" />}
      title="Hozircha tranzaksiyalar mavjud emas"
      description="Sizning hisobingizda hali hech qanday tranzaksiya amalga oshirilmagan. Hisobni to'ldirish yoki savdo qilishni boshlang."
      actionLabel="Hisobni to'ldirish"
      onAction={() => {
        // Navigate to deposit page or show deposit modal
        console.log("Navigate to deposit")
      }}
    />
  )
}

export function EmptyTradingHistory() {
  return (
    <EmptyState
      icon={<TrendingUp className="h-12 w-12" />}
      title="Savdo tarixi mavjud emas"
      description="Hali hech qanday savdo amalga oshirilmagan. Birinchi savdoni boshlash uchun yangi pozitsiya oching."
      actionLabel="Savdo boshlash"
      onAction={() => {
        // Navigate to trading page
        console.log("Navigate to trading")
      }}
    />
  )
}
