import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import { bodyDelivered, headDelivered } from '@/constants/deliverd';
import React from 'react'

const page = () => {

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
      <Table headTable={headDelivered} body={bodyDelivered} dataName='delivered' />
    </div>
  );
};

export default page
