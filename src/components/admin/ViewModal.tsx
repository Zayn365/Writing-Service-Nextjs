import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';
import InputField from './InputField';
import { articleDetails } from '@/constants/articleDetails';

const ViewModal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div
                    id="default-modal"
                    aria-hidden={!isOpen}
                    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                    onClick={onClose}
                >
                    <div
                        className="relative p-2 w-full max-w-[80%] max-h-full bg-white rounded-lg shadow-lg dark:bg-gray-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Article Details
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={onClose}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 space-y-4 flex flex-col gap-y-4 overflow-y-auto h-[500px]">
                            <div className='w-full'>
                                {/* <Header text={"Article Details"} /> */}
                                <div className="w-full flex flex-col gap-y-4 my-4">
                                    {articleDetails?.map((item, index) => (
                                        <div key={index} className="flex gap-x-2">
                                            <div className="font-semibold w-1/3">{item.key}:</div>
                                            <div className="w-2/3">{item.value}</div>
                                        </div>
                                    ))}
                                    <div className='flex gap-x-2 mt-4'>
                                        <div className="font-semibold w-1/3">Written By</div>
                                        <div className="w-2/3 flex gap-x-2">
                                            <InputField type="text" placeholder="Enter new value" />
                                            <Button text="Update" />
                                        </div>
                                    </div>
                                </div>
                                <Header text={"Article Conversation"} />
                                <div className="flex  p-2 justify-between items-start gap-x-2">
                                    <div className='w-10/12  flex flex-col'>
                                        <div className="flex w-full pb-3  gap-x-2 border-b-2 border-gray-500 ">
                                            <Button text="client comments" />
                                            <Button text="admin comments" />
                                            <Button text="Writer comments" />
                                        </div>

                                    </div>
                                    <div className='w-1/3 flex flex-col gap-y-4 '>
                                        <InputField type='file' />
                                        <Button text="Writer comments" className='w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewModal;
