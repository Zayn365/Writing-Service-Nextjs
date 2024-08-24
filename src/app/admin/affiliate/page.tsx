import React from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';

const Page = () => {
  const affiliateHead = ["#", "Name", "Email", "Date Reg", "Status"];
  const affiliateBody = [
    { no: "1", name: "WK client", email: "abc@gmail.com", date: "04-9-2015 06:35:45", status: "Payment" },
    { no: "2", name: "Dsuyladj", email: "sdhf@gmail.com", date: "04-9-2015 06:35:45", status: "Payment" }
  ];

  return (
    <div className='w-full'>
      <Header text={"Affiliate Users Listing"} />
      <Table headTable={affiliateHead} body={affiliateBody} dataName='affilate' />
    </div>
  );
};

export default Page;
