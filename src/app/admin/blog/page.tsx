'use client'
import React, { useState } from 'react'
import Button from '@/components/admin/Button'
import Header from '@/components/admin/Header'
import Table from '@/components/admin/Table'
import { blogBody, blogHead } from '@/constants/blog'
import NotifyUser from './NotifyUser'
import NewPost from './NewPost'
import Category from './Category'


const Page = () => {
  const [Notify, SetNotify] = useState(false);
  const [Post, SetPost] = useState(false);
  const [CategoryNew, SetCategoryNew] = useState(false);

  return (
    <div className='w-full'>
      <Header text={"Blog Posts"} />
      <div className="my-4 flex justify-end items-center gap-x-4">
        <Button
          text="Notify Users"
          className='mb-4'
          buttonHandle={() => {
            SetNotify(!Notify);
            SetPost(false);
            SetCategoryNew(false)
          }}
        />
        <Button text={"add New post"} className='mb-4' buttonHandle={() => {
          SetPost(!Post)
          SetNotify(false);
          SetCategoryNew(false)
        }
        } />
        <Button text={"add categories"} className='mb-4' buttonHandle={() => {
          SetCategoryNew(!Category)
          SetNotify(false);
          SetPost(false)
        }
        } />
      </div>
      {
        Notify && <NotifyUser />
      }
      {
        Post && <NewPost />
      } {
        CategoryNew && <Category />
      }

      {
        !CategoryNew && <Table headTable={blogHead} body={blogBody} />
      }
    </div>
  )
}

export default Page
