import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import React from 'react'

const page = () => {
    const prewrittenHead = ["#", "Title", "Status"]
    const prewrittenBody = [
        {
            no: "159", title: "Accounting", view: { edit: "edit", delete: "delete" }
        },
        {
            no: "159", title: "Activities, Crafts & Games", view: { edit: "edit", delete: "delete" }
        }
        ,
        {
            no: "159", title: "Addiction & Recovery", view: { edit: "edit", delete: "delete" }
        }
        ,
        {
            no: "159", title: "Administrative Law", view: { edit: "edit", delete: "delete" }
        }

    ]
    return (
        <div className='w-full'>
            <Header text={"Prewritten Books Categories"} />
            <div className="my-4 w-full flex justify-start items-center gap-x-2">
                <InputField type="text" placeholder='category Title' />
                <Button text='Add new category' />
            </div>
            <hr className="w-full h-[1px] bg-gray-400" />
            <Table headTable={prewrittenHead} body={prewrittenBody} dataName='prewritten' />
        </div>
    )
}

export default page