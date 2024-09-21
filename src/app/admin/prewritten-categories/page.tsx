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

    const [fetchCount, setFetchCount] = useState(0);
    const { data, error, loading } = UseFetchData('/api/prewrittenBookCategories', fetchCount);
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
            toast.success("Added successfully!");
            setFetchCount(prev => prev + 1); // Trigger re-fetch
            const response = await postData({ endpoint: 'api/prewrittenBookCategories', data: prewrittenBookCategories });
            console.log('prewrittenBookCategories added successfully:', response.data);
            setTitleName("")
        } catch (error) {
            console.log('Something went wrong:', error);
        }
    }

    const handleDelete = async (id: string) => {
        try {
            toast.success("Deleted successfully!");
            setFetchCount(prev => prev + 1); // Trigger re-fetch
            await DeleteData(id, "prewrittenBookCategories");
        } catch (error) {
            console.error('Error deleting prewrittenBookCategories:', error);
        }
    };

    const handleEdit = (id: number) => {
        const selected = data.find((item: any) => item.id === id);
        if (selected) {
            setTitleName(selected.title);
            setIsEditing(true);
            setId(selected.id)
            setId_(selected.id_)
        }
    };

    const handleUpdate = async () => {
        if (Number(id) === 0) return;
        try {
            await EditData(id.toString(), 'prewrittenBookCategories', { id_: id_, title: titleName });
            toast.success("Updated successfully!");
            setIsEditing(false);
            setFetchCount(prev => prev + 1); // Trigger re-fetch
        } catch (error) {
            console.error('Error updating prewrittenBookCategories:', error);
            toast.error("Error updating prewrittenBookCategories");
        }
    };

    return (
        <div className='w-full'>
            <ToastProvider />
            <Header text={"Prewritten Books Categories"} />
            <div className="my-4 w-full flex justify-start items-center gap-x-2">
                <InputField
                    type="text"
                    placeholder='Category Title'
                    value={titleName}
                    handleChange={(e) => setTitleName(e.target.value)}
                />
                <Button
                    text={isEditing ? "Update Category" : "Add new category"}
                    className='!mb-0'
                    buttonHandle={isEditing ? handleUpdate : addPreWrittenBook}
                />
            </div>
            <hr className="w-full h-[1px] bg-gray-400" />
            <Table
                headTable={prewrittenHead}
                body={data}
                dataName='prewritten'
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                loading={loading}
            />
        </div>
    )
}

export default Page;
