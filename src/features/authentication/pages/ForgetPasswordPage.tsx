import { Mail } from "lucide-react";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";

export default function ForgetPasswordPage() {
  return (
    <div className="bg-gray-100 w-full min-h-screen ">
      {/* HEADER */}
      <Header />
      <div className=" w-full min-h-full flex justify-center items-center py-3">
        {/* form container */}
        <div className="bg-gray-100 rounded-2xl py-10 gap-3 flex-col flex px-10  items-center justify-center w-[40%] shadow-xl">
          {/* TITLE */}
          <h1 className="font-bold text-black text-3xl">Forgot password ?</h1>
          <h2 className="text-lg">Enter your Email address.</h2>
          {/*  FORGOT PASSWORD FORM */}
          <div className="w-full flex flex-col gap-5">
            <FormInput
              placeholder="Your Email"
              type="email"
              title="Email"
              Icon={Mail}
            />
            <Button className="cursor-pointer bg-brand py-1">
              Send reset email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
