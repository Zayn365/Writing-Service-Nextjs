'use client'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { completedBody, completedHead } from '@/constants/complated'
import UseFetchData from '@/hooks/UseFetchData'
import { Axios } from '@/utils/Axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { data, error, loading } = UseFetchData("/api/orders");
  const [onCompletedData, setOnCompletedData] = useState([])


  useEffect(() => {
    if (data) {
      const filteredData = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2);
      setOnCompletedData(filteredData);
    }
  }, [data]);

  return (
    <div className='w-full'>
      <Header text={"Orders Listing"} />

      <Table headTable={completedHead} body={onCompletedData} dataName='completed' />
    </div>
  )
}

export default Page