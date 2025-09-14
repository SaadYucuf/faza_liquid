"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { DashboardLayout } from "@/components/dashboard-layout"
import { PermissionDenied } from "@/components/permission-denied"

export default function CryptoWalletPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Crypto wallet</h1>
          <PermissionDenied />
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  )
}
