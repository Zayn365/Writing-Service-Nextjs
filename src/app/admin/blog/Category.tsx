import Button from '@/components/admin/Button'
import InputField from '@/components/admin/InputField'
import OtherTable from '@/components/admin/OtherTable'
import React from 'react'

const Category = () => {
    const categoryHead = ['#', "category title", "status", ""]
    const handleTextChange = () => {

    }
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-y-2'>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Category Title
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' name='meta_title' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Status
                    </span>
                    <div className='w-1/2 flex justify-start items-center '>
                        <InputField type='checkbox' name='meta_title' className='!w-3 self-start' handleChange={handleTextChange} />
                    </div>
                </div>


                <div className='flex just'>
                    <span className='w-1/3 capitalize'>

                    </span>
                    <div className='w-1/2'>
                        <Button text={"add new category"} className='bg-blue-800 text-white uppercase  mb-4' />
                    </div>
                </div>
            </div>
            <OtherTable headTable={categoryHead} />
        </div>)
}

export default Category