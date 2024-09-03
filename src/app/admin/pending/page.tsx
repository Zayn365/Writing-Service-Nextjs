'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import { onGoingBody, onGoingHead } from '@/constants/pending';
import UseFetchData from '@/hooks/UseFetchData';

const Page = () => {
    const [onPendingData, setOnPendingData] = useState([])
    const { data, error, loading } = UseFetchData('/api/orders');

    useEffect(() => {
        if (data) {
            const filteredData = data.filter((item) => item.total_amount > 0 && item.original_amount > 0);
            setOnPendingData(filteredData);
        }
    }, [data]);

    return (
        <div className='w-full'>
            <Header text={"pending order listing"} />
            <Table headTable={onGoingHead} body={onPendingData} dataName='pending' />
        </div>
    );
};

export default Page;
