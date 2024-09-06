'use client'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import { bodyRefunded, headRefunded } from '@/constants/refunded'
import UseFetchData from '@/hooks/UseFetchData'
import ToastProvider from '@/utils/Toast'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const { data, error, loading } = UseFetchData("/api/orders");
    const [onRefundedData, setOnRefundedData] = useState([])


    useEffect(() => {
        if (data) {
            const filteredData = data.filter((item) => item.total_amount < 0 && item.original_amount < 0 && item.status === 2 && (item.affiliate_amount !== null || undefined && item.affiliate_amount < 0) && item.affiliate_amount_paid === 1);
            setOnRefundedData(filteredData);
        }
    }, [data]);

    return (
        <div className='w-full'>
            <ToastProvider />

            <Header text={"Refunded Ariticles Listing"} />
            <div className="w-full flex justify-start items-start gap-x-2 my-4">
                <div >
                    <span>Minium Data:</span>
                    <InputField type='text' />
                </div>
                <div >
                    <span>Maximum Data:</span>
                    <InputField type='text' />
                </div>

            </div>
            <Table headTable={headRefunded} body={onRefundedData} dataName='refunded' />
        </div>
    )
}

export default Page