import React from 'react'

const Sort = ({ setSortNumber }: any) => {
    const sorthandle = (e: any) => {
        setSortNumber(e.target.value)
    }
    return (
        <div className='w-full flex gap-x-1 justify-start items-start'>
            <span>Show</span>
            <select onChange={sorthandle} name="" id="" className='border'>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>

            </select>
            <span>entries</span>
        </div>
    )
}

export default Sort