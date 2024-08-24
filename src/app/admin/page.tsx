import Button from '@/components/admin/Button';
import Header from '@/components/admin/Header';
import InputField from '@/components/admin/InputField';
import { articleDetails } from '@/constants/articleDetails';
import React from 'react';

const ArticleDetailsPage = () => {


  return (
    <div className='w-full'>
      <Header text={"Article Details"} />
      <div className="w-full flex flex-col gap-y-4 my-4">
        {articleDetails.map((item, index) => (
          <div key={index} className="flex gap-x-2">
            <div className="font-semibold w-1/3">{item.key}:</div>
            <div className="w-2/3">{item.value}</div>
          </div>
        ))}
        <div className='flex gap-x-2 mt-4'>
          <div className="font-semibold w-1/3">Written By</div>
          <div className="w-2/3 flex gap-x-2">
            <InputField type="text" placeholder="Enter new value" />
            <Button text="Update" />
          </div>
        </div>
      </div>
      <Header text={"Article Conversation"} />
      <div className="flex  p-2 justify-between items-start gap-x-2">
        <div className='w-10/12  flex flex-col'>
          <div className="flex w-full pb-3  gap-x-2 border-b-2 border-gray-500 ">
            <Button text="client comments" />
            <Button text="admin comments" />
            <Button text="Writer comments" />
          </div>

        </div>
        <div className='w-1/3 flex flex-col gap-y-4 '>
          <InputField type='file' />
          <Button text="Writer comments" className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
