import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import React from 'react'

const page = () => {
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
    const category = ["Accounting", "Activites,Craft & Games", "Addition & Recovery", "Adimistrative Law"]
    return (
        <div className='w-full'>
            <Header text={"Prewritten Books"} />
            <div className="my-4 w-full flex flex-wrap justify-start items-center gap-2">
                <InputField type="text" placeholder='Title' />
                <InputField type="text" placeholder='Sub Title' />
                <InputField type="text" placeholder='Words' />
                <InputField type="text" placeholder='Price' />
                <InputField type="file" placeholder='Kindle Book File' />
                <InputField type="file" placeholder='Paperback File' />
                <InputField type="file" placeholder='Book Description File' />
                <InputField type="file" placeholder='7 Keywords File' />
                <InputField type="file" placeholder='Kindle Book Cover File' />
                <InputField type="file" placeholder='Paper Cover File' />

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

export default page