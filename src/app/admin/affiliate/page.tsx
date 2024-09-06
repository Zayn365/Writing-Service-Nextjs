'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import UseFetchData from '@/hooks/UseFetchData';
import ToastProvider from '@/utils/Toast';

const Page = () => {
  const affiliateHead = ["#", "Name", "Email", "Date Reg", "Status"];
  const [affiliateData, setAffiliateData] = useState([])
  const { data, error, loading } = UseFetchData('/api/clients');
  useEffect(() => {
    if (data) {
      const filteredData = data.filter(item =>
        item.status === 1 &&
        item.role_id === 3 &&
        item.token === null &&
        item.completed_articles === 0 &&
        item.referring_points === 0 && item.paypal_id !== null
      );
      console.log("Filtered data:", filteredData);
      setAffiliateData(filteredData);
    }
  }, [data]);

  return (
    <div className='w-full'>
      <ToastProvider />
      <Header text={"Affiliate Users Listing"} />
      <Table headTable={affiliateHead} body={affiliateData} dataName='affilate' />
    </div>
  );
};

export default Page;
