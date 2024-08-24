import React from 'react'

const Header = ({ text }: any) => {
    return (
        <div className="w-full p-2 mb-2 capitalize border-black border bg-orange-700  text-center text-white text-lg">{text}</div>
    )
}

export default Header