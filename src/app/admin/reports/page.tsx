import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import React from 'react'

const page = () => {
    const section1 = ["Orders", "Words", "Amount"]
    return (
        <div className='w-full'>
            <div className='w-full flex justify-center items-center gap-x-4 my-4'>
                <InputField type='text' placeholder='Start Date' />
                <InputField type='text' placeholder='End Date' />
                <Button text={"fitler"} />
            </div>
            <Header text={"Project Ordered (Delivered & Ongoing)"} />
            <div className="my-4">
                <div className='w-full flex justify-between items-center'>
                    {
                        section1.map((item: any, index: any) => (
                            <div key={index} className='w-full bg-orange-700 py-1 border-black/50 border text-white px-1'>Total {item}</div>
                        ))
                    }
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-full border-black/50 border p-1'><span>3550</span></div>
                    <div className='w-full border-black/50 border p-1'><span>19,1919,245</span></div>
                    <div className='w-full border-black/50 border p-1'><span>0273,375,29</span></div>
                </div>
            </div>
            <Header text={"Project Delivered"} />
            <div className="my-4">
                <div className='w-full flex justify-between items-center'>
                    {
                        section1.map((item: any, index: any) => (
                            <div key={index} className='w-full bg-orange-700 py-1 border-black/50 border text-white px-1'>Total {item}</div>
                        ))
                    }
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-full border-black/50 border p-1'><span>3550</span></div>
                    <div className='w-full border-black/50 border p-1'><span>19,1919,245</span></div>
                    <div className='w-full border-black/50 border p-1'><span>0273,375,29</span></div>
                </div>
            </div>
            <Header text={"Project Ongoing"} />
            <div className="my-4">
                <div className='w-full flex justify-between items-center'>
                    {
                        section1.map((item: any, index: any) => (
                            <div key={index} className='w-full bg-orange-700 py-1 border-black/50 border text-white px-1'>Total {item}</div>
                        ))
                    }
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='w-full border-black/50 border p-1'><span>3550</span></div>
                    <div className='w-full border-black/50 border p-1'><span>19,1919,245</span></div>
                    <div className='w-full border-black/50 border p-1'><span>0273,375,29</span></div>
                </div>
            </div>
        </div>
    )
}

export default page