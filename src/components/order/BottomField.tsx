"use client"
import React from "react";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const services: any[] = [
  { title: "Ebook Writing Service", icon: "/icons/ebook-writing.png" },
  { title: "Book Description Writing Service", icon: "/icons/book-description.png" },
  { title: "Full Package Publishing Service", icon: "/icons/full-package.png" },
  { title: "Article/Blog post Writing Service", icon: "/icons/article-blog.png" },
  { title: "Ebook Editing Service", icon: "/icons/ebook-editing.png" },
  { title: "Book Formatting Service", icon: "/icons/book-formatting.png" },
  { title: "Cover Creation Service", icon: "/icons/cover-creation.png" },
  { title: "Keyword Research Service", icon: "/icons/keyword-research.png" },
  { title: "Children's Books Illustration Service", icon: "/icons/children-illustration.png" },
  { title: "Prewritten Books Service", icon: "/icons/prewritten-books.png" },
  { title: "Any Other Service", icon: "/icons/any-other-service.png" }
];


const BottomField = () => {

  const [service, setService] = useState('');
  const [noWords, setNoWords] = useState(0);
  const [amountPer100Words, setAmountPer100Words] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountLabel, setAmountLabel] = useState('100 words');
  const [isCouponVisible, setCouponVisibility] = useState(true);


  // Dynamically load TinyMCE to prevent SSR issues
const showHideFieldsService = (service) => {
  setService(service);
  setCouponVisibility(true);
  
  let pricePer100 = 0;
  let priceTotal = 0;

  // Update price based on selected service
  switch (service) {
      case 'Ebook Writing Service':
          pricePer100 = 2.5;
          if (noWords < 20000) {
              setCouponVisibility(true);
          } else if (noWords >= 20000 && noWords < 40000) {
              pricePer100 = 2.1;
              setCouponVisibility(false);
          } else {
              pricePer100 = 2;
              setCouponVisibility(false);
          }
          break;

      case 'Book Description Writing Service':
          pricePer100 = 2.5;
          break;

      case 'Full Package Publishing Service':
          pricePer100 = 2.5;
          break;

      case 'Article/Blog post Writing Service':
          pricePer100 = 2.5;
          break;

      case 'Ebook Editing Service':
          pricePer100 = 1.25;
          break;

      case 'Book Formatting Service':
          pricePer100 = 15;
          break;

      case 'Cover Creation Service':
          pricePer100 = 25;
          break;

      case 'Keyword Research Service':
          pricePer100 = 25;
          break;

      case "Children's Books Illustration":
          pricePer100 = 2.5;
          break;

      case "Prewritten Books Service":
          setCouponVisibility(false);
          break;

      case "Prepaid Packages":
          setCouponVisibility(false);
          break;

      case "Any Other Service":
          pricePer100 = 0;
          break;

      default:
          break;
  }

  if (noWords) {
      priceTotal = service === "Book Formatting Service" ? pricePer100 : noWords / 100 * pricePer100;
  }

  setAmountPer100Words(pricePer100);
  setTotalAmount(priceTotal);
  setAmountLabel(service === "Book Formatting Service" ? "1 book" : "100 words");
};

const handleWordChange = (e:any) => {
const words = e.target.value;
setNoWords(words);

if (service) {
    showHideFieldsService(service);  // Recalculate amounts based on the current service and word count
}
};

