import Button from '@/components/admin/Button'
import InputField from '@/components/admin/InputField'
import Textarea from '@/components/admin/Textarea'
import React from 'react'

const NewPost = () => {
    const handleTextChange = async () => {


    }
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-y-2'>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        title
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' name='meta_title' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Category
                    </span>
                    <div className='w-1/2'>
                        <select className='border p-2 w-[250px]'>
                            <option value="">Select Category</option>
                            <option value="">Annocument</option>
                            <option value="">Groupt Rules</option>
                            <option value="">Lesson 1</option>
                            <option value="">Samples</option>
                            <option value="">Writing Tips</option>

                        </select>
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Thumbnail
                    </span>
                    <div className='w-1/2'>
                        <InputField type='file' name='meta_title' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        content
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' name='content' handleChange={handleTextChange} />
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
                        Visibility
                    </span>
                    <div className='w-1/2 flex flex-col justify-start items-start '>
                        <div className='flex gap-x-2'>
                            <InputField type='radio' name='meta_title' id="" className='!w-3 self-start' handleChange={handleTextChange} />
                            <span>
                                public
                            </span>
                        </div>
                        <div className='flex gap-x-2'>
                            <InputField type='radio' name='meta_title' id="" className='!w-3 self-start' handleChange={handleTextChange} />
                            <span>
                                private
                            </span>
                        </div>

                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>

                    </span>
                    <div className='w-1/2'>
                        <Button text={"add New post"} className='bg-blue-800 text-white uppercase  mb-4' />
                    </div>
                </div>
            </div>
        </div>)
}

export default NewPost