'use client'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { completedBody, completedHead } from '@/constants/complated'
import UseFetchData from '@/hooks/UseFetchData'
import React, { useEffect, useState } from 'react'
import ToastProvider from '@/utils/Toast';

const Page = () => {
  const { data: orders, error: ordersError, loading: ordersLoading } = UseFetchData("/api/orders");
  const { data: clients, error: clientsError, loading: clientsLoading } = UseFetchData("/api/clients");
  const [onCompletedData, setOnCompletedData] = useState([])

  useEffect(() => {
    if (orders && clients) {
      const filteredOrders = orders.filter(order => order.total_amount > 0 && order.original_amount > 0 && order.status === 2);

      const filteredClients = filteredOrders.map(order => {
        const client = clients.find(client => client.id_ === order.id_);
        return client ? { ...order, ...client } : null;
      }).filter(Boolean);
      console.log(filteredClients)
      setOnCompletedData(filteredClients);
    }
  }, [orders, clients]);

  if (ordersLoading || clientsLoading) {
    return <div>Loading...</div>;
  }

  if (ordersError || clientsError) {
    return <div>Error loading data</div>;
  }

  if (onCompletedData) {
    console.log(onCompletedData)
  }
  return (
    <div className='w-full'>
      <ToastProvider />

      <Header text={"Orders Listing"} />

      <Table headTable={completedHead} body={onCompletedData} dataName='completed' />
    </div>
  )
}

export default Page
