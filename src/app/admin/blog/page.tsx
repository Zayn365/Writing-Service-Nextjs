import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { blogBody, blogHead } from '@/constants/blog'
import React from 'react'

const page = () => {

  return (
    <div className='w-full'>
      <Header text={"Blog Posts"} />
      <div className="my-4 flex justify-end items-center gap-x-4">
        <Button text={"Notify Users"} className='mb-4' />
        <Button text={"add New post"} className='mb-4' />
        <Button text={"add categories"} className='mb-4' />
      </div>
      <Table headTable={blogHead} body={blogBody} />
    </div>
  )
}

export default page
