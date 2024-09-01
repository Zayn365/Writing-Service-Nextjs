'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import Textarea from '@/components/admin/Textarea'
import { offerData, offerPayment } from '@/constants/offer'
import { DeleteData } from '@/hooks/DeleteData'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const [OffersData, setOffersData] = useState({
        id_: 0,
        title: "",
        words: 0,
        amount: 0,
        amount_total: 0,
        installments_month: 0,
        details: "",
        no_of_books: 0,
    })
    const { data, error, loading } = UseFetchData('/api/offers');

    const handleDelete = async (id: string) => {
        try {
            const result = await DeleteData(id, "offers");
            console.log('FAQ deleted:', result);
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    const handleTextChange = (e: any) => {
        const { name, value } = e.target;
        setOffersData(prev => ({ ...prev, [name]: value }));
    };

    const addOffers = async () => {
        try {
            const result = await postData({ endpoint: "/api/offers", data: OffersData })
            if (result) {
                toast.success("successfully!")
            }

        } catch (error) {
            toast.error(`something went wrong ${error}`)

        }
    }

    return (
        <div className='w-full'>
            <Header text={"Add new offers"} />
            <div className='flex justify-start items-center flex-wrap py-4 gap-8'>
                <InputField placeholder='Title' type='text' name='title' id='title' handleChange={handleTextChange} />
                <InputField placeholder='No of books' type='number' name='no_of_books' id='books' handleChange={handleTextChange} />
                <InputField placeholder='Total words' type='number' name='words' id='word' handleChange={handleTextChange} />
                <InputField placeholder='Amount' type='number' name='amount' id='amount' handleChange={handleTextChange} />
                <InputField placeholder='Total' type='number' name='amount_total' id='amount_total' handleChange={handleTextChange} />
                <InputField placeholder='Installments' type='number' name='installments_month' id='Installments' handleChange={handleTextChange} />
                <Textarea placeholder='Details' className='w-full' handleChange={handleTextChange} />
            </div>
            <Button text={"add"} className=' mb-4' buttonHandle={addOffers} />
            <Header text={"Offers"} />
            <Table headTable={offerPayment} body={data} dataName="offers" handleDelete={handleDelete} />
        </div>
    )
}

export default Page
