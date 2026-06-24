import { getDashboardStats, getRecentOrders } from "@/app/actions/orders";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const [stats, recentOrders] = await Promise.all([
    getDashboardStats(),
    getRecentOrders(5),
  ]);

  const statCards = [
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders.toLocaleString(),
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Total Products",
      value: stats.totalProducts.toLocaleString(),
      icon: Package,
      color: "bg-purple-500",
    },
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      icon: Users,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-inter text-black mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 font-poppins text-sm">
          Welcome back! Here is what&apos;s happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${stat.color}`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-poppins text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold font-inter text-black mt-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold font-inter text-black">
            Recent Orders
          </h2>
          <Link
            href="/admin/orders"
            className="text-sm font-poppins text-red-500 hover:text-red-600 flex items-center gap-1 font-medium"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-poppins text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders && recentOrders.length > 0 ? (
                recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-black font-medium">
                      <Link
                        href={`/admin/orders/${order.id}`}
                        className="hover:text-red-500"
                      >
                        {order.id.slice(0, 8)}…
                      </Link>
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
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
