'use client'
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import UseFetchData from '@/hooks/UseFetchData';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const headOngoingProject = [
        "#", "order No", "service", "client Name", "article Title", "word", "order Date", "status", ""
    ]

    const { data, error, loading } = UseFetchData("/api/orders");
    const [onProjectData, setOnProjectData] = useState([])


    useEffect(() => {
        if (data) {
            const filteredData = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2 && (item.affiliate_amount !== null || undefined) && item.affiliate_amount_paid === 1);
            setOnProjectData(filteredData);
        }
    }, [data]);

    const bodyOngoingProject = [
        { no: "1", cancel: "order cancelled", service: "", client: "Deniel", title: "skajf02ixv ji uisd ufisahifhsaoifjdsoifjdsakfjds", word: "4000", date: "01-01-1790", status: { delivered: "Delivered", pending: 'pending' }, view: "view" },
        { no: "2", cancel: "order cancelled", service: "", client: "michael", title: "skajf02ixv ji uisd ufisahifhsaoifjdsoifjdsakfjds", word: "2000", date: "01-01-1790", status: { delivered: "Delivered", pending: 'pending' }, view: "view" },
        { no: "3", cancel: "order cancelled", service: "", client: "Deniel", title: "skajf02ixv ji uisd ufisahifhsaoifjdsoifjdsakfjds", word: "9000", date: "01-01-1790", status: { delivered: "Delivered", pending: 'pending' }, view: "view" },
    ]

    return (
        <div className='w-full'>
            <Header text={"Ongoing Articles Listing"} />
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
            <Table headTable={headOngoingProject} body={onProjectData} dataName='ongoinProject' />
        </div>
    );
};

export default Page
