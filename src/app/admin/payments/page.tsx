import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { offerData, offerPayment } from '@/constants/payments'
import ToastProvider from '@/utils/Toast'
import React from 'react'

const page = () => {

    return (
        <div className='w-full'>
            <ToastProvider />

            <Header text={"Offer Payments"} />
            <Table headTable={offerPayment} body={offerData} dataName="payments" />
        </div>
    )
}

export default page