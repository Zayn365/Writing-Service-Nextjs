'use client';
import Button from '@/components/admin/Button';
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import OtherTable from '@/components/admin/OtherTable';
import Textarea from '@/components/admin/Textarea';
import { testimonialBody, testimonialHead } from '@/constants/testimonial';
import { DeleteData } from '@/hooks/DeleteData';
import UseFetchData from '@/hooks/UseFetchData';
import { Axios } from '@/utils/Axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [clientName, setClientName] = useState("");
    const [detail, setDetail] = useState("");
    const addTestimonial = async () => {
        try {
            const testimonial = { title: clientName, detail: detail };
            const response = await Axios.post('/api/testimonials', testimonial);
            console.log('Testimonial added successfully:', response.data);
            setClientName("");
            setDetail("");
        } catch (error) {
            console.log('Something went wrong:', error);
        }
    };


    const handleDelete = async (id: string) => {
        try {
            const result = await DeleteData(id, "testimonials");
            console.log('testimonials deleted:', result);
        } catch (error) {
            console.error('Error deleting testimonials:', error);
        }
    };

    return (
        <div>
            <Header text={"Add Testimonial"} />
            <div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Title
                    </span>
                    <div className='w-1/2'>
                        <InputField
                            placeholder='Title'
                            handleChange={(e) => setClientName(e.target.value)}
                            type='text'
                            id='title'
                            name='title'
                            value={clientName}
                        />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Text
                    </span>
                    <div className='w-1/2'>
                        <Textarea
                            placeholder='Text'

                            handleChange={(e) => setDetail(e.target.value)}
                            value={detail}
                            name='text'
                            id='text'
                            className='w-full'
                        />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                    </span>
                    <div className='w-1/2'>
                        <Button buttonHandle={addTestimonial} text={"Add Testimonial"} className='bg-blue-800 text-white capitalize mb-4' />
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-400 my-2'></div>
            <OtherTable handleDelete={handleDelete} api={'/api/testimonials'} headTable={testimonialHead} dataName='testimonial' />
        </div>
    );
};

export default Page;
