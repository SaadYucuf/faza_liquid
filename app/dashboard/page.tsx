"use client"

import { useState, useEffect } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Info } from "lucide-react"
import { DashboardSkeleton } from "@/components/loading-skeleton"
import { EmptyTradingHistory } from "@/components/empty-state"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { MobileTradingCard } from "@/components/mobile-trading-card"
import { BrokerInfoModal } from "@/components/broker-info-modal"

const tradingData = [
  {
    type: "XAU/USD",
    amount: 115.0,
    tradeType: "Sell",
    lot: 0.01,
    position: "3307.60 → 3294.94",
    afterBalance: "46 090,00 USD",
    icon: "🏅",
  },
  {
    type: "XAU/USD",
    amount: -10.0,
    tradeType: "Buy",
    lot: 0.002,
    position: "3307.60 → 3294.94",
    afterBalance: "46 090,00 USD",
    icon: "🏅",
  },
  {
    type: "BTC/USD",
    amount: 83.65,
    tradeType: "Sell",
    lot: 0.15,
    position: "3410.85 → 3355.10",
    afterBalance: "46 173,65 USD",
    icon: "₿",
  },
  {
    type: "XAU/USD",
    amount: 53.75,
    tradeType: "Buy",
    lot: 0.1,
    position: "3388.40 → 3442.15",
    afterBalance: "46 227,40 USD",
    icon: "🏅",
  },
  {
    type: "BTC/USD",
    amount: 68.25,
    tradeType: "Buy",
    lot: 0.15,
    position: "3375.00 → 3420.50",
    afterBalance: "46 295,65 USD",
    icon: "₿",
  },
  {
    type: "XAU/USD",
    amount: 59.15,
    tradeType: "Sell",
    lot: 1.1,
    position: "3425.50 → 3380.00",
    afterBalance: "46 354,80 USD",
    icon: "🏅",
  },
  {
    type: "BTC/USD",
    amount: 99.85,
    tradeType: "Sell",
    lot: 0.2,
    position: "3400.10 → 3350.25",
    afterBalance: "46 454,65 USD",
    icon: "₿",
  },
  {
    type: "EUR/USD",
    amount: -25.3,
    tradeType: "Buy",
    lot: 0.5,
    position: "1.0850 → 1.0825",
    afterBalance: "46 429,35 USD",
    icon: "€",
  },
  {
    type: "GBP/USD",
    amount: 42.8,
    tradeType: "Sell",
    lot: 0.3,
    position: "1.2650 → 1.2680",
    afterBalance: "46 472,15 USD",
    icon: "£",
  },
  {
    type: "XAU/USD",
    amount: 87.45,
    tradeType: "Buy",
    lot: 0.05,
    position: "3290.00 → 3335.50",
    afterBalance: "46 559,60 USD",
    icon: "🏅",
  },
  {
    type: "USD/JPY",
    amount: -15.6,
    tradeType: "Sell",
    lot: 0.8,
    position: "148.50 → 148.25",
    afterBalance: "46 544,00 USD",
    icon: "¥",
  },
  {
    type: "BTC/USD",
    amount: 125.9,
    tradeType: "Buy",
    lot: 0.25,
    position: "3200.00 → 3280.00",
    afterBalance: "46 669,90 USD",
    icon: "₿",
  },
]

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState(tradingData)
  const [showBrokerInfo, setShowBrokerInfo] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // if (Math.random() > 0.7) {
        //   throw new Error("Failed to load data")
        // }

        setData(tradingData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load data. Please try again later.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  if (isLoading) {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <DashboardSkeleton />
        </DashboardLayout>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">My accounts</h1>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="mb-8 flex items-start gap-4">
            <Card className="w-fit">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Balance</CardTitle>
                  <Info
                    className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                    onClick={() => setShowBrokerInfo(true)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  47 000,00 <span className="text-lg font-normal text-gray-500">USD</span>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors rounded-lg"
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </Button>
          </div>

          {data.length === 0 ? (
            <EmptyTradingHistory />
          ) : (
            <>
              <Card className="hidden md:block">
                <CardContent className="p-0">
                  <div className="overflow-x-auto max-h-96 overflow-y-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Trade type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Lot
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Position
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            After balance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((trade, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{trade.icon}</span>
                                {trade.type}
                              </div>
                            </td>
                            <td
                              className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                                trade.amount > 0 ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {trade.amount > 0 ? "+" : ""}
                              {trade.amount.toFixed(2)} USD
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.tradeType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.lot}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.position}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{trade.afterBalance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="md:hidden space-y-4">
                {data.map((trade, index) => (
                  <MobileTradingCard key={index} trade={trade} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
        <BrokerInfoModal open={showBrokerInfo} onOpenChange={setShowBrokerInfo} />
      </DashboardLayout>
    </ProtectedRoute>
  )
}
