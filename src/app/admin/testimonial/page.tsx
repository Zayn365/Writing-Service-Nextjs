import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import OtherTable from '@/components/admin/OtherTable'
import Textarea from '@/components/admin/Textarea'
import React from 'react'

const page = () => {
    const testimonialHead = ["#", "Title", "detail", " "]
    const testimonialBody = [
        { no: "1", title: "Bradley Turner", detail: "I would like to pass on my thanks to the whole team at Write Articles For Me, the whole process was great - from writing the book, formatting the book for both kindle and paperback and the book cover design, all at a competitive and value for money price. I was kept informed through the whole process and my suggestions were taken on board. I look forward to using the team again for the next project!", status: 'delete' },
        { no: "2", title: "Bradley Turner", detail: "I would like to pass on my thanks to the whole team at Write Articles For Me, the whole process was great - from writing the book, formatting the book for both kindle and paperback and the book cover design, all at a competitive and value for money price. I was kept informed through the whole process and my suggestions were taken on board. I look forward to using the team again for the next project!", status: 'delete' },
        { no: "3", title: "Bradley Turner", detail: "I would like to pass on my thanks to the whole team at Write Articles For Me, the whole process was great - from writing the book, formatting the book for both kindle and paperback and the book cover design, all at a competitive and value for money price. I was kept informed through the whole process and my suggestions were taken on board. I look forward to using the team again for the next project!", status: 'delete' },
    ]
    return (

        <div>
            <Header text={"Add Testimonial"} />
            <div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        client Name
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' id='title' name='title' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Detail
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>

                    </span>
                    <div className='w-1/2'>
                        <Button text={"add testimonal"} className='bg-blue-800 text-white capitalize  mb-4' />
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-400 my-2'></div>
            <OtherTable body={testimonialBody} headTable={testimonialHead} dataName='testimonial' />

        </div>
    )
}

export default page