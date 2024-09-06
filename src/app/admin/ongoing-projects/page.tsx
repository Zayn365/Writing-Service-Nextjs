'use client'
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import UseFetchData from '@/hooks/UseFetchData';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const { data, error, loading } = UseFetchData("/api/orders");
    const { data: projectsData, error: projectsError, loading: projectsLoading } = UseFetchData("/api/projects");

    const [combinedData, setCombinedData] = useState([]);
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    const headOngoingProject = [
        "#", "order No", "service", "client Name", "article Title", "word", "order Date", "status", ""
    ];

    const handleMinDateChange = (e) => {
        setMinDate(e.target.value);
    };

    const handleMaxDateChange = (e) => {
        setMaxDate(e.target.value);
    };

    useEffect(() => {
        if (data && projectsData) {
            let filteredData = data
                .filter(order =>
                    order.total_amount > 0 &&
                    order.original_amount > 0 &&
                    order.status === 2 &&
                    order.affiliate_amount != null &&
                    order.affiliate_amount_paid === 1
                );

            if (minDate) {
                filteredData = filteredData.filter(order => new Date(order.orderDate) >= new Date(minDate));
            }

            if (maxDate) {
                filteredData = filteredData.filter(order => new Date(order.orderDate) <= new Date(maxDate));
            }

            const combined = filteredData
                .map(order => {
                    const project = projectsData.find(p => p.id === order.id || p.id_ === order.id_);
                    return project ? { ...order, ...project } : null;
                })
                .filter(item => item != null);

            setCombinedData(combined);
        }
    }, [data, projectsData, minDate, maxDate]);

    return (
        <div className='w-full'>
            <Header text={"Ongoing Articles Listing"} />
            <div className="w-full flex justify-start items-start gap-x-2 my-4">
                <div>
                    <span>Minimum Date:</span>
                    <InputField type='date' value={minDate} handleChange={handleMinDateChange} />
                </div>
                <div>
                    <span>Maximum Date:</span>
                    <InputField type='date' value={maxDate} handleChange={handleMaxDateChange} />
                </div>
            </div>
            <Table loading={loading} headTable={headOngoingProject} body={combinedData} dataName='ongoingProject' />
        </div>
    );
};

export default Page;
