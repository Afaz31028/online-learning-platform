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
    <div className="max-w-full flex justify-center mt-15 mb-25">
      <div>
        <h1 className="text-2xl font-bold text-center mt-5">
          <span className="border-b-2 pb-2">My profile</span>
        </h1>
        <div className="bg-gray-200 p-5 mt-10">
          <div className="relative mt-10 mx-auto h-50 w-50 overflow-hidden rounded-full border-4 border-red-600 shadow-lg">
            <Image
              src={curUser?.image}
              alt="User Image"
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="border-b-2 mt-5 mb-5"></p>
          <div className="w-80 mt-5 text-center">
            <h1 className="text-xl font-bold mt-8">
              {curUser?.name || "User Name"}
            </h1>
            <h1 className="text-lg font-semibold mt-1">
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
