"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Status Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Fully verified
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">3/3 steps completed</p>
              </CardContent>
            </Card>

            {/* Deposit Limit Card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Deposit limit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Unlimited
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">Depending on payment method</p>
              </CardContent>
            </Card>
          </div>

          {/* Verification Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Verification steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Details */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Personal details</h3>
                  <p className="text-sm text-gray-600">r•••••••99@gmail.com / +998•••1512</p>
                </div>
              </div>

              {/* Verified Details 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Your verified details</h3>
                  <p className="text-sm text-gray-600">Islomjon Rakhmonov</p>
                </div>
              </div>

              {/* Verified Details 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                    Confirmed
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Your verified details</h3>
                  <p className="text-sm text-gray-600">Tashkent</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4 text-xs text-gray-500 leading-relaxed">
            <p>
              Faza Liquit is a Securities Dealer registered in Seychelles with registration number 8423606-1 and
              authorised by the Financial Services Authority (FSA) with licence number SD025. The registered office of
              Faza Liquit (SC) LTD is at 9A CT House, 2nd floor, Providence, Mahe, Seychelles.
            </p>
            <p>
              The information on this website may only be copied with the express written permission of Faza Liquit.
              General Risk Warning: CFDs are leveraged products. Trading in CFDs carries a high level of risk thus may
              not be appropriate for all investors. The investment value can both increase and decrease and the
              investors may lose all their invested capital. Under no circumstances shall the Company have any liability
              to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to
              any transactions related to CFDs.
            </p>
            <p>
              Faza Liquit complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your
              security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the
              PCI DSS requirements for our business model.
            </p>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
