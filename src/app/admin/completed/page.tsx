'use client'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { completedBody, completedHead } from '@/constants/complated'
import UseFetchData from '@/hooks/UseFetchData'
import { Axios } from '@/utils/Axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const { data, error, loading } = UseFetchData("/api/orders");


  if (data) {
    console.log(data)
  }

  return (
    <div className='w-full'>
      <Header text={"Orders Listing"} />

      <Table headTable={completedHead} body={completedBody} dataName='completed' />
    </div>
  )
}

export default page