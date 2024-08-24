import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import Table from '@/components/admin/Table';
import React from 'react'

const page = () => {
    const headOngoingProject = [
        "#", "order No", "service", "client Name", "article Title", "word", "order Date", "status", ""
    ]
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
            <Table headTable={headOngoingProject} body={bodyOngoingProject} dataName='ongoinProject' />
        </div>
    );
};

export default page
