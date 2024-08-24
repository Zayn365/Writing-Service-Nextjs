import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import Textarea from '@/components/admin/Textarea'
import { faqsBody, faqsHead } from '@/constants/faq'
import React from 'react'

const page = () => {

  return (
    <div>
      <Header text={"Add new Faqs"} />
      <div className='w-full  flex justify-start gap-3 my-4'>
        <Textarea placeholder='Question' className='w-1/2' />
        <Textarea placeholder='Answer' className='w-1/2' />
      </div>
      <div className='flex justify-start items-center gap-2'>
        <span>Enable</span>
        <input type="checkbox" name="" id="" />
      </div>
      <Button text={"add"} className='  mb-4' />
      <Header text={"Faqs Listing"} />
      <Table headTable={faqsHead} body={faqsBody} dataName='faqs' />
    </div>
  )
}

export default page
