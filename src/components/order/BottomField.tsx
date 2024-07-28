import React from "react";

const BottomField = () => {
  return (
    <div className="w-full my-5">
      <p>
        Please make sure not to provide any contact information like emails and
        phone number in your instructions . All communication takes place
        through the website, unless you are communicating to admin.
      </p>
      <div className="w-full flex flex-col justify-center items-center md:flex-row gap-y-5 md:gap-0  my-5 ">
        <div className="w-full md:w-1/2 h-full">
          <div className="w-full border-b-2 flex justify-center items-center py-5">
            <select className="border p-2">
              <option value="">Book Formating Service</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start gap-y-4 py-4">
            <div>
              <input
                type="radio"
                id="htFor Kindleml"
                name="fav_language"
                value="For Kindle"
              />
               <label htmlFor="For Kindle">For Kindle</label>
              <br />
              <input
                type="radio"
                id="For Paperback"
                name="fav_language"
                value="For Paperback"
              />
               <label htmlFor="For Paperback">For Paperback</label>
              <br></br>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Number</label>
              <input type="number" className="border p-2" placeholder="1" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">The draft file (attachment)</label>
              <input type="file" name="" id="" className="p-2 border " />
            </div>
            <span>$15 for every book</span>
            <p>
              For every 10,000 words project formatted for kindly ,you get free
              paperback formatting
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10 md:border-l-2 flex flex-col h-full  justify-start items-start gap-y-3">
          <span className="uppercase text-2xl font-bold">Your Order</span>
          <span>
            Amount per 1 book: $<b>15</b>{" "}
          </span>
          <span>
            Amount Total: $<b>15</b>{" "}
          </span>
          <div className="flex justify-center items-center ">
            <input type="radio" id="Pay" name="Pay" value="Pay" /> 
            <label htmlFor="Pay">Pay with paypal</label>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" name="accept" id="accept" />
            <label htmlFor="accept">
              i've read & accept the terms & conditions
            </label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="text"
              placeholder="26-jun-2022"
              className="  border p-2 "
            />
            <button className="bg-[#F97E1A] text-white border px-2 py-1 rounded-md ">
              Get Discount
            </button>
          </div>
          <div className="w-full justify-start items-center gap-x-2 flex">
            <div className="bg-[#F97E1A] border px-2 p-1 rounded-md text-white ">
              Add to cart
            </div>
            <span>OR</span>
            <div className="bg-[#F97E1A] text-white border px-2 p-1 rounded-md ">
              {" "}
              checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomField;
