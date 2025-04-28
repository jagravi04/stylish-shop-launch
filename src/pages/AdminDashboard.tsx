
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import {
  BarChart,
  Package,
  ShoppingBag,
  Users,
  Plus,
  ArrowUpRight,
} from 'lucide-react';

export default function AdminDashboard() {
  // Stats for dashboard
  const stats = [
    { title: "Total Products", value: products.length, icon: Package, trend: "+5%" },
    { title: "Total Orders", value: 143, icon: ShoppingBag, trend: "+12%" },
    { title: "Total Customers", value: 98, icon: Users, trend: "+18%" },
    { title: "Total Revenue", value: formatCurrency(15732.89), icon: BarChart, trend: "+23%" },
  ];
  
  // Recent orders for dashboard
  const recentOrders = [
    { id: "ORD-9842", customer: "John Doe", date: "2023-04-25", status: "completed", amount: 129.99 },
    { id: "ORD-9841", customer: "Jane Smith", date: "2023-04-25", status: "processing", amount: 245.50 },
    { id: "ORD-9840", customer: "Robert Johnson", date: "2023-04-24", status: "completed", amount: 79.99 },
    { id: "ORD-9839", customer: "Emily Davis", date: "2023-04-24", status: "completed", amount: 189.99 },
    { id: "ORD-9838", customer: "Michael Wilson", date: "2023-04-23", status: "cancelled", amount: 59.99 },
  ];
  
  // Top-selling products
  const topProducts = products.slice(0, 5);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Welcome back, Admin</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link to="/admin/products/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div 
            key={stat.title} 
            className="bg-white rounded-lg shadow-sm border p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-brand/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-brand" />
              </div>
            </div>
            <div className="mt-3 text-xs">
              <span className="text-green-500">{stat.trend}</span>
              <span className="text-gray-500 ml-1">vs. last month</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Recent Orders</h2>
              <Button asChild variant="ghost" size="sm">
                <Link to="/admin/orders">
                  View All
                  <ArrowUpRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">
                        <Link to={`/admin/orders/${order.id}`} className="text-brand hover:underline">
                          {order.id}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm">{order.customer}</td>
                      <td className="px-4 py-3 text-sm">{order.date}</td>
                      <td className="px-4 py-3 text-sm">
                        <span 
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            order.status === 'completed' ? 'bg-green-100 text-green-800' :
                            order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{formatCurrency(order.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Top Products */}
        <div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Top Selling Products</h2>
              <Button asChild variant="ghost" size="sm">
                <Link to="/admin/products">
                  View All
                  <ArrowUpRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex items-center p-2 hover:bg-gray-50 rounded-md"
                >
                  <div className="h-12 w-12 rounded overflow-hidden mr-4">
                    <img 
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-sm font-medium">
                    {formatCurrency(product.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
