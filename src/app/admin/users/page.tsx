'use client'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import UseFetchData from '@/hooks/UseFetchData'
import ToastProvider from '@/utils/Toast'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const userHeadTable = ["#", "Name", "Email", "user's type", "affiliation", "Date Reg", "Status"]
    const { data, error, loading } = UseFetchData('/api/affilateUsers');
    const [userData, setUserData] = useState([])
    useEffect(() => {
        if (data) {
            setUserData(data)
            console.log(data)
        }
    }, [data]);

    const userBodyTable = [
        { no: "1", name: "WK client", email: "abc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "2", name: "vnbol", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "3", name: "qpazx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "4", name: "xsx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "5", name: "poez", email: "kkergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "6", name: "lopq", email: "mlergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "7", name: "rtivo", email: "porgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "8", name: "pkvpi", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "9", name: "nmbo", email: "lorgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "10", name: "jflk", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "11", name: "ncojal", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "12", name: "liopc", email: "wqergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "13", name: "vpclient", email: "efergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "14", name: "voclient", email: "sergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "15", name: "koolient", email: "uergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "1", name: "WK client", email: "abc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "2", name: "vnbol", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "3", name: "qpazx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "4", name: "xsx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "5", name: "poez", email: "kkergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "6", name: "lopq", email: "mlergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "7", name: "rtivo", email: "porgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "8", name: "pkvpi", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "9", name: "nmbo", email: "lorgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "10", name: "jflk", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "11", name: "ncojal", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "12", name: "liopc", email: "wqergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "13", name: "vpclient", email: "efergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "14", name: "voclient", email: "sergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "15", name: "koolient", email: "uergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "1", name: "WK client", email: "abc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "2", name: "vnbol", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "3", name: "qpazx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "4", name: "xsx", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "5", name: "poez", email: "kkergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "6", name: "lopq", email: "mlergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "7", name: "rtivo", email: "porgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "8", name: "pkvpi", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "9", name: "nmbo", email: "lorgabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "10", name: "jflk", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "11", name: "ncojal", email: "gergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "12", name: "liopc", email: "wqergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "13", name: "vpclient", email: "efergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "14", name: "voclient", email: "sergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },
        { no: "15", name: "koolient", email: "uergabc@gmail.com", type: "admin", id: "Mark as Paid", date: "04-9-2015 06:35:45", status: { active: 'active', unactive: "de-active" } },

    ]

    return (
        <div className='w-full'>
            <ToastProvider />

            <Header text={"Users Listing"} />
            <Table headTable={userHeadTable} body={userData} dataName={"user"} loading={loading} />
        </div>
    )
}

export default Page