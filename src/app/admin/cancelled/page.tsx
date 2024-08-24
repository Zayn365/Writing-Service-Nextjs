import React from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import { onGoingBody, onGoingHead } from '@/constants/cancelled';

const Page = () => {


  return (
    <div className='w-full'>
      <Header text={"Refunded order listing"} />
      <Table headTable={onGoingHead} body={onGoingBody} dataName='completed' />
    </div>
  );
};

export default Page;
