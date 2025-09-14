import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Trade {
  type: string
  amount: number
  tradeType: string
  lot: number
  entry: number
  close: number
}

interface MobileTradingCardProps {
  trade: Trade
  index: number
}

export function MobileTradingCard({ trade, index }: MobileTradingCardProps) {
  return (
    <Card key={index} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {trade.type}
            </Badge>
            <Badge variant={trade.tradeType === "Buy" ? "default" : "secondary"} className="text-xs">
              {trade.tradeType}
            </Badge>
          </div>
          <div className={`text-lg font-semibold ${trade.amount > 0 ? "text-green-600" : "text-red-600"}`}>
            {trade.amount > 0 ? "+" : ""}
            {trade.amount}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Lot</p>
            <p className="font-medium">{trade.lot}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Entry</p>
            <p className="font-medium">{trade.entry}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Close</p>
            <p className="font-medium">{trade.close}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
