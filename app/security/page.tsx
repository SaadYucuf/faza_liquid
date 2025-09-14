"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Key } from "lucide-react"

export default function SecurityPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Security</h1>

          {/* Authorization Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Authorization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Login */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <ChevronDown className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500">Login</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">r****9@gmail.com</p>
                </div>
              </div>

              {/* Password */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <Key className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500">Password</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">••••••••••</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Security Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Account security and termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Log out from all other devices except this one to secure your account.
                  </p>
                </div>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                  Log out from other devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
