'use client'
import InputField from '@/components/admin/InputField'
import { homeItem } from '@/constants/adminItem'
import UseFetchData from '@/hooks/UseFetchData'
import React, { useEffect, useState } from 'react'

const Page = () => {
  // const value = ["5339", "3403", "234", "8392", "3847", "3289", "7384", "8203"]
  const { data, error, loading } = UseFetchData('/api/orders');
  const { data: userData, } = UseFetchData('/api/user');
  const [user, setUser] = useState(0);

  const [order, setOrder] = useState(0);
  const [pending, setPending] = useState(0);
  const [paid, setPaid] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [TotalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const filteredData = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2 && (item.affiliate_amount !== null || undefined) && item.affiliate_amount_paid === 1);
    setOrder(filteredData.length)
    const filteredDelivered = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2 && (item.affiliate_amount !== null || undefined) && item.affiliate_amount_paid === 1);
    setDelivered(filteredDelivered.length)
    const filteredComplated = data.filter((item) => item.total_amount > 0 && item.original_amount > 0 && item.status === 2);
    setPaid(filteredComplated.length)
    const filteredPending = data.filter((item) => item.total_amount > 0 && item.original_amount > 0);
    setPending(filteredPending.length)
    // const filterUser = data.((item) => item.total_amount > 0 && item.original_amount > 0);
    setUser(userData.length)
    const totalAmount = data.reduce((sum, item) => {
      const amount = parseFloat(item.total_amount) || 0;
      return amount > 0 ? sum + amount : sum;
    }, 0);

    const totalSubtractedAmount = data.reduce((sum, item) => {
      const amount = parseFloat(item.total_amount) || 0;
      return amount < 0 ? sum - amount : sum;
    }, 0);

    // Log totals
    console.log('Total Amount:', totalAmount);
    console.log('Total Subtracted Amount:', totalSubtractedAmount);
    setTotalCost(Number(totalAmount) - Number(totalSubtractedAmount))

  }, [data])

  // if (userData) {
  //   console.log(userData)
  // }

  const value = [user, order, pending, paid, delivered, "3289", "7384", "8203"]

  if (data) {
    // console.log(data)
    // const dataFind = data.find((item) => item.order_no === "3248710L8C119W1H")
    // console.log(dataFind)
    // const dataFindsec = data.find((item) => item.order_no === "23F06WOA6097")
    // console.log(dataFindsec)
    // const dataFindthird = data.find((item) => item.order_no === "147103712CAN119K")
    // console.log(dataFindthird)
    // const dataFindfroth = data.find((item) => item.order_no === "9W6PE08U002")
    // console.log(dataFindfroth)
    // const dataFindfivth = data.find((item) => item.order_no === "95439818YPJK01")
    // console.log(dataFindfivth)
    // const dataFindSixth = data.find((item) => item.order_no === "99N7T914J004P")
    // console.log(dataFindSixth)
    // const dataFindseventh = data.find((item) => item.order_no === "2132N16WLG501980")
    // console.log(dataFindseventh)

  }

  return (
    <div className='w-full'>
      <div className="w-full p-2 mb-2 capitalize border-black border bg-orange-700 font-semibold text-center text-white text-lg">Welcome to Admin</div>
      <div className="flex  justify-center items-center border">
        <div className='w-1/2  text-lg p-[1px]'>
          {
            homeItem?.map((item: any, index: any) => (
              <div className='p-[2px]' key={index}>
                <div className='w-full bg-orange-700 text-white text-start text-lg p-1 border-black border' key={index}>{item}</div>
              </div>
            ))
          }
        </div>
        <div className='w-1/2 flex flex-col  gap-y-[0.30rem] justify-center items-end'>
          {
            value.map((item: any, index: any) => (
              <div className='w-full text-black text-end text-lg p-1 border' key={index}>{item}</div>
            ))
          }
          <span className='text-black text-end text-lg p-1 border w-full'>${TotalCost}</span>
          <div className="flex justify-between gap-x-1 p-1 border items-center w-full">
            <InputField type='text' className='w-full border p-1 border-black' />
            <div className='flex gap-x-2'>
              <input type="checkbox" name="" id="" />
              <span className='text-xl uppercase gap-x-1 bg-blue-800 text-white rounded font-bold p-[3px]'>update</span>
            </div>
          </div>
          <select className='text-black border rounded p-1  border-black'>
            <option value="">select payment method</option>
            <option value="bank">bank</option>
            <option value="paypal">paypal</option>
            <option value="3g">3g</option>

          </select>
        </div>
      </div>
    </div>
  )
}

export default Page
