'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import UseFetchData from '@/hooks/UseFetchData';
import ToastProvider from '@/utils/Toast';

const Page = () => {
    const [onGodingData, setOnGoingData] = useState([])
    const { data, error, loading } = UseFetchData('/api/orders');
    const onGoingHead = ["#", "Order No.", "Service", "Name", "Email", "Words", "Order date", "Payment Status"];
    // const onGoingBody = [
    //     { year: "2007", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "190", date: "04-9-2015" },
    //     { year: "2009", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "023", date: "04-9-2015" },
    //     { year: "2019", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "501", date: "04-9-2015" },
    //     { year: "2020", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "150", date: "04-9-2015" },
    // ];

    useEffect(() => {
        if (data) {
            const filteredData = data.filter((item) => item.total_amount < 0 && item.original_amount < 0);
            setOnGoingData(filteredData);
        }
    }, [data]);

    return (
        <div className='w-full'>
            <ToastProvider />
            <Header text={"Ongoing Orders Listing"} />
            <Table headTable={onGoingHead} body={onGodingData} dataName='onGoing' />
        </div>
    );
};

export default Page;
