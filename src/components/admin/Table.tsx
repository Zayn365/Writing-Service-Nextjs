'use client'
import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import Sort from './Sort';
import SearchBar from './SearchBar';
import Link from 'next/link';
import Button from './Button';

interface TableProps {
    headTable: string[];
    body?: any[];
    dataName?: string;
    handleDelete?: any;
    handleEdit?: any
}

const Table: React.FC<TableProps> = ({ headTable, body, dataName, handleDelete, handleEdit }) => {
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [sortColumn, setSortColumn] = useState<string>('');
    const [sortNumber, setSortNumber] = useState('25');
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(Number(sortNumber));
    const handleAsc = (column: string) => {
        setSortDirection('asc');
        setSortColumn(column);
    };

    const handleDes = (column: string) => {
        setSortDirection('desc');
        setSortColumn(column);
    };

    const sortedData = () => {
        if (!sortColumn || !body) return body;
        return [...body].sort((a, b) => {
            const aValue = a[sortColumn.toString().toLowerCase()];
            const bValue = b[sortColumn.toString().toLowerCase()];
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };


    const getPaginatedData = () => {
        const sorted = sortedData();
        // Ensure sorted is 
        if (!Array.isArray(sorted)) return [];

        const filtered = sorted.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
            );
        });

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filtered.slice(startIndex, endIndex);
    };


    const totalPages = Math.ceil((sortedData()?.length || 0) / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
    };

    return (
        <div className='w-full'>
            <div className='w-full flex my-2'>
                <Sort setSortNumber={setSortNumber} />
                <SearchBar setSearch={setSearch} />
            </div>
            <div className='w-full overflow-x-auto'>
                <table className='w-full my-1 border-collapse'>
                    <thead className='bg-orange-700'>
                        <tr className='bg-orange-700 w-full'>
                            {
                                headTable?.map((item, index) => (
                                    <th
                                        key={index}
                                        className='text-white  font-normal text-start px-1 py-1 capitalize'>
                                        <div className='flex items-center gap-x-1 cursor-pointer'>
                                            {item}
                                            <ArrowUpIcon
                                                onClick={() => handleAsc(item)}
                                                fontSize='small'
                                                className='text-white h-[12px] w-[12px]'
                                            />
                                            <ArrowDownIcon
                                                onClick={() => handleDes(item)}
                                                fontSize='small'
                                                className='text-white h-[12px] w-[12px]'
                                            />
                                        </div>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getPaginatedData()?.map((item: any, index: any) => (
                                <tr key={index} className='border hover:bg-gray-100 capitalize'>
                                    {
                                        dataName === "user" &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.no}</td>
                                            <td className='text-start px-2 py-1 '>{item?.name}</td>
                                            <td className='text-start px-2 py-1 '>{item?.email}</td>
                                            <td className='text-start px-2 py-1 '>{item?.type}</td>
                                            <td className='text-start px-2 py-1 '>{item?.id}</td>
                                            <td className='text-start px-2 py-1 '>{item?.date}</td>
                                            <td className='text-start px-2 py-1'>
                                                {typeof item?.status === 'object' ? (
                                                    <select name="" id="" className='border'>
                                                        <>
                                                            <option value="active" className='capitalize'>{item?.status.active}</option>
                                                            <option value="deactive" className='capitalize'>{item?.status.unactive}</option>
                                                        </>
                                                    </select>
                                                ) : null}
                                            </td>
                                        </>
                                    }
                                    {
                                        dataName === "onGoing" &&
                                        <>

                                            <td className='text-start px-2 py-1 '>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.order_no}</td>
                                            <td className='text-start px-2 py-1 '>{item?.service}</td>
                                            <td className='text-start px-2 py-1 '>{item?.name}</td>
                                            <td className='text-start px-2 py-1 '>{item?.email}</td>
                                            <td className='text-start px-2 py-1 '>{item?.word}</td>
                                            <td className='text-start px-2 py-1 '>{item?.date}</td>
                                        </>
                                    }
                                    {
                                        dataName === 'completed' &&
                                        <>
                                            <td className='text-start px-2 py-1 '>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.order_no}</td>
                                            <td className='text-start px-2 py-1 '>{item?.service}</td>
                                            <td className='text-start px-2 py-1 underline'>
                                                <Link href="#">
                                                    {item?.name}
                                                </Link>
                                            </td>
                                            <td className='text-start px-2 py-1 '>{item?.email}</td>
                                            <td className='text-start px-2 py-1 '>{item?.word}</td>
                                            <td className='text-start px-2 py-1 '>{item?.date}</td>
                                            <td className='text-start px-2 py-1'>
                                                <Button text={"view"} />
                                            </td>
                                        </>
                                    }
                                    {
                                        dataName === "pending" &&
                                        <>
                                            <td className='text-start px-2 py-1 '>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.order_no}</td>
                                            <td className='text-start px-2 py-1 '>{item?.service}</td>
                                            <td className='text-start px-2 py-1 underline'>
                                                <Link href="#">
                                                    {item?.name}
                                                </Link>
                                            </td>
                                            <td className='text-start px-2 py-1 '>{item?.email}</td>
                                            <td className='text-start px-2 py-1 '>{item?.word}</td>
                                            <td className='text-start px-2 py-1 '>{item?.date}</td>
                                        </>
                                    }

                                    {
                                        dataName === "prewrittenBooks" &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.no}</td>
                                            <td className='text-start px-2 py-1 '>{item?.category}</td>
                                            <td className='text-start px-2 py-1 '>{item?.title}</td>
                                            <td className='text-start px-2 py-1 '>{item?.subTitle}</td>
                                            <td className='text-start px-2 py-1 '>{item?.word}</td>
                                            <td className='text-start px-2 py-1 '>{item?.amount}</td>
                                            <td className='text-start px-2 py-1 '>{item?.purchased}</td>
                                            <td className='text-start px-2 py-1 '>{item?.status}</td>
                                            <td className='px-2 py-1 text-center gap-x-2 flex capitalize '>
                                                <Button text={"edit"} className='mb-4' buttonHandle={() => handleEdit?.(item.id)}
                                                />
                                                <Button text={"delete"} buttonHandle={() => handleDelete?.(item.id)}
                                                />
                                            </td>
                                        </>
                                    }
                                    {
                                        dataName === "prewritten" &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.title}</td>
                                            <td className='px-2 py-1 text-center gap-x-2 flex capitalize '>
                                                <Button text={"edit"} buttonHandle={() => handleEdit?.(item.id)}
                                                />
                                                <Button text={"delete"} buttonHandle={() => handleDelete?.(item.id)}
                                                />
                                            </td>
                                        </>
                                    }
                                    {
                                        dataName === "affilate" &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.name}</td>
                                            <td className='text-start px-2 py-1 '>{item?.email}</td>
                                            <td className='text-start px-2 py-1 '>{item?.date}</td>
                                            <td className='text-start px-2 py-1 '>
                                                <Button text={"payments"} />
                                            </td>
                                        </>
                                    }
                                    {
                                        dataName === "offers" &&
                                        (
                                            <>
                                                <td className='text-start px-2 py-1'>{item?.id_}</td>
                                                <td className='text-start px-2 py-1 '>{item?.title}</td>
                                                <td className='text-start px-2 py-1'>{item?.words}</td>
                                                <td className='text-start px-2 py-1'>{item?.amount}</td>
                                                <td className='text-start px-2 py-1'>{item?.amount_total}</td>
                                                <td className='text-start px-2 py-1'>{item?.installments_month}</td>
                                                <td className='px-2 py-1 text-center gap-x-2 flex capitalize '>
                                                    <Button text={"edit"} buttonHandle={() => handleEdit?.(item.id)}
                                                    />
                                                    <Button text={"delete"} buttonHandle={() => handleDelete?.(item.id)}
                                                    />
                                                </td>

                                            </>
                                        )
                                    }
                                    {
                                        dataName === "payments" &&
                                        (
                                            <>
                                                <td className='text-start px-2 py-1'>{item?.no}</td>
                                                <td className='text-start px-2 py-1 '>{item?.title}</td>
                                                <td className='text-start px-2 py-1'>{item?.userType}</td>
                                                <td className='text-start px-2 py-1'>{item?.payType}</td>
                                                <td className='text-start px-2 py-1'>{item?.amount}</td>
                                                <td className='text-start px-2 py-1'>{item?.payStatus}</td>
                                                <td className='text-start px-2 py-1'>{item?.date}</td>

                                            </>
                                        )
                                    }
                                    {
                                        dataName === 'faqs' &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.question}</td>
                                            <td className='text-start px-2 py-1'>{item?.answer}</td>
                                            <td className='text-start px-2 py-1 '>{item?.status === 0 ? "deactive" : "active"}</td>
                                            <td className='text-start px-2 py-1'>{item?.date}</td>
                                            <td className='px-2 py-1 text-center gap-x-2 flex capitalize '>
                                                <Button text={"edit"} buttonHandle={() => handleEdit?.(item.id)}
                                                />
                                                <Button text={"delete"} buttonHandle={() => handleDelete?.(item.id)}
                                                />
                                            </td>
                                        </>
                                    }

                                    {
                                        (dataName === 'refunded' || dataName === "ongoinProject" || dataName === 'delivered') &&
                                        <>
                                            <td className='text-start px-2 py-1'>{item?.id_}</td>
                                            <td className='text-start px-2 py-1 '>{item?.order_no}</td>
                                            <td className='text-start px-2 py-1'>{item?.service}</td>
                                            <td className='text-start px-2 py-1'>{item?.client}</td>
                                            <td className='text-start px-2 py-1'>{item?.title}</td>
                                            <td className='text-start px-2 py-1'>{item?.word}</td>
                                            <td className='text-start px-2 py-1'>{item?.date}</td>
                                            <td className='text-start px-2 py-1'>
                                                {item?.status === 2 ? (
                                                    <select name="" id="" className='border'>
                                                        {
                                                            dataName === 'refunded' ?
                                                                <>
                                                                    <option value="active" className='capitalize'>Refunded</option>
                                                                </> :
                                                                <>
                                                                    <option value="active" className='capitalize' >Pending</option>
                                                                    <option value="deactive" className='capitalize'>Delivered</option>

                                                                </>
                                                        }
                                                    </select>
                                                ) : null}
                                            </td>
                                            <td className='text-start px-2 py-1'>
                                                <Button text={'view'} />
                                            </td>
                                        </>
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='w-full p-1 text-sm flex justify-between items-center'>
                <div>
                    <span>showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, (sortedData()?.length || 0))} of {sortedData()?.length} entries</span>
                </div>
                <div className='flex gap-x-2'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className='border bg-gray-300 px-4 py-1'>{currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Table;
