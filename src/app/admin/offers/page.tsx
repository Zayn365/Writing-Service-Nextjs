import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import Textarea from '@/components/admin/Textarea'
import { offerData, offerPayment } from '@/constants/offer'
import React from 'react'

const page = () => {

    return (
        <div className='w-full'>
            <Header text={"Add new offers"} />
            <div className='flex justify-start items-center flex-wrap py-4 gap-8'>
                <InputField placeholder='Title' type='text' name='title' id='title' />
                <InputField placeholder='No of books' type='text' name='books' id='books' />
                <InputField placeholder='Total words' type='text' name='word' id='word' />
                <InputField placeholder='Amount' type='text' name='amount' id='amount' />
                <InputField placeholder='Total' type='text' name='total' id='total' />
                <InputField placeholder='Installments' type='text' name='Installments' id='Installments' />
                <Textarea placeholder='Details' className='w-full' />
            </div>
            <Button text={"add"} className=' mb-4' />

            <Header text={"Offers"} />

            <Table headTable={offerPayment} body={offerData} dataName="offers" />
        </div>
    )
}

export default page