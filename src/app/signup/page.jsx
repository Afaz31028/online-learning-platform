'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {

    const router = useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password
        });
        if(!error){
            router.push('/signin')
            // console.log(data)
        }
        else{
          console.log("Error Found", error)
        }
  };

  return (
    <div className="px-30 pt-20 py-35">
      <h1 className="text-center text-2xl font-bold text-green-700">Please, Sign Up</h1>

      <div className="flex justify-center mt-4">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={onSubmit} className="mx-auto">
            <fieldset className="fieldset">

              <label className="label font-bold text-neutral">User Name</label>
              <input name="name" type="text" required className="input" placeholder="Enter a User Name" />

              <label className="label font-bold text-neutral">Image Url</label>
              <input name="image" type="text" required className="input" placeholder="Image URL" />

              <label className="label font-bold text-neutral">Email</label>
              <input name="email" type="email" required className="input" placeholder="Enter Your Email"/>

              <label className="label font-bold text-neutral">Password</label>
              <input name="password" type="password" required className="input" placeholder="Enter a Password"/>
              <button type="submit" className="btn mt-5 btn-primary w-80">Sign Up</button>

            </fieldset>
          </form>
          <div className="pb-10">
            <h1 className="mt-2 text-center text-lg font-bold text-red-600">OR</h1>

            <div className="mt-2 flex justify-center">
              <button className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign Up with Google
                    </button>
            </div>
            <p className='mt-10 text-center'>Already have an account? <Link className='text-lg font-bold text-red-700' href={"/signin"}>Sign In</Link></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;