'use client'
import React from "react";
import Image from "next/image";
import img1 from "@/assests/c-1.jpg";
import { authClient } from "@/lib/auth-client";
import UpdateProfileModal from "@/components/UpdateProfileModal";


const ProfilePage = () => {
  
  const userData = authClient.useSession() 
  const curUser=userData.data?.user;

  if (userData?.isPending) {
      return <div>Loading...</div>;
    }

  return (
    <div className="max-w-full flex justify-center pt-15 pb-25 px-5">
      <div className="border-5 bg-gray-200 border-b-cyan-800 rounded-3xl">
        <div className="h-20 bg-[#0672d1] rounded-t-2xl text-gray-200 pt-5">
          <h1 className="text-3xl font-bold text-center">My profile</h1>
        </div>
         <div className="shadow-lg shadow-gray-900 rounded-2xl pt-5">
          <div className="relative mt-10 mx-auto h-50 w-50 overflow-hidden rounded-full border-4 border-black shadow-lg">
            <Image
              src={curUser?.image}
              alt="User Image"
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-80 mt-8 text-center rounded-b-2xl bg-[#0672d1] p-2 text-white">
            <h1 className="text-xl font-bold mt-8">
              {curUser?.name || "User Name"}
            </h1>
            <h1 className="text-lg text-[#c9ecd3] font-semibold mt-1">
              Email: {curUser?.email || "example@gmail.com"}
            </h1>
            <div className="mt-8 pb-5">
                <UpdateProfileModal></UpdateProfileModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
