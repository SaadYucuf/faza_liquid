"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BrokerInfoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BrokerInfoModal({ open, onOpenChange }: BrokerInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Broker information</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Company</p>
            <p className="font-medium text-gray-900">Faza Liquit</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Serial number</p>
            <p className="font-medium text-gray-900">26812</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Address registration</p>
            <p className="font-medium text-gray-900">
              Euro House, Richmond Hill Road, P.O. Box 2897, Kingstown, VC0100, Saint Vincent & the Grenadines
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Office address</p>
            <p className="font-medium text-gray-900">Japan</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
