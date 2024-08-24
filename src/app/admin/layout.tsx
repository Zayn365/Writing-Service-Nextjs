'use client'
import { menuLink1, menuLink2, menuLink3, menuLink4 } from "@/constants/adminmenu"
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link"
import NextTopLoader from 'nextjs-toploader';
import { useState } from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <section className=" container mx-auto gap-x-2 flex md:flex-row flex-col justify-between items-start md:gap-4 gap-y-4">
            <div onClick={handleMenu} className="bg-orange-700 cursor-pointer w-full md:hidden  text-white rounded-md py-2 px-5 flex justify-between items-center">
                <span>Menu</span>
                <ArrowDownIcon className='text-white h-[15px] w-[15px]'
                />
            </div>

            <div className={`md:w-1/3 md:block ${openMenu ? "w-full" : "hidden"} `}>
                <div className="text-white p-2 mb-2 capitalize border-black border bg-orange-700 font-semibold text-center">
                    Users Section
                </div>
                <nav className="w-full flex flex-col justify-center items-center">
                    {
                        menuLink1.map((item: any, index: any) => (
                            <Link className="text-start text-white capitalize w-full p-2 mb-2  bg-orange-700 hover:bg-blue-900" key={index} href={`admin/${item.url}`}>{item.name}</Link>
                        ))
                    }
                </nav>
                <div className="text-white p-2 mb-2 capitalize border-black border bg-orange-700 font-semibold text-center">
                    Services Section
                </div>
                <nav className="w-full flex flex-col justify-center items-center">
                    {
                        menuLink2.map((item: any, index: any) => (
                            <Link className="text-start text-white capitalize w-full p-2 mb-2  bg-orange-700 hover:bg-blue-900" key={index} href={`admin/${item.url}`}>{item.name}</Link>
                        ))
                    }
                </nav>
                <div className="text-white p-2 mb-2 capitalize border-black border bg-orange-700 font-semibold text-center">
                    Offers Section
                </div>
                <nav className="w-full flex flex-col justify-center items-center">
                    {
                        menuLink3.map((item: any, index: any) => (
                            <Link className="text-start text-white capitalize w-full p-2 mb-2  bg-orange-700 hover:bg-blue-900" key={index} href={`admin/${item.url}`}>{item.name}</Link>
                        ))
                    }
                </nav>
                <div className="text-white p-2 mb-2 capitalize border-black border bg-orange-700 font-semibold text-center">
                    Other Section
                </div>
                <nav className="w-full flex flex-col justify-center items-center">
                    {
                        menuLink4.map((item: any, index: any) => (
                            <Link className="text-start text-white capitalize w-full p-2 mb-2  bg-orange-700 hover:bg-blue-900" key={index} href={`admin/${item.url}`}>{item.name}</Link>
                        ))
                    }
                </nav>
            </div>

            <div className="w-full md:w-10/12 overflow-hidden">
                <NextTopLoader color="#f57c00 " />
                {children}
            </div>

        </section>
    )
}