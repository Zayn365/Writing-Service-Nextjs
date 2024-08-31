'use client';
import Button from '@/components/admin/Button';
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import OtherTable from '@/components/admin/OtherTable';
import Textarea from '@/components/admin/Textarea';
import { testimonialBody, testimonialHead } from '@/constants/testimonial';
import UseFetchData from '@/hooks/UseFetchData';
import { Axios } from '@/utils/Axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [clientName, setClientName] = useState("");
    const [detail, setDetail] = useState("");
    // const [testimonials, setTestimonials] = useState<any[]>([]);
    const { data, error, loading } = UseFetchData('/api/testimonials');



    // useEffect(() => {
    //     const fetchTestimonials = async () => {
    //         try {
    //             const response = await Axios.get('/api/testimonials');
    //             setTestimonials(response.data.data);
    //         } catch (error) {
    //             console.log('Failed to fetch testimonials:', error);
    //         }
    //     };

    //     fetchTestimonials();
    // }, []);

    if (data) {
        console.log(data)
    }
    const addTestimonial = async () => {
        try {
            const testimonial = { title: clientName, detail: detail };
            const response = await Axios.post('/api/testimonials', testimonial);
            console.log('Testimonial added successfully:', response.data);
            setClientName("");
            setDetail("");
            // const updatedResponse = await Axios.get('/api/testimonials');
            // setTestimonials(updatedResponse.data.data);
        } catch (error) {
            console.log('Something went wrong:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const deleteTestimonial = async (id: string) => {
        try {
            await Axios.delete(`/api/testimonials?id=${id}`);
            console.log('Testimonial deleted successfully');
            // const updatedResponse = await Axios.get('/api/testimonials');
            // setTestimonials(updatedResponse.data.data);
        } catch (error) {
            console.error('Something went wrong', error);
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
            <OtherTable handleDelete={deleteTestimonial} body={data} headTable={testimonialHead} dataName='testimonial' />
        </div>
    );
};

export default Page;