return (
  <div className="w-full my-5">
    <p>
      Please make sure not to provide any contact information like emails and
      phone numbers in your instructions. All communication takes place
      through the website, unless you are communicating to admin.
    </p>
    <div className="w-full flex flex-col justify-center items-center md:flex-row gap-y-5 md:gap-0 my-5">
      <div className="w-full md:w-1/2 h-full">
        <div className="w-full border-b-2 flex justify-center items-center py-5">
          <select
            className="border p-2"
            onChange={(e) => showHideFieldsService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((val) => (
              <option key={val.title} value={val.title}>
                {val.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start gap-y-4 py-4">
          {service === 'Ebook Writing Service' && (
            <>
              <div>
                <input
                  type="radio"
                  id="Brand new book"
                  name="ebook_writing_type"
                  value="Brand new book"
                />
                <label htmlFor="Brand new book">Brand new book</label>
                <br />
                <input
                  type="radio"
                  id="Adding words to content"
                  name="ebook_writing_type"
                  value="Adding words to content"
                />
                <label htmlFor="Adding words to content">
                  Adding words to content
                </label>
                <br />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Project Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Book Subtitle</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Number of words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="100"
                  value={noWords}
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Special instructions</label>
                <textarea className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Any further instructions? Attach file:</label>
                <input type="file" className="p-2 border" />
              </div>
              <div className="flex flex-col">
                <input
                  type="radio"
                  id="ebook_writing_editing"
                  name="ebook_writing_price_type"
                  value="Writing and Editing"
                  checked
                />
                <label htmlFor="ebook_writing_editing">
                  <strong>
                    Price is $2.5/100 words for full service i.e. writing and
                    editing
                  </strong>
                </label>
                <br />
                <input
                  type="radio"
                  id="ebook_writing_only"
                  name="ebook_writing_price_type"
                  value="Writing Only"
                />
                <label htmlFor="ebook_writing_only">
                  <strong>And $1.8/100 words for writing only</strong>
                </label>
              </div>
            </>
          )}
          {service === 'Full Package Publishing Service' && (
            <>
              <p>
                If you don't want to order a book, cover and formatting
                services separately, this package is for you.
              </p>
              <div className="flex flex-col">
                <label htmlFor="">Project Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Book Subtitle</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Number of words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="3000"
                  value="3000"
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Special instructions</label>
                <textarea className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Any further instructions? Attach file:</label>
                <input type="file" className="p-2 border" />
              </div>
              <div className="flex flex-col">
                <input
                  type="checkbox"
                  id="fpp_service_1"
                  name="fpp_service[]"
                  value="The Book formatted for Kindle"
                />
                <label htmlFor="fpp_service_1">
                  The Book formatted for Kindle ($10)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="fpp_service_2"
                  name="fpp_service[]"
                  value="The Book formatted for paperback"
                />
                <label htmlFor="fpp_service_2">
                  The Book formatted for paperback ($10)
                </label>
                <br />
                <input
                  type="checkbox"
                  id="fpp_service_3"
                  name="fpp_service[]"
                  value="EBook Cover"
                />
                <label htmlFor="fpp_service_3">EBook Cover ($15)</label>
                <br />
                <input
                  type="checkbox"
                  id="fpp_service_4"
                  name="fpp_service[]"
                  value="Paperback Cover"
                />
                <label htmlFor="fpp_service_4">Paperback Cover ($15)</label>
                <br />
                <input
                  type="checkbox"
                  id="fpp_service_5"
                  name="fpp_service[]"
                  value="Book Description"
                />
                <label htmlFor="fpp_service_5">Book Description ($10)</label>
                <br />
                <input
                  type="checkbox"
                  id="fpp_service_6"
                  name="fpp_service[]"
                  value="7 Keywords "
                />
                <label htmlFor="fpp_service_6">7 Keywords ($30)</label>
              </div>
            </>
          )}
          {service === 'Book Description Writing Service' && (
            <>
              <div className="flex flex-col">
                <label htmlFor="">Project Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Book Subtitle</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Preferred number of words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="100"
                  value={noWords}
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Attachment of file</label>
                <input type="file" className="p-2 border" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Special instructions</label>
                <textarea className="border p-2" />
              </div>
            </>
          )}
          {service === 'Article/Blog post Writing Service' && (
            <>
              <div className="flex flex-col">
                <label htmlFor="">Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Keywords/if any</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Number of words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="100"
                  value={noWords}
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Special instructions</label>
                <textarea className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Attachment if any</label>
                <input type="file" className="p-2 border" />
              </div>
              <p>
                <strong>Price is $2.5/100 words</strong>
              </p>
            </>
          )}
          {service === 'Ebook Editing Service' && (
            <>
              <div className="flex flex-col">
                <label htmlFor="">Number of words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="100"
                  value={noWords}
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Attach book</label>
                <input type="file" className="p-2 border" />
              </div>
              <div className="flex flex-col">
                <input
                  type="radio"
                  id="ebook_editing_price_type_1"
                  name="ebook_editing_price_type"
                  value="Book well written, just needs proofreading without major rewriting: $1.25/100 words"
                  checked
                />
                <label htmlFor="ebook_editing_price_type_1">
                  <strong>
                    Book well written, just needs proofreading without major
                    rewriting: $1.25/100 words
                  </strong>
                </label>
                <br />
                <input
                  type="radio"
                  id="ebook_editing_price_type_2"
                  name="ebook_editing_price_type"
                  value="Book requires some improvements and may require major rewriting: $2.5/100 words"
                />
                <label htmlFor="ebook_editing_price_type_2">
                  <strong>
                    Book requires some improvements and may require major
                    rewriting: $2.5/100 words
                  </strong>
                </label>
              </div>
            </>
          )}
          {service === 'Book Formatting Service' && (
            <>
              <div className="flex flex-col">
                <input
                  type="checkbox"
                  id="book_formating_type"
                  name="book_formating_type"
                  value="For Kindle"
                />
                <label htmlFor="book_formating_type">For Kindle</label>
                <br />
                <input
                  type="checkbox"
                  id="bf_for_paperback"
                  name="book_formating_type2"
                  value="For Paperback"
                />
                <label htmlFor="bf_for_paperback">For Paperback</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Number of books</label>
                <input
                  type="number"
                  className="border p-2"
                  min="1"
                  value="1"
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">The draft file (attachment)</label>
                <input type="file" className="p-2 border" />
              </div>
              <p>
                <strong>$15 for every book</strong>
              </p>
              <p>
                <strong>
                  For every 10,000 words project formatted for Kindle, you get
                  free paperback formatting
                </strong>
              </p>
            </>
          )}
          {service === 'Cover Creation Service' && (
            <>
              <div className="flex flex-col">
                <input
                  type="checkbox"
                  id="cover_creation_type"
                  name="cover_creation_type"
                  value="For Kindle"
                />
                <label htmlFor="cover_creation_type">For Kindle</label>
                <br />
                <input
                  type="checkbox"
                  id="cover_creation_type2"
                  name="cover_creation_type2"
                  value="For Paperback"
                />
                <label htmlFor="cover_creation_type2">For Paperback</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Project Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Book Subtitle</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Exact number of cover/pages</label>
                <input
                  type="number"
                  className="border p-2"
                  min="1"
                  value="1"
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Pen name/author name</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Preferred images, if any</label>
                <input type="file" className="p-2 border" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Inspiring covers that you wouldn't mind modeling</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Any other instructions</label>
                <textarea className="border p-2" />
              </div>
              <p>
                <strong>Price for this is $25 per cover</strong>
              </p>
            </>
          )}
          {service === 'Keyword Research Service' && (
            <>
              <div className="flex flex-col">
                <input
                  type="radio"
                  id="Preferred niche"
                  name="keyword_research_type"
                  value="Preferred niche"
                  checked
                />
                <label htmlFor="Preferred niche">Preferred niche</label>
                <br />
                <input
                  type="radio"
                  id="No preferred niche"
                  name="keyword_research_type"
                  value="No preferred niche"
                />
                <label htmlFor="No preferred niche">No preferred niche</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Enter Preferred niche</label>
                <input
                  type="number"
                  className="border p-2"
                  min="1"
                  value="1"
                  onChange={handleWordChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">More details</label>
                <textarea className="border p-2" />
              </div>
              <p id="niche_amound" style={{ display: 'none' }}>
                <strong>Price is $25</strong>
              </p>
            </>
          )}
          {service === "Children's Books Illustration" && (
            <>
              <div className="flex flex-col">
                <input
                  type="radio"
                  id="children_book_type_1"
                  name="children_book_type"
                  value="Story development"
                  checked
                />
                <label htmlFor="children_book_type_1">Story development</label>
                <br />
                <input
                  type="radio"
                  id="children_book_type_2"
                  name="children_book_type"
                  value="Illustration service"
                />
                <label htmlFor="children_book_type_2">Illustration service</label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Number of pages/words</label>
                <input
                  type="number"
                  className="border p-2"
                  min="1"
                  value="1"
                  onChange={handleWordChange}
                />
              </div>
              <p id="child_book_price">
                <strong>Price is $2.5/100 words</strong>
              </p>
            </>
          )}
          {service === 'Prewritten Books Service' && (
            <>
              <p>
                <a href="#" className="buttonField">
View the books list
                </a>
              </p>
            </>
          )}
          {service === 'Prepaid Packages' && (
            <>
              <table width="100%" style={{ borderCollapse: 'collapse' }} cellPadding="10">
                <tr>
                  <td align="center">
                    <strong>#</strong>
                  </td>
                  <td>
                    <strong>Title</strong>
                  </td>
                  <td align="center">
                    <strong>Words</strong>
                  </td>
                  <td align="center">
                    <strong>Amount/100w</strong>
                  </td>
                  <td align="center">
                    <strong>Installments/m</strong>
                  </td>
                  <td></td>
                </tr>
                {/* Add table rows here */}
              </table>
              <p>
                <a href="#" className="buttonField">
                  View the offers list
                </a>
              </p>
            </>
          )}
          {service === 'Any Other Service' && (
            <>
              <div className="flex flex-col">
                <label htmlFor="">Project Title</label>
                <input type="text" className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Service description</label>
                <textarea className="border p-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Total price given by support:</label>
                <input type="number" className="border p-2" />
              </div>
              <p>
                <strong>Choose this option after you've contacted admin</strong>
              </p>
            </>
          )}
          <span>
            Amount per {amountLabel}: ${amountPer100Words.toFixed(2)}
          </span>
          <p>
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
          {isCouponVisible && (
            <p>For every 10,000 words project formatted for Kindle, you get free paperback formatting.</p>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-10 md:border-l-2 flex flex-col h-full justify-start items-start gap-y-3">
        <span className="uppercase text-2xl font-bold">Your Order</span>
        <span>
          Amount per {amountLabel}: $<b>{amountPer100Words.toFixed(2)}</b>{" "}
        </span>
        <span>
          Amount Total: $<b>{totalAmount.toFixed(2)}</b>{" "}
        </span>
        <div className="flex justify-center items-center">
          <input type="radio" id="Pay" name="Pay" value="Pay" />
          <label htmlFor="Pay">Pay with PayPal</label>
        </div>
        <div className="flex gap-x-1">
          <input type="checkbox" name="accept" id="accept" />
          <label htmlFor="accept">
            I've read & accept the terms & conditions
          </label>
        </div>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="26-jun-2022"
            className="border p-2"
          />
          <button className="bg-[#F97E1A] text-white border px-2 py-1 rounded-md">
            Get Discount
          </button>
        </div>
        <div className="w-full justify-start items-center gap-x-2 flex">
          <div className="bg-[#F97E1A] border px-2 p-1 rounded-md text-white ">
            Add to cart</div>
          <span>OR</span>
          <div className="bg-[#F97E1A] text-white border px-2 p-1 rounded-md ">
            Checkout
          </div>
        </div>
      </div>
    </div>
  </div>
);
  
  // return (
  //   <div className="w-full my-5">
  //     <p>
  //       Please make sure not to provide any contact information like emails and
  //       phone number in your instructions . All communication takes place
  //       through the website, unless you are communicating to admin.
  //     </p>
  //     <div className="w-full flex flex-col justify-center items-center md:flex-row gap-y-5 md:gap-0  my-5 ">
  //       <div className="w-full md:w-1/2 h-full">
  //         <div className="w-full border-b-2 flex justify-center items-center py-5">
  //           <select className="border p-2">
  //             {services.map((val:any) => (
  //             <>
  //             <option key={val.title} value={val.title}>{val.title}</option></>
  //             ))}
              
  //           </select>
  //         </div>
  //         <div className="flex flex-col justify-start items-start gap-y-4 py-4">
  //           <div>
  //             <input
  //               type="radio"
  //               id="htFor Kindleml"
  //               name="fav_language"
  //               value="For Kindle"
  //             />
  //              <label htmlFor="For Kindle">For Kindle</label>
  //             <br />
  //             <input
  //               type="radio"
  //               id="For Paperback"
  //               name="fav_language"
  //               value="For Paperback"
  //             />
  //              <label htmlFor="For Paperback">For Paperback</label>
  //             <br></br>
  //           </div>
  //           <div className="flex flex-col">
  //             <label htmlFor="">Number</label>
  //             <input type="number" className="border p-2" placeholder="1" />
  //           </div>
  //           <div className="flex flex-col">
  //             <label htmlFor="">The draft file (attachment)</label>
  //             <input type="file" name="" id="" className="p-2 border " />
  //           </div>
  //           <span>$15 for every book</span>
  //           <p>
  //             For every 10,000 words project formatted for kindly ,you get free
  //             paperback formatting
  //           </p>
  //         </div>
  //       </div>
  //       <div className="w-full md:w-1/2 md:pl-10 md:border-l-2 flex flex-col h-full  justify-start items-start gap-y-3">
  //         <span className="uppercase text-2xl font-bold">Your Order</span>
  //         <span>
  //           Amount per 1 book: $<b>15</b>{" "}
  //         </span>
  //         <span>
  //           Amount Total: $<b>15</b>{" "}
  //         </span>
  //         <div className="flex justify-center items-center ">
  //           <input type="radio" id="Pay" name="Pay" value="Pay" /> 
  //           <label htmlFor="Pay">Pay with paypal</label>
  //         </div>
  //         <div className="flex gap-x-1">
  //           <input type="checkbox" name="accept" id="accept" />
  //           <label htmlFor="accept">
  //             i've read & accept the terms & conditions
  //           </label>
  //         </div>
  //         <div className="flex gap-x-2">
  //           <input
  //             type="text"
  //             placeholder="26-jun-2022"
  //             className="  border p-2 "
  //           />
  //           <button className="bg-[#F97E1A] text-white border px-2 py-1 rounded-md ">
  //             Get Discount
  //           </button>
  //         </div>
  //         <div className="w-full justify-start items-center gap-x-2 flex">
  //           <div className="bg-[#F97E1A] border px-2 p-1 rounded-md text-white ">
  //             Add to cart
  //           </div>
  //           <span>OR</span>
  //           <div className="bg-[#F97E1A] text-white border px-2 p-1 rounded-md ">
  //             {" "}
  //             checkout
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default BottomField;
