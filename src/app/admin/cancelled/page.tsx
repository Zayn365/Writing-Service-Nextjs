'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import { onGoingBody, onGoingHead } from '@/constants/cancelled';
import UseFetchData from '@/hooks/UseFetchData';

const Page = () => {
  const [onCancelledData, setOnCancelledData] = useState([])
  const { data, error, loading } = UseFetchData('/api/orders');

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((item) => item.total_amount < 0 && item.original_amount < 0 && item.status === 3);
      setOnCancelledData(filteredData);
    }
  }, [data]);

  return (
    <div className='w-full'>
      <Header text={"Refunded order listing"} />
      <Table headTable={onGoingHead} body={onCancelledData} dataName='completed' />
    </div>
  );
};

export default Page;
