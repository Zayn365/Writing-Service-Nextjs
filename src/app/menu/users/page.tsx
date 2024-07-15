"use client";
import React, { useEffect, useState } from "react";
import useData from "@/utils/useData";
import { userName } from "@/constants/user";
import { Avatar } from "@material-tailwind/react";

const Users = () => {
  const [user, setUser] = useState<any | undefined>();
  const [error, setError] = useState(null);

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
      <h1 className="font-bold uppercase text-lg md:tex-3xl py-8">Clinets</h1>
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
              user?.map((user: any) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Avatar
                      size="sm"
                      variant="circular"
                      src={user?.profileImage}
                      alt={user.name}
                      width={10}
                      height={10}
                      className="border "
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.affiliateId}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.completedArticles}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.refererId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.paypalId}
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
    </div>
  );
};

export default Users;
