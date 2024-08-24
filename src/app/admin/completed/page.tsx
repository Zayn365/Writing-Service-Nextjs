import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import React from 'react'

const page = () => {
  const completedHead = ["#", "Order no.", "service", "Name", "Email", 'words', "order Date", "Status"];
  const completedBody = [
    { no: "1", orderNo: "8FL80120NG6", service: "Ebook Writing Service", name: "WK client", email: "abc@gmail.com", word: '400', date: "04-9-2015 06:35:45", status: "view" },
    { no: "2", orderNo: "9W6PE08U002", service: "", name: "Dsuyladj", email: "sdhf@gmail.com", word: '500', date: "04-9-2015 06:35:45", status: "view" }
  ];

  return (
    <div className='w-full'>
      <Header text={"Orders Listing"} />

      <Table headTable={completedHead} body={completedBody} dataName='completed' />
    </div>
  )
}

export default page