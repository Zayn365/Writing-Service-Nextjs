import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import Table from '@/components/admin/Table'
import { bodyRefunded, headRefunded } from '@/constants/refunded'
import React from 'react'

const page = () => {


    return (
        <div className='w-full'>
            <Header text={"Refunded Ariticles Listing"} />
            <div className="w-full flex justify-start items-start gap-x-2 my-4">
                <div >
                    <span>Minium Data:</span>
                    <InputField type='text' />
                </div>
                <div >
                    <span>Maximum Data:</span>
                    <InputField type='text' />
                </div>

            </div>
            <Table headTable={headRefunded} body={bodyRefunded} dataName='refunded' />
        </div>
    )
}

export default page