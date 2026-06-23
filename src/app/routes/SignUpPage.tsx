import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";

import { LockKeyhole, Mail, UserRound } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="bg-gray-100 w-full min-h-screen ">
      {/* HEADER */}
      <div className="w-full flex justify-between px-10 py-3">
        <div>Collabspace</div>
        <select className="border rounded-lg px-3 py-1 bg-white text-gray-700 outline-none">
          <option>English</option>
          <option>Arabic</option>
        </select>
      </div>
      <div className=" w-full my-10 flex justify-center items-center   ">
        {/* form container */}
        <div className="bg-gray-100 rounded-2xl py-10 gap-3 flex-col flex px-10  items-center justify-center w-[40%] shadow-xl">
          {/* TITLE */}
          <h1 className="font-bold text-black text-3xl">Sign Up</h1>
          <h2 className="text-gray-500">Connect with every application!</h2>
          {/* TODO to be replaced */}
          <button className="text-gray-500 w-full border rounded-lg py-1 border-gray-500">
            Sign with google
          </button>
          <div className=" before:mr-3 after:ml-3 w-full flex before:flex-1 after:flex-1 justify-center items-center text-gray-500 before:border-t before:border-stone-400 after:border-t after:border-stone-400 after:border before:border">
            OR
          </div>
          {/*  SIGN UP FORM */}
          <div className="w-full flex flex-col gap-5">
            <FormInput
              placeholder="Full Name"
              title="Full Name"
              Icon={UserRound}
            />
            <FormInput
              placeholder="Your Email"
              type="email"
              title="Email"
              Icon={Mail}
            />
            <FormInput
              placeholder="Password"
              type="password"
              title="Password"
              Icon={LockKeyhole}
            />
            {/* Remember me */}
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-blue-600"
              />

              <span className="ml-3 text-gray-600">Remember Me</span>
            </div>
            <Button className="cursor-pointer bg-brand py-1">Sign Up</Button>
            <div className="w-full flex gap-1 justify-center">
              <h4 className="text-sm">Already have an account?</h4>
              <a className="text-brand font-bold text-sm">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
