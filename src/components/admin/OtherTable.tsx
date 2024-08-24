'use client'
import React, { useState } from 'react';
import Button from './Button';

interface TableProps {
    headTable: string[];
    body?: any[];
    dataName?: string;
}

const OtherTable: React.FC<TableProps> = ({ headTable, body, dataName }) => {

    return (
        <div className='w-full overflow-x-auto'>
            <table className='w-full my-1 border-collapse'>
                <thead className='bg-orange-700'>
                    <tr className='bg-orange-700 w-full'>
                        {
                            headTable?.map((item, index) => (
                                <th
                                    key={index}
                                    className='text-black bg-gray-300 border p-1  font-normal text-start  capitalize'>
                                    {item}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        body.map((item: any, index: any) => (
                            <tr key={index}>
                                <td className='p-1  border'>{item?.no}</td>
                                {
                                    dataName === "seo" &&
                                    <>
                                        <td className='p-1  border'>{item?.title}</td>
                                        <td className='p-1  border'>{item?.url}</td>
                                        <td className='p-1  border'>{item?.keyword}</td>
                                        <td className='p-1  border'>{item?.des}</td>
                                        <td className='px-2 py-1  border text-center '>
                                            <Button text={item?.view.edit} className='mb-4' />
                                            <Button text={item?.view.delete} />
                                        </td>
                                    </>
                                }
                                {
                                    dataName === "testimonial" &&
                                    <>
                                        <td className='p-1  border'>{item?.title}</td>
                                        <td className='p-1  border'>{item?.detail}</td>
                                        <td className='p-1  border'>{item?.status}</td>
                                    </>
                                }
                                {
                                    dataName === "page" &&
                                    <>
                                        <td className='p-1  border'>{item?.name}</td>
                                        <td className='p-1  border'>{item?.slug}</td>
                                        <td className='p-1  border'>{item?.item}</td>
                                        <td className='p-1  border'>{item?.order}</td>
                                        <td className='p-1  border '>{item?.status ? <div className='rounded-full p-1 bg-green-800 h-[15px] w-[15px]'></div> : <div className='p-1 bg-red-500 rounded-full h-[15px] w-[15px]'></div>}</td>
                                        <td className='px-2 py-1 '>
                                            <Button text={item?.view.edit} />  <Button text={item?.view.delete} />
                                        </td>
                                    </>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default OtherTable;
