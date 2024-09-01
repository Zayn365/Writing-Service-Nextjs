'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import OtherTable from '@/components/admin/OtherTable'
import Textarea from '@/components/admin/Textarea'
import { seoHead } from '@/constants/seo'
import { postData } from '@/hooks/PostData'
import UseFetchData from '@/hooks/UseFetchData'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
    const [seo, setIsSeo] = useState({
        meta_title: "",
        url: "",
        meta_keywords: "",
        meta_description: "",
    })
    const { data, error, loading } = UseFetchData("/api/seoDetails");

    const handleTextChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setIsSeo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addSeo = async () => {
        try {
            const result = await postData({ endpoint: '/api/seoDetails', data: setIsSeo })
            if (result) {
                toast.success("Successfully Added!")
            }
        } catch (error) {
            toast.error(`something went wrong ${error}`)
        }
    }

    return (

        <div>
            <Header text={"Add SEO Details"} />
            <div>
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
                        <Button buttonHandle={addSeo} text={"add seo Detail"} className='bg-blue-800 text-white capitalize  mb-4' />
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-400 my-2'></div>

            <OtherTable api={'/api/seoDetails'} headTable={seoHead} dataName='seo' />

        </div>
    )
}

export default Page