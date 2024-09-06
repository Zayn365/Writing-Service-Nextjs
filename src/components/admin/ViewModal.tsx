'use client'
import React, { useEffect, useState } from 'react';
import Button from './Button';
import Header from './Header';
import InputField from './InputField';
import UseFetchData from '@/hooks/UseFetchData';
import Comments from './Comments';

const ViewModal = ({ isOpen, onClose, id, id_, order_no, item_word, date, item_title, item_Description, item_status, item_amount }) => {
    const { data, loading, error } = UseFetchData("/api/projects")
    const [articleDetailsData, setArticleDetailsData] = useState([]);
    const [selectedRole, setSelectedRole] = useState('client');

    useEffect(() => {
        const filterData = data.filter((item: any) => item.id === id || item.id_ === id_)
        setArticleDetailsData(filterData)
        console.log(filterData);
    }, [data])

    const handleDownload = () => {
        console.log('Download clicked');
    };

    const articleDetails = [
        { key: "Order No", value: order_no },
        { key: "Client Name", value: "unkown" },
        { key: "Service Type", value: "Full Package Publishing Service" },
        { key: "Article Title", value: item_title },
        { key: "Article Description", value: item_Description },
        { key: "Price", value: item_amount },
        { key: "Words", value: item_word },
        { key: "With This Package", value: "The Book formatted for Kindle, The Book formatted for paperback, EBook Cover, Paperback Cover, Book Description, 7 Keywords" },
        { key: "Status", value: item_status === 1 ? "Pending" : "Delivered" },
        { key: "Date Requested", value: date },
    ];

    // Function to handle button clicks
    const handleRoleChange = (role) => {
        setSelectedRole(role);
    };

    return (
        <>
            {isOpen && (
                <div
                    id="default-modal"
                    aria-hidden={isOpen}
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
                                <div className="flex p-2 justify-between items-start gap-x-2">
                                    <div className='w-10/12 flex flex-col'>
                                        <div className="flex w-full pb-3 gap-x-2 border-b-2 border-gray-500">
                                            <Button text="Client Comments" buttonHandle={() => handleRoleChange('client')} />
                                            <Button text="Admin Comments" buttonHandle={() => handleRoleChange('admin')} />
                                            <Button text="Writer Comments" buttonHandle={() => handleRoleChange('editor')} />
                                        </div>
                                        <div className="w-full flex flex-col gap-y-2 my-2">
                                            {
                                                articleDetailsData?.map((item) => {
                                                    // Filter comments based on the selected role
                                                    let comment = '';
                                                    if (selectedRole === 'client') {
                                                        comment = item.coments_about_writer || '';
                                                    } else if (selectedRole === 'admin') {
                                                        comment = item.admin_attachment_editor || '';
                                                    } else if (selectedRole === 'editor') {
                                                        comment = item.coments_about_editor || '';
                                                    }

                                                    return (
                                                        <Comments
                                                            key={item.id}
                                                            author={selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                                                            date={item.created_date}
                                                            attachmentName={comment}
                                                            onDownload={handleDownload}
                                                        />
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/3 flex flex-col gap-y-4 '>
                                        <InputField type='file' />
                                        <Button text="Submit Comment" className='w-full' />
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
