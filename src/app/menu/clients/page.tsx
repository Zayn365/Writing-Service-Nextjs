"use client";
import React, { useEffect, useState } from "react";
import useData from "@/utils/useData";
import { userName } from "@/constants/user";
import { Avatar } from "@material-tailwind/react";

const Users = () => {
  const [user, setUser] = useState<any | undefined>();
  const [error, setError] = useState(null);
  const [next , setNext] = useState<any>(9);
  const [prev , setPrev] = useState<any>(0);

  const handleNext = () => {
    if(user?.length > next)
    setNext(next + 10);
    setPrev(prev + 10);
  }
  const handlePrev = () => {
    if(next >= 9)
    setPrev(prev - 10);
    setNext(next - 10);
  }
  const getUser = (userData: any) => {
    if (typeof userData === "string") {
      setError(userData);
    } else {
      setUser(userData);
    }
  };

  const listerns = useData("/api/clients", getUser);
  useEffect(() => {
    listerns();
  });

  return (
    <div className="py-8 flex justify-center items-center flex-col">
      <h1 className="font-bold uppercase text-lg md:tex-3xl py-8">Clients</h1>
      <div className="overflow-x-auto w-[80%] mx-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {userName?.map((item: any, index: any) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {user?.length > 0 ? (
              user?.slice(prev,next)?.map((user: any) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.id}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.completed_articles}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(user.created).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.referer_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.paypal_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
                </tr>
              ))
            ) : (
              <tr className="flex w-full justify-center items-center">
                Loading...
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {user?.length > 0 && <div className="flex justify-center items-center">
        <div className="my-10 flex justify-between items-center">
          <button disabled={prev === 0} onClick={handlePrev} className="rounded-lg px-8 py-3 bg-black hover:bg-gray-800 text-white text-bold uppercase disabled:bg-blue-gray-300  disabled:hover:bg-blue-gray-500">Previous</button>
          <span className="px-5"><p>{prev + 1} / {next + 1}</p></span>
          <button disabled={next === user?.length} onClick={handleNext} className="rounded-lg px-8 py-3 bg-black hover:bg-gray-800 text-white text-bold uppercase disabled:bg-blue-gray-300  disabled:hover:bg-blue-gray-500">Next</button>
        </div>
        </div>}
    </div>
  );
};

export default Users;
