import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import InputField from '@/components/admin/InputField'
import OtherTable from '@/components/admin/OtherTable'
import Textarea from '@/components/admin/Textarea'
import React from 'react'

const page = () => {
    const seoHead = ["#", "Title", "URL", "keywords", "description", " "]
    const seoBody = [
        { no: "1", title: "Home | Write Articles For Me", url: "writearticlesforme.com", keyword: "SEO Article Writing Services, UAW Article Writing Services, Product Description Articles, Spintax Articles, Article Rewriting Services, Article Writing Services, Business Article Writing Services, Non-Fiction E-book Writing Services, Website content", des: "Get high quality articles and books written", view: { edit: "edit", delete: "delete" } },
        { no: "2", title: "Home | Write Articles For Me", url: "writearticlesforme.com", keyword: "SEO Article Writing Services, UAW Article Writing Services, Product Description Articles, Spintax Articles, Article Rewriting Services, Article Writing Services, Business Article Writing Services, Non-Fiction E-book Writing Services, Website content", des: "Get high quality articles and books written", view: { edit: "edit", delete: "delete" } },
        { no: "3", title: "Home | Write Articles For Me", url: "writearticlesforme.com", keyword: "SEO Article Writing Services, UAW Article Writing Services, Product Description Articles, Spintax Articles, Article Rewriting Services, Article Writing Services, Business Article Writing Services, Non-Fiction E-book Writing Services, Website content", des: "Get high quality articles and books written", view: { edit: "edit", delete: "delete" } }

    ]
    return (

        <div>
            <Header text={"Add SEO Details"} />
            <div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        page title
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' id='title' name='title' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        page URL
                    </span>
                    <div className='w-1/2'>
                        <InputField type='text' id='title' name='title' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Meta Keywords
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>
                        Meta Descriptions
                    </span>
                    <div className='w-1/2'>
                        <Textarea className='w-full' />
                    </div>
                </div>
                <div className='flex just'>
                    <span className='w-1/3 capitalize'>

                    </span>
                    <div className='w-1/2'>
                        <Button text={"add seo Detail"} className='bg-blue-800 text-white capitalize  mb-4' />
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-400 my-2'></div>
            <OtherTable body={seoBody} headTable={seoHead} dataName='seo' />

        </div>
    )
}

export default page