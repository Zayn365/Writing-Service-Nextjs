'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import { headDelivered } from '@/constants/deliverd';
import UseFetchData from '@/hooks/UseFetchData';

const Page = () => {
  const { data: ordersData, error: ordersError, loading: ordersLoading } = UseFetchData("/api/orders");
  const { data: projectsData, error: projectsError, loading: projectsLoading } = UseFetchData("/api/projects");

  const [combinedData, setCombinedData] = useState([]);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  const handleMinDateChange = (e: any) => {
    setMinDate(e.target.value);
  };

  const handleMaxDateChange = (e: any) => {
    setMaxDate(e.target.value);
  };

  useEffect(() => {
    if (ordersData && projectsData) {
      let filteredData = ordersData
        .filter(order =>
          order.total_amount > 0 &&
          order.original_amount > 0 &&
          order.status === 2 &&
          order.affiliate_amount != null &&
          order.affiliate_amount_paid === 1
        );

      if (minDate) {
        filteredData = filteredData.filter(order => new Date(order.orderDate) >= new Date(minDate));
      }

      if (maxDate) {
        filteredData = filteredData.filter(order => new Date(order.orderDate) <= new Date(maxDate));
      }

      const combined = filteredData
        .map(order => {
          const project = projectsData.find(p => p.id === order.id || p.id_ === order.id_);
          return project ? { ...order, ...project } : null;
        })
        .filter(item => item != null);

      setCombinedData(combined);
    }
  }, [ordersData, projectsData, minDate, maxDate]);

  if (combinedData) {
    console.log(combinedData);
  }

  return (
    <div className='w-full'>
      <Header text={"Delivered Articles Listing"} />
      <div className="w-full flex justify-start items-start gap-x-2 my-4">
        <div>
          <span>Minimum Date:</span>
          <InputField type='date' value={minDate} handleChange={handleMinDateChange} />
        </div>
        <div>
          <span>Maximum Date:</span>
          <InputField type='date' value={maxDate} handleChange={handleMaxDateChange} />
        </div>
      </div>
      <Table loading={ordersLoading || projectsLoading} headTable={headDelivered} body={combinedData} dataName='delivered' />
    </div>
  );
};

export default Page;
