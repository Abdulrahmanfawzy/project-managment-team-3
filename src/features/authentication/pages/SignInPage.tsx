import FormInput from "@/features/authentication/components/FormInput";
import Header from "@/features/authentication/components/Header";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Mail } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="bg-gray-100 w-full min-h-screen ">
      {/* HEADER */}
      <Header />
      <div className=" w-full min-h-full flex justify-center items-center py-3">
        {/* form container */}
        <div className="bg-gray-100 rounded-2xl py-10 gap-3 flex-col flex px-10  items-center justify-center w-[40%] shadow-xl">
          {/* TITLE */}
          <h1 className="font-bold text-black text-3xl">Sign In</h1>
          <h2 className="text-lg">Welcome back, you've been missed!</h2>
          {/* sign with google */}
          <button className=" w-full border rounded-lg py-3 font-semibold">
            Sign with google
          </button>
          <div className="text-sm before:mr-3 after:ml-3 w-full flex before:flex-1 after:flex-1 justify-center items-center before:border-t  after:border-t after:border before:border">
            OR
          </div>
          {/*  SIGN IN FORM */}
          <div className="w-full flex flex-col gap-5">
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
            <div className="flex items-center justify-between mt-3">
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="ml-3 text-gray-600">Remember Me</span>
              </div>
              <a
                href="#"
                className="text-brand cursor-pointer hover:text-blue-800 duration-300 ease-in-out"
              >
                Forget Password?
              </a>
            </div>
            <Button className="cursor-pointer bg-brand py-1">Log in</Button>
            <div className="w-full flex gap-1 justify-center">
              <h4 className="text-sm">Don't have an account yet?</h4>
              <a
                href="#"
                className="text-brand font-bold text-sm hover:text-blue-800 duration-300 ease-in-out"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
