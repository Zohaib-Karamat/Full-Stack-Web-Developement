import { getAdminOrderById } from "@/app/actions/orders";
import Link from "next/link";
import { ArrowLeft, Package, MapPin, CreditCard } from "lucide-react";
import OrderStatusUpdater from "./OrderStatusUpdater";
import Image from "next/image";

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { order, items } = await getAdminOrderById(resolvedParams.id);

  const shippingAddress = order.shipping_address as any || {};

  return (
    <div className="flex flex-col gap-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/admin/orders" className="flex items-center gap-2 text-sm font-poppins text-gray-500 hover:text-black w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to Orders
          </Link>
          <h1 className="text-2xl font-bold font-inter text-black">Order Details</h1>
          <p className="text-sm font-poppins text-gray-500">Order #{order.id}</p>
        </div>
        
        <OrderStatusUpdater orderId={order.id} initialStatus={order.order_status} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Order Items */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-6">
            <h2 className="text-lg font-bold font-inter text-black flex items-center gap-2">
              <Package className="w-5 h-5 text-gray-400" /> Items Ordered
            </h2>
            
            <div className="flex flex-col gap-4">
              {items.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-md relative overflow-hidden flex-shrink-0">
                    <Image 
                      src={item.products?.featured_image || "https://placehold.co/100x100"} 
                      alt={item.products?.title || "Product"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="font-medium font-poppins text-black">{item.products?.title || "Unknown Product"}</span>
                    <span className="text-sm font-poppins text-gray-500">Qty: {item.quantity}</span>
                  </div>
                  <div className="font-medium font-poppins text-black">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 items-end font-poppins">
              <div className="flex justify-between w-64 text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${Number(order.total_amount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-64 text-sm text-gray-500">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between w-64 text-base font-bold text-black mt-2">
                <span>Total</span>
                <span>${Number(order.total_amount).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Customer & Shipping */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-4">
            <h2 className="text-lg font-bold font-inter text-black flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-gray-400" /> Customer
            </h2>
            <div className="flex flex-col font-poppins text-sm gap-1">
              <span className="font-medium text-black">{order.users?.name || "Unknown"}</span>
              <span className="text-gray-500">{order.users?.email}</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col gap-4">
            <h2 className="text-lg font-bold font-inter text-black flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-400" /> Shipping Address
            </h2>
            {Object.keys(shippingAddress).length > 0 ? (
              <div className="flex flex-col font-poppins text-sm gap-1 text-gray-600">
                <span>{shippingAddress.street}</span>
                <span>{shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</span>
                <span>{shippingAddress.country}</span>
              </div>
            ) : (
              <span className="text-sm font-poppins text-gray-500 italic">No shipping address provided.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
