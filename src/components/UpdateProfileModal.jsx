import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfileModal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    toast.success("Update Successfully.", { autoClose: 3000, theme: "dark" });

   if(name.trim()!==""){
       await authClient.updateUser({
          name
    });
  }
   if(image.trim()!==""){
       await authClient.updateUser({
          image
    });

   }
    e.target.name.value = "";
    e.target.image.value = "";
  };

  return (
    <div>
      <button
        className="btn bg-black text-white"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update Profile
      </button>
      <div className="relative pr-5">
        <dialog id="my_modal_5" className="modal sm:modal-middle">
          <div className="modal-box w-full md:w-100 top-0 left-5 absolute md:top-30 md:left-60 lg:left-150 lg:p-20">
            <h1 className="text-xl font-bold mt-5">Update Profile</h1>
            <div className="flex justify-center mt-5">
              <form onSubmit={onSubmit}>
                <fieldset className="fieldset">
                  <label className="label font-bold text-neutral">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Enter Your Name"
                  />
                  <label className="label mt-5 font-bold text-neutral">
                    Image URL
                  </label>
                  <input
                    name="image"
                    type="text"
                    className="input"
                    placeholder="Provide an Image"
                  />
                  <button
                    type="submit"
                    className="btn mt-8 btn-primary rounded-4xl w-full md:w-60"
                  >
                    Update
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-neutral mt-5">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
