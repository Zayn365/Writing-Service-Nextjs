'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import { DeleteData } from '@/hooks/DeleteData'
import { EditData } from '@/hooks/EditData'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import { Axios } from '@/utils/Axios'
import ToastProvider from '@/utils/Toast'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const prewrittenHead = ["#", "Title", "Status"]

    const { data, error, loading } = UseFetchData('/api/prewrittenBookCategories');
    const [nextId, setNextId] = useState<number>(1);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [id, setId] = useState("");
    const [id_, setId_] = useState("");

    const [titleName, setTitleName] = useState("");

    useEffect(() => {
        if (data && data.length > 0) {
            const maxId = Math.max(...data.map((item: any) => item.id_));
            setNextId(maxId + 1);
        }
    }, [data]);
    const addPreWrittenBook = async () => {
        try {
            const prewrittenBookCategories = { title: titleName, id_: nextId };
            const response = await postData({ endpoint: 'api/prewrittenBookCategories', data: prewrittenBookCategories });
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
            const { data, error, loading } = UseFetchData('/api/prewrittenBookCategories');
            if (result) {
                toast.success("Deleted successfully!")
            }

            console.log('prewrittenBookCategories deleted:', result);
        } catch (error) {
            console.error('Error deleting prewrittenBookCategories:', error);
        }
    };

    const handleEdit = (id: number) => {
        console.log(id)
        const selected = data.find((item: any) => item.id === id);
        if (selected) {
            setTitleName(selected.title);
            setIsEditing(true);
            setId(selected.id)
            setId_(selected.id_)
        }
        console.log(selected)
    };


    const handleUpdate = async () => {
        if (Number(id) === 0) return;
        try {
            console.log(id.toString(), 'prewrittenBookCategories', { id_: id_, title: titleName, });
            await EditData(id.toString(), 'prewrittenBookCategories', { id_: id_, title: titleName, });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating prewrittenBookCategories:', error);
            toast.error("Error updating prewrittenBookCategories");
        }
    };
    if (data) {
        console.log(data);
    }
    return (
        <div className='w-full'>
            <ToastProvider />

            <Header text={"Prewritten Books Categories"} />
            <div className="my-4 w-full flex justify-start items-center gap-x-2">
                <InputField type="text" placeholder='category Title' value={titleName} handleChange={(e) => setTitleName(e.target.value)}
                />
                <Button
                    text={isEditing ? "Update Category" : "Add new category"}
                    className='!mb-0'
                    buttonHandle={isEditing ? handleUpdate : addPreWrittenBook}
                />
            </div>
            <hr className="w-full h-[1px] bg-gray-400" />
            <Table headTable={prewrittenHead} body={data} dataName='prewritten' handleEdit={handleEdit} handleDelete={handleDelete} loading={loading} />
        </div>
    )
}

export default Page