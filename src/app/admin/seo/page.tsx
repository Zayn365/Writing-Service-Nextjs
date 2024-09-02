'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import OtherTable from '@/components/admin/OtherTable'
import Textarea from '@/components/admin/Textarea'
import { seoHead } from '@/constants/seo'
import { DeleteData } from '@/hooks/DeleteData'
import { EditData } from '@/hooks/EditData'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const [id, setId] = useState("");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [nextId, setNextId] = useState<number>(1);

    const [seo, setIsSeo] = useState({
        id_: nextId,
        meta_title: "",
        url: "",
        meta_keywords: "",
        meta_description: "",
    })
    const { data, error, loading } = UseFetchData("/api/seoDetails");

    useEffect(() => {
        if (data && data.length > 0) {
            const maxId = Math.max(...data.map((item: any) => item.id_));
            setNextId(maxId + 1);
        }
    }, [data]);

    const handleTextChange = (e: any) => {
        const { name, value } = e.target;
        setIsSeo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addSeo = async () => {
        try {
            const result = await postData({ endpoint: 'api/seoDetails', data: seo })
            if (result) {
                toast.success("Successfully Added!")
            }
            setIsSeo({
                id_: nextId,
                meta_title: "",
                url: "",
                meta_keywords: "",
                meta_description: "",
            })
        } catch (error) {
            toast.error(`something went wrong ${error}`)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const result = await DeleteData(id, "seoDetails");
            console.log('seoDetails deleted:', result);
        } catch (error) {
            console.error('Error deleting FAQ:', error);
        }
    };

    const handleEdit = (id: string) => {
        const selectedFaq = data.find((item: any) => item.id === id);
        if (selectedFaq) {
            setIsSeo(selectedFaq);
            setIsEditing(true);
            setId(selectedFaq.id)
        }
        console.log(selectedFaq)
    };


    const handleUpdate = async () => {
        if (Number(id) === 0) return;

        try {
            console.log(seo)
            await EditData(id.toString(), 'seoDetails', seo);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating FAQ:', error);
            toast.error("Error updating FAQ");
        }
    };

    return (

        <div>
            <Header text={"Add SEO Details"} />
            <div className='flex flex-col gap-y-2'>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        page title
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' name='meta_title' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        page URL
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' name='url' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Meta Keywords
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' name='meta_keywords' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Meta Descriptions
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' name='meta_description' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                    </span>
                    <div className='w-1/2'>
                        <Button buttonHandle={isEditing ? addSeo : handleUpdate} text={isEditing ? "Update seo Detail" : "Add seo Detail"}
                            className='bg-blue-800 text-white capitalize  mb-4' />
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-400 my-2'></div>

            <OtherTable api={'/api/seoDetails'} headTable={seoHead} handleEdit={handleEdit} dataName='seo' handleDelete={handleDelete} />

        </div>
    )
}

export default Page