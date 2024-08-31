'use client';

import Button from '@/components/admin/Button';
import Header from '@/components/admin/Header';
import Table from '@/components/admin/Table';
import Textarea from '@/components/admin/Textarea';
import { faqsHead, faqsBody } from '@/constants/faq';
import { DeleteData } from '@/hooks/DeleteData';
import { postData } from '@/hooks/PostData';
import UseFetchData from '@/hooks/UseFetchData';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const { data, error, loading } = UseFetchData("/api/faqs");
  const [nextId, setNextId] = useState<number>(1);
  const [faq, setFaq] = useState({
    answer: "",
    date: "",
    id_: 0,
    question: "",
    status: 1,
  });

  if (data) {
    console.log(data)
  }

  // useEffect(() => {
  //   if (data && data?.length > 0) {
  //     const maxId = Math?.max(...data?.map((item: any) => item?.id_));
  //     setNextId(maxId + 1);
  //   }
  // }, [data]);

  const handlePost = async () => {
    try {
      const result = await postData({ endpoint: 'api/faqs', data: { ...faq, date: new Date().toISOString(), id_: nextId } });
      console.log('FAQ created:', result);
      if (result) {
        setFaq({
          question: "",
          answer: "",
          status: 0,
          date: "",
          id_: nextId + 1
        });
        setNextId(nextId + 1);
      }
    } catch (error) {
      console.error('Error posting FAQ:', error);
    }
  };


  const handleTextChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFaq(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }));
  };


  const handleDelete = async (id: string) => {
    try {
      const result = await DeleteData(id);
      console.log('FAQ deleted:', result);
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };


  return (
    <div>
      <Header text={"Add new Faqs"} />
      <div className='w-full flex justify-start gap-3 my-4'>
        <Textarea
          placeholder='Question'
          className='w-1/2'
          name='question'
          value={faq.question}
          handleChange={handleTextChange}
        />
        <Textarea
          placeholder='Answer'
          className='w-1/2'
          name='answer'
          value={faq.answer}
          handleChange={handleTextChange}
        />
      </div>
      <div className='flex justify-start items-center gap-2'>
        <span>Enable</span>
        <input
          type="checkbox"
          name="status"
          checked={faq.status === 1}
          onChange={handleTextChange}
        />
      </div>
      <Button
        text={"Add"}
        className='mb-4'
        buttonHandle={handlePost}
      />
      <Header text={"Faqs Listing"} />
      <Table
        handleDelete={handleDelete}
        headTable={faqsHead}
        body={data.length > 0 ? data : faqsBody}
        dataName='faqs'
      />
    </div>
  );
};

export default Page;
