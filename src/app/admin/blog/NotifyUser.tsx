'use client'
import Button from '@/components/admin/Button'
import InputField from '@/components/admin/InputField'
import Textarea from '@/components/admin/Textarea'
import React, { useState } from 'react'

const NotifyUser = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const users = ["Hamza ali", "zayn", "Hussain", "Abbas", "Umar", "Sufiyan"];

    const handleSelectAll = () => {
        setSelectedUsers(users);
        setSelectAll(true);
    }

    const handleDeselectAll = () => {
        setSelectedUsers([]);
        setSelectAll(false);
    }

    const handleUserClick = (user) => {
        setSelectedUsers((prevSelected) => {
            if (prevSelected.includes(user)) {
                return prevSelected.filter(item => item !== user);
            } else {
                return [...prevSelected, user];
            }
        });
    }

    const handleTextChange = async () => {


    }
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-y-2'>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Email Subject
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' name='meta_title' handleChange={handleTextChange} />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Select users
                    </span>
                    <div className='w-1/2 flex flex-col gap-y-2 '>
                        <ul className='h-[100px] border  w-[250px] overflow-y-auto overflow-x-hidden'>
                            {
                                users.map((user) => (
                                    <li
                                        key={user}
                                        onClick={() => handleUserClick(user)}
                                        className={`cursor-pointer px-2 py-1 ${selectedUsers.includes(user) ? 'bg-blue-200' : ''}`}
                                    >
                                        {user}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='flex justify-start items-center gap-x-5'>
                            <Button text={"Select All"} buttonHandle={handleSelectAll} />
                            <Button text={"Deselect All"} buttonHandle={handleDeselectAll} />
                        </div>
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Email Message
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' name='email_message' handleChange={handleTextChange} />
                    </div>
                </div>

                <div className='flex just'>
                    <span className='w-1/3 capitalize'>

                    </span>
                    <div className='w-1/2'>
                        <Button text={"Submit"} className='bg-blue-800 text-white uppercase  mb-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifyUser