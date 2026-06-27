import { getAdminOrders } from "@/app/actions/orders";
import Link from "next/link";
import { Eye } from "lucide-react";

export default async function OrdersPage() {
  const orders = await getAdminOrders();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-inter text-black">Orders</h1>
        <p className="text-sm font-poppins text-gray-500">
          View and manage customer orders
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-poppins text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-black font-medium">
                      {order.id.slice(0, 8)}...
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-black">
                        {order.users?.name || "Unknown"}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {order.users?.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                        ${
                          order.order_status === "delivered"
                            ? "bg-green-100 text-green-700"
                            : order.order_status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.order_status === "cancelled"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                        }
                      `}
                      >
                        {order.order_status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-black">
                      $
                      {Number(order.total_amount).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                        ${
                          order.payment_status === "paid"
                            ? "bg-green-100 text-green-700"
                            : order.payment_status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.payment_status === "failed"
                                ? "bg-red-100 text-red-700"
                                : order.payment_status === "refunded"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-gray-100 text-gray-600"
                        }
                      `}
                      >
                        {order.payment_status || "pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="text-gray-400 hover:text-black inline-flex"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
