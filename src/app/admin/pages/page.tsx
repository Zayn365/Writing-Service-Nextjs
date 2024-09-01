import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import OtherTable from '@/components/admin/OtherTable'
import React from 'react'

const page = () => {
    const pagesHead = ["#", "page Name", "page slug", "parent item", "page order", "page Status", ""]
    const pagesBody = [
        { no: "1", name: "home", slug: "home", item: "root", order: "1", status: true, view: { edit: "edit", delete: "delete" } },
        { no: "2", name: "home", slug: "home", item: "root", order: "1", status: false, view: { edit: "edit", delete: "delete" } }
    ]

    return (
        <div className='w-full'>
            <Header text={"Pages Listing"} />
            <div className="my-4 flex justify-end items-center gap-x-4">
                <Button text={"add new page"} className='mb-4' />
            </div>
            <OtherTable headTable={pagesHead} dataName='page' />
        </div>
    )
}

export default page
