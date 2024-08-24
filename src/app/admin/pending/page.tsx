import React from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import { onGoingBody, onGoingHead } from '@/constants/pending';

const Page = () => {

    return (
        <div className='w-full'>
            <Header text={"pending order listing"} />
            <Table headTable={onGoingHead} body={onGoingBody} dataName='pending' />
        </div>
    );
};

export default Page;
