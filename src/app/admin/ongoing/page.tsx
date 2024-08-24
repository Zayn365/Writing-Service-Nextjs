import React from 'react';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';

const Page = () => {
    const onGoingHead = ["#", "Order No.", "Service", "Name", "Email", "Words", "Order date"];
    const onGoingBody = [
        { year: "2007", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "190", date: "04-9-2015" },
        { year: "2009", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "023", date: "04-9-2015" },
        { year: "2019", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "501", date: "04-9-2015" },
        { year: "2020", order: '3248710L8C119W1H', service: " ", name: "henry", email: "successyousee@gmail.com", word: "150", date: "04-9-2015" },
    ];

    return (
        <div className='w-full'>
            <Header text={"Ongoing Orders Listing"} />
            <Table headTable={onGoingHead} body={onGoingBody} dataName='onGoing' />
        </div>
    );
};

export default Page;
