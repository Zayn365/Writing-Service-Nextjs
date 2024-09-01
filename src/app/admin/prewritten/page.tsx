'use client'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import UseFetchData from '@/hooks/UseFetchData'
import { Axios } from '@/utils/Axios'
import React, { useState } from 'react'

const Page = () => {
    const prewrittenHead = ["#", "category", "Title", "subtitle", "word", "Amount", "purchased", "status", ""]
    const prewrittenBody = [
        {
            no: "159", category: "Home Improvement", title: "Accounting", subTitle: "Step by Step Comprehensive Blueprint on How to Organize Your Kitchen like the Pros to Ensure it is more Functional and Stylish Without Spending a Fortune", word: "15300", amount: "800", purchased: "janetangelwelch@gmail.com	", status: "Sold", view: { edit: "edit", delete: "delete" }
        },
        {
            no: "159", category: "Home Improvement", title: "Accounting", subTitle: "Step by Step Comprehensive Blueprint on How to Organize Your Kitchen like the Pros to Ensure it is more Functional and Stylish Without Spending a Fortune", word: "15300", amount: "800", purchased: "janetangelwelch@gmail.com	", status: "Sold", view: { edit: "edit", delete: "delete" }
        }
        ,
        {
            no: "159", category: "Home Improvement", title: "Accounting", subTitle: "Step by Step Comprehensive Blueprint on How to Organize Your Kitchen like the Pros to Ensure it is more Functional and Stylish Without Spending a Fortune", word: "15300", amount: "800", purchased: "janetangelwelch@gmail.com	", status: "Sold", view: { edit: "edit", delete: "delete" }
        },
        {
            no: "159", category: "Home Improvement", title: "Accounting", subTitle: "Step by Step Comprehensive Blueprint on How to Organize Your Kitchen like the Pros to Ensure it is more Functional and Stylish Without Spending a Fortune", word: "15300", amount: "800", purchased: "janetangelwelch@gmail.com	", status: "Sold", view: { edit: "edit", delete: "delete" }
        },

    ]
    const { data, loading, error } = UseFetchData("/api/prewrittenBookCategories")

    if (data) {
        console.log(data)
    }

    const category = ["Accounting", "Activites,Craft & Games", "Addition & Recovery", "Adimistrative Law"]
    const [preWritten, setPreWritten] = useState({
        title: "",
        subTitle: "",
        words: "",
        price: ""
    });
    const [files, setFiles] = useState({
        kindleBookFile: null,
        paperbackFile: null,
        bookDescriptionFile: null,
        keywordsFile: null,
        kindleBookCoverFile: null,
        paperCoverFile: null
    });

    const handleTextChange = (e: any) => {
        const { name, value } = e.target;
        setPreWritten(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: any) => {
        const { name, files } = e.target;
        setFiles(prev => ({ ...prev, [name]: files[0] }));
    };

    const addPreWritten = async () => {
        try {
            const formData = new FormData();

            // Append text fields
            Object.keys(preWritten).forEach(key => formData.append(key, preWritten[key]));
            Object.keys(files).forEach(key => {
                if (files[key]) {
                    formData.append(key, files[key]);
                }
            });
            const response = await Axios.post('/api/prewrittenBooks', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('prewrittenBookCategories added successfully:', response.data);
            setPreWritten({
                title: "",
                subTitle: "",
                words: "",
                price: ""
            });
            setFiles({
                kindleBookFile: null,
                paperbackFile: null,
                bookDescriptionFile: null,
                keywordsFile: null,
                kindleBookCoverFile: null,
                paperCoverFile: null
            });
        } catch (error) {
            console.log('Something went wrong:', error);
        }
    };

    return (
        <div className='w-full'>
            <Header text={"Prewritten Books"} />
            <div className="my-4 w-full flex flex-wrap justify-start items-center gap-2">
                <InputField type="text" name="title" placeholder='Title' value={preWritten.title} handleChange={handleTextChange} />
                <InputField type="text" name="subTitle" placeholder='Sub Title' value={preWritten.subTitle} handleChange={handleTextChange} />
                <InputField type="text" name="words" placeholder='Words' value={preWritten.words} handleChange={handleTextChange} />
                <InputField type="text" name="price" placeholder='Price' value={preWritten.price} handleChange={handleTextChange} />
                <InputField type="file" name="kindleBookFile" placeholder='Kindle Book File' handleChange={handleFileChange} />
                <InputField type="file" name="paperbackFile" placeholder='Paperback File' handleChange={handleFileChange} />
                <InputField type="file" name="bookDescriptionFile" placeholder='Book Description File' handleChange={handleFileChange} />
                <InputField type="file" name="keywordsFile" placeholder='7 Keywords File' handleChange={handleFileChange} />
                <InputField type="file" name="kindleBookCoverFile" placeholder='Kindle Book Cover File' handleChange={handleFileChange} />
                <InputField type="file" name="paperCoverFile" placeholder='Paper Cover File' handleChange={handleFileChange} />
                <button onClick={addPreWritten}>Submit</button>
                <select name="" id="" className='border p-1'>
                    {
                        category.map((item: any, index: any) => (
                            <>
                                <option value="">Select category</option>
                                <option key={index} value={item} >{item}</option>
                            </>
                        ))
                    }
                </select>
            </div>
            <Button text='Add' />
            <hr className="w-full h-[1px] bg-gray-400 my-1" />
            <Table headTable={prewrittenHead} body={prewrittenBody} dataName='prewrittenBooks' />
        </div>
    )
}

export default Page