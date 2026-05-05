'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  
    const handleGoogleSignUp=async()=>{
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

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
          toast.success("Successfully account created",{autoClose:3000, theme: "dark"});
            router.push('/signin')
            // console.log(data)
        }
        else if(error.message==="User already exists. Use another email."){
            toast.error("User already exists. Please, Login",{autoClose:3000, theme: "dark"});
        }
        else{
          toast.error("Error Found!!!!",{autoClose:3000, theme: "dark"})
          console.log("Error Found", error)
        }
  };

  return (
    <div className="px-8 py-10 md:px-30 md:pt-15 md:pb-30">
      <div className="flex justify-center mt-4">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className='h-16 bg-blue-800 rounded-t-2xl pt-5'><h1 className="text-center text-lg md:text-2xl font-bold text-white">Please, Sign Up</h1></div>
          <form onSubmit={onSubmit} className="mx-auto mt-8">
            <fieldset className="fieldset">

              <label className="label font-bold text-neutral">User Name</label>
              <input name="name" type="text" required className="input" placeholder="Enter a User Name" />

              <label className="label font-bold text-neutral">Image Url</label>
              <input name="image" type="text" required className="input" placeholder="Image URL" />

              <label className="label font-bold text-neutral">Email</label>
              <input name="email" type="email" required className="input" placeholder="Enter Your Email"/>

              <label className="label font-bold text-neutral">Password</label>
              <input name="password" type="password" required className="input" placeholder="Enter a Password"/>
              <button type="submit" className="btn mt-5 bg-[#1b55d3] text-white w-60 md:w-80">Sign Up</button>

            </fieldset>
          </form>
          <div>
            <h1 className="mt-3 text-center text-sm font-bold text-red-600">OR</h1>
            <div className="mt-2 flex justify-center">
              <button onClick={handleGoogleSignUp} className="btn bg-cyan-600 text-white border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Sign Up with Google
              </button>
            </div>
          </div>
             <div className='mt-10 h-15 bg-blue-800 rounded-b-2xl pt-5 text-center text-white'><p>Already have an account? <Link className=' text-sm md:text-lg  font-bold text-amber-400' href={"/signin"}> Sign In</Link></p></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;