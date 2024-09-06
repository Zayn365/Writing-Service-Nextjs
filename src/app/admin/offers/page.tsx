'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import Textarea from '@/components/admin/Textarea'
import { offerData, offerPayment } from '@/constants/offer'
import { DeleteData } from '@/hooks/DeleteData'
import { EditData } from '@/hooks/EditData'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import ToastProvider from '@/utils/Toast'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const { data, error, loading } = UseFetchData('/api/offers');
    const [nextId, setNextId] = useState<number>(1);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [id, setId] = useState("");
    const [OffersData, setOffersData] = useState({
        id_: nextId,
        title: "",
        words: null,
        amount: null,
        amount_total: null,
        installments_month: null,
        details: "",
        no_of_books: null,
    })

    const handleDelete = async (id: string) => {
        try {
            const result = await DeleteData(id, "offers");
            console.log('offers deleted:', result);
        } catch (error) {
            console.error('Error deleting offers:', error);
        }
    };

    const handleTextChange = (e: any) => {
        const { name, value } = e.target;
        setOffersData(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (data && data.length > 0) {
            const maxId = Math.max(...data.map((item: any) => item.id_));
            setNextId(maxId + 1);
        }
    }, [data]);

    const addOffers = async () => {
        try {
            const result = await postData({ endpoint: "api/offers", data: OffersData })
            if (result) {
                toast.success("successfully!")
            }
            setOffersData({
                id_: nextId,
                title: "",
                words: 0,
                amount: 0,
                amount_total: 0,
                installments_month: 0,
                details: "",
                no_of_books: 0,
            })

        } catch (error) {
            toast.error(`something went wrong ${error}`)

        }
    }

    const handleEdit = (id: number) => {
        const selected = data.find((item: any) => item.id === id);
        if (selected) {
            setOffersData(selected);
            setIsEditing(true);
            setId(selected.id)
        }
        console.log(selected)
    };


    const handleUpdate = async () => {
        if (Number(id) === 0) return;

        try {
            console.log(OffersData)
            await EditData(id.toString(), 'offers', OffersData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating offers:', error);
            toast.error("Error updating offers");
        }
    };
    return (
        <div className='w-full'>
            <ToastProvider />
            <Header text={"Add new offers"} />
            <div className='flex justify-start items-center flex-wrap py-4 gap-8'>
                <InputField placeholder='Title' type='text' name='title' id='title' handleChange={handleTextChange} value={OffersData.title} />
                <InputField placeholder='No of books' type='number' name='no_of_books' id='books' handleChange={handleTextChange} value={OffersData.no_of_books} />
                <InputField placeholder='Total words' type='number' name='words' id='word' handleChange={handleTextChange} value={OffersData.words} />
                <InputField placeholder='Amount' type='number' name='amount' id='amount' handleChange={handleTextChange} value={OffersData.amount} />
                <InputField placeholder='Total' type='number' name='amount_total' id='amount_total' handleChange={handleTextChange} value={OffersData.amount_total} />
                <InputField placeholder='Installments' type='number' name='installments_month' id='Installments' handleChange={handleTextChange} value={OffersData.installments_month} />
                <Textarea placeholder='Details' className='w-full' handleChange={handleTextChange} name='details' value={OffersData.details} />
            </div>
            <Button text={isEditing ? "update" : "add"} className=' mb-4' buttonHandle={isEditing ? handleUpdate : addOffers} />
            <Header text={"Offers"} />
            <Table headTable={offerPayment} handleEdit={handleEdit} body={data} dataName="offers" handleDelete={handleDelete} />
        </div>
    )
}

export default Page
