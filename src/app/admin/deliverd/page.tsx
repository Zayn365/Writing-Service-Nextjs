'use client'
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import { bodyDelivered, headDelivered } from '@/constants/deliverd';
import UseFetchData from '@/hooks/UseFetchData';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { data, error, loading } = UseFetchData("/api/orders");
  const [onDeliverdData, setOnDeliverdData] = useState([])


  useEffect(() => {
    if (data) {
      const filteredData = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2 && (item.affiliate_amount !== null || undefined) && item.affiliate_amount_paid === 1);
      setOnDeliverdData(filteredData);
    }
  }, [data]);

  return (
    <div className='w-full'>
      <Header text={"Delivered Articles Listing"} />
      <div className="w-full flex justify-start items-start gap-x-2 my-4">
        <div >
          <span>Minium Date:</span>
          <InputField type='text' />
        </div>
        <div >
          <span>Maximum Date:</span>
          <InputField type='text' />
        </div>

      </div>
      <Table headTable={headDelivered} body={onDeliverdData} dataName='delivered' />
    </div>
  );
};

export default Page
