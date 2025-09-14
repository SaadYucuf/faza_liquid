import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

interface Transaction {
  id: string
  type: string
  date: string
}

interface MobileTransactionCardProps {
  transaction: Transaction
  index: number
}

export function MobileTransactionCard({ transaction, index }: MobileTransactionCardProps) {
  const isWithdrawal = transaction.type === "Withdrawal"

  return (
    <Card key={index} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-full ${isWithdrawal ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
          >
            {isWithdrawal ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900">{transaction.type}</h3>
              <Badge variant={isWithdrawal ? "destructive" : "default"} className="text-xs">
                {transaction.type}
              </Badge>
            </div>
            <p className="text-sm text-blue-600 font-medium mb-1">Transaction id {transaction.id}</p>
            <p className="text-xs text-gray-500">{transaction.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
