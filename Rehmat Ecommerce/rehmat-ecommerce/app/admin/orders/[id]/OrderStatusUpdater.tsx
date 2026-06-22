"use client";

import { useState } from "react";
import { updateOrderStatus } from "@/app/actions/orders";

export default function OrderStatusUpdater({ orderId, initialStatus }: { orderId: string, initialStatus: string }) {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    setLoading(true);
    try {
      const res = await updateOrderStatus(orderId, newStatus);
      if (res.error) throw new Error(res.error);
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
      setStatus(initialStatus); // revert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium font-poppins text-gray-500">Update Status</label>
      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={loading}
          className="border border-gray-300 rounded-md p-2 font-poppins text-sm bg-white focus:outline-none focus:ring-1 focus:ring-red-500 min-w-[150px]"
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        {loading && <div className="w-4 h-4 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin" />}
      </div>
    </div>
  );
}
