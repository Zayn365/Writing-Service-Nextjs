'use client';
import { useRouter } from "next/navigation";
import Button from '@/components/admin/Button';
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import { useEffect, useState } from "react";
import UseFetchData from "@/hooks/UseFetchData";
import Comments from "@/components/admin/Comments";

const Page = () => {
    const router = useRouter();
    const [queryId, setQueryId] = useState(null);
    const { data: projectsData, error: projectsError, loading: projectsLoading } = UseFetchData("/api/projects");
    const [data, setData] = useState([]);
    const [articleDetailsData, setArticleDetailsData] = useState([]);
    const [selectedRole, setSelectedRole] = useState('client');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            setQueryId(urlParams.get('id'));
        }
    }, []);

    useEffect(() => {
        if (projectsData && queryId) {
            const filterData = projectsData.filter((item) => item.id_ === Number(queryId));
            setData(filterData);
        }
    }, [projectsData, queryId]);

    useEffect(() => {
        if (data.length) {
            const filterData = data.filter((item) => item.id_ === Number(queryId));
            setArticleDetailsData(filterData);
        }
    }, [data, queryId]);

    const handleDownload = () => {
        console.log('Download clicked');
    };

    const handleRoleChange = (role) => {
        setSelectedRole(role);
    };

    if (!articleDetailsData.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full'>
            <Header text={"User Articles Requested - Ebook Writing Service"} />
            <div className='border rounded-lg bg-light-blue-800 p-2 mb-4'>
                <p className='font-semibold text-white text-wrap'>
                    {articleDetailsData[0]?.project_title} <span> </span>
                    words{articleDetailsData[0]?.milestone}
                </p>
            </div>
            <p className=' text-wrap'>
                {articleDetailsData[0]?.special_instructions} <span> </span>
            </p>
            <div className="w-full pb-3 border-b-2 border-gray-500" />

            <div className="flex p-2 justify-between items-start gap-x-2">
                <div className='w-10/12 flex flex-col'>
                    <div className="flex w-full pb-3 gap-x-2 border-b-2 border-gray-500">
                        <Button text="Client Comments" buttonHandle={() => handleRoleChange('client')} />
                        <Button text="Writer/Editor Comments" buttonHandle={() => handleRoleChange('writer')} />
                    </div>
                    <div className="w-full flex flex-col gap-y-2 my-2">
                        {
                            articleDetailsData.map((item) => {
                                let comment = '';
                                if (selectedRole === 'client') {
                                    comment = item.coments_about_writer || '';
                                } else if (selectedRole === 'writer') {
                                    comment = item.coments_about_editor || '';
                                }

                                return (
                                    <Comments
                                        key={item.id}
                                        author={selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                                        date={item.created_date}
                                        attachmentName={comment}
                                        onDownload={handleDownload}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-y-4 '>
                    <InputField type='file' />
                    <Button text="Submit Comment" className='w-full' />
                </div>
            </div>
        </div>
    );
}

export default Page;
