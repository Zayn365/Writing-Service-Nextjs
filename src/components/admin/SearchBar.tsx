import React from 'react'

const SearchBar = ({ setSearch }: any) => {
    const searchHandle = (e: any) => {
        setSearch(e.target.value)
    }
    return (
        <div className='w-full flex justify-end items-center gap-x-1 '>
            <span>Search:</span>
            <input onChange={searchHandle} type="search" name="" id="" className='outline-none border border-black px-1' />
        </div>
    )
}

export default SearchBar