import { menuLink1, menuLink2, menuLink3, menuLink4 } from "@/constants/adminmenu"
import Link from "next/link"
import NextTopLoader from 'nextjs-toploader';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <section className="container mx-auto gap-x-2 flex justify-between items-start">
            <div className="w-1/3">
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

            <div className="w-10/12">
                <NextTopLoader color="#f57c00 " />
                {children}
            </div>

        </section>
    )
}