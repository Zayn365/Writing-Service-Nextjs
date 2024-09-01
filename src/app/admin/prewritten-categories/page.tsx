'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import { DeleteData } from '@/hooks/DeleteData'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import { Axios } from '@/utils/Axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const prewrittenHead = ["#", "Title", "Status"]
    const { data, error, loading } = UseFetchData('/api/prewrittenBookCategories');
    const [titleName, setTitleName] = useState("");

    const addPreWrittenBook = async () => {
        try {
            const date = new Date();
            const seconds = date.getSeconds();
            const prewrittenBookCategories = { title: titleName, id_: seconds };
            const response = await postData({ endpoint: '/api/prewrittenBookCategories', data: prewrittenBookCategories });
            console.log('prewrittenBookCategories added successfully:', response.data);
            if (response) {
                toast.success("successfully!")
            }
            setTitleName("")
        } catch (error) {
            console.log('Something went wrong:', error);
        }
    }


    const handleDelete = async (id: string) => {
        try {
            const result = await DeleteData(id, "prewrittenBookCategories");
            console.log('FAQ deleted:', result);
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    return (
        <div className='w-full'>
            <Header text={"Prewritten Books Categories"} />
            <div className="my-4 w-full flex justify-start items-center gap-x-2">
                <InputField type="text" placeholder='category Title' handleChange={(e) => setTitleName(e.target.value)}
                />
                <Button text='Add new category' buttonHandle={addPreWrittenBook} />
            </div>
            <hr className="w-full h-[1px] bg-gray-400" />
            <Table headTable={prewrittenHead} body={data} dataName='prewritten' handleDelete={handleDelete} />
        </div>
    )
}

export default Page