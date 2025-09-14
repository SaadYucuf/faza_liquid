"use client"

import { useState, useEffect } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowDown, ArrowUp } from "lucide-react"
import { TransactionHistorySkeleton } from "@/components/loading-skeleton"
import { EmptyTransactionHistory } from "@/components/empty-state"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

const transactions = [
  {
    id: "#2949274",
    type: "Deposit",
    amount: "800.00 USD",
    date: "16.09.25 / 19:38",
    icon: "deposit",
  },
  {
    id: "#2949275",
    type: "Withdrawal",
    amount: "150.20 USD",
    date: "16.09.25 / 19:38",
    icon: "withdrawal",
  },
]

export default function TransactionHistoryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState(transactions)
  const { toast } = useToast()

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1200))

        setData(transactions)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Noma'lum xatolik yuz berdi")
        toast({
          variant: "destructive",
          title: "Xatolik",
          description: "Tranzaksiya tarixini yuklab bo'lmadi. Iltimos, keyinroq qayta urinib ko'ring.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadTransactions()
  }, [toast])

  if (isLoading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <TransactionHistorySkeleton />
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Transaction history</h1>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Time Filter */}
          <Card className="mb-6 w-fit">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Last 7 days</span>
              </div>
            </CardContent>
          </Card>

          {data.length === 0 ? (
            <EmptyTransactionHistory />
          ) : (
            <>
              <div className="space-y-4">
                {data.map((transaction, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            {transaction.icon === "deposit" ? (
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <ArrowDown className="h-4 w-4 text-red-600" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <ArrowUp className="h-4 w-4 text-green-600" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{transaction.type}</h3>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">{transaction.amount}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
