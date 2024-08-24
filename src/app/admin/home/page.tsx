import InputField from '@/components/admin/InputField'
import { homeItem } from '@/constants/adminItem'
import React from 'react'

const page = () => {
  const value = ["5339", "3403", "234", "8392", "3847", "3289", "7384", "8203"]
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
          <span className='text-black text-end text-lg p-1 border w-full'>$488,214.14</span>
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

export default page
