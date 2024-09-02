'use client';
import React, { useState } from 'react';
import Button from './Button';
import UseFetchData from '@/hooks/UseFetchData';

interface TableProps {
    headTable: string[];
    api?: string;
    dataName?: string;
    handleDelete?: (id: string) => void;
    handleEdit?: (id: string) => void;
}

const OtherTable: React.FC<TableProps> = ({ headTable, api, dataName, handleDelete, handleEdit }) => {
    const { data, error, loading } = UseFetchData(api);


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    // Number of items per page

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the body to only include items for the current page
    const paginatedBody = data?.slice(startIndex, endIndex);

    // Total number of pages
    const totalPages = Math?.ceil(data.length / itemsPerPage);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    return (
        <div className='w-full overflow-x-auto'>
            <table className='w-full my-1 border-collapse'>
                <thead className='bg-orange-700'>
                    <tr className='bg-orange-700 w-full'>
                        {
                            headTable?.map((item, index) => (
                                <th
                                    key={index}
                                    className='text-black bg-gray-300 border p-1 font-normal text-start capitalize'
                                >
                                    {item}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedBody.map((item: any, index: number) => (
                            <tr key={index}>
                                {
                                    dataName === "seo" &&
                                    <>
                                        <td className='p-1 border'>{item?.id_}</td>
                                        <td className='p-1 border'>{item?.meta_title}</td>
                                        <td className='p-1 border'>{item?.url}</td>
                                        <td className='p-1 border'>{item?.meta_keywords}</td>
                                        <td className='p-1 border'>{item?.meta_description}</td>
                                        <td className='px-2 py-1 border text-center'>
                                            <Button text={'Edit'} className='mb-4' buttonHandle={() => handleEdit(item.id)} />
                                            <Button text={'delete'} buttonHandle={() => handleDelete(item.id)} />
                                        </td>
                                    </>
                                }
                                {
                                    dataName === "testimonial" &&
                                    <>
                                        <td className='p-1 border'>{item?.id.slice(0, 3)}</td>
                                        <td className='p-1 border'>{item?.title}</td>
                                        <td className='p-1 border'>{item?.text}</td>
                                        <td className='p-1 border'>
                                            <Button
                                                text="Delete"
                                                buttonHandle={() => handleDelete?.(item.id)}
                                            />
                                        </td>
                                    </>
                                }
                                {
                                    dataName === "page" &&
                                    <>
                                        <td className='p-1 border'>{item?.no}</td>
                                        <td className='p-1 border'>{item?.name}</td>
                                        <td className='p-1 border'>{item?.slug}</td>
                                        <td className='p-1 border'>{item?.item}</td>
                                        <td className='p-1 border'>{item?.order}</td>
                                        <td className='p-1 border'>
                                            {item?.status ? (
                                                <div className='rounded-full p-1 bg-green-800 h-[15px] w-[15px]'></div>
                                            ) : (
                                                <div className='p-1 bg-red-500 rounded-full h-[15px] w-[15px]'></div>
                                            )}
                                        </td>
                                        <td className='px-2 py-1 border text-center'>
                                            <Button text={'Edit'} className='mb-4' />
                                            <Button text={'delete'} />
                                        </td>
                                    </>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='flex justify-center mt-4'>
                <Button
                    text="Previous"
                    buttonHandle={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className='mr-2'
                />
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            text={`${index + 1}`}
                            buttonHandle={() => setCurrentPage(index + 1)}
                            className={`mx-1 ${currentPage === index + 1 ? 'bg-blue-800 text-white' : ''}`}
                        />
                    ))
                }
                <Button
                    text="Next"
                    buttonHandle={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    className='ml-2'
                />
            </div>
        </div>
    );
};

export default OtherTable;
