"use client"

import { Lock } from "lucide-react"

export function PermissionDenied() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-sm">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
          <Lock className="h-8 w-8 text-blue-600" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">You do not have permission</h2>
        <p className="text-gray-600">to view this section.</p>
      </div>
    </div>
  )
}
