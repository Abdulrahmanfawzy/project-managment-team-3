import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import { signUpSchema, type SignUpFormData } from "../schemas/signUpSchema";
import { useSignUp } from "../hooks/useSignUp";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const { mutate, isPending, error: APIerror, isSuccess } = useSignUp();

  function onSubmit(data: SignUpFormData) {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
  }
  //TODO: redirect to verify email after successful registration
  //TODO redirect to login page after successfully creating account

  return (
    <>
      {/* TITLE */}
      <h1 className="font-bold text-black text-3xl">Sign Up</h1>
      <h2 className="text-lg">Connect with every application!</h2>
      {/* sign with google */}
      <button className=" w-full border rounded-lg py-3 font-semibold">
        Sign with google
      </button>
      <div className="text-sm before:mr-3 after:ml-3 w-full flex before:flex-1 after:flex-1 justify-center items-center before:border-t  after:border-t after:border before:border">
        OR
      </div>
      {/*API Error */}
      {APIerror && (
        <div className="text-red-500 text-sm font-semibold">
          {APIerror.message || "An error occurred"}
        </div>
      )}
      {/*  SIGN UP FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        <FormInput
          placeholder="Full Name"
          title="Full Name"
          Icon={UserRound}
          {...register("name")}
          errorMSG={errors.name?.message}
        />
        <FormInput
          placeholder="Your Email"
          type="email"
          title="Email"
          Icon={Mail}
          {...register("email")}
          errorMSG={errors.email?.message}
        />
        <FormInput
          placeholder="Password"
          type="password"
          title="Password"
          Icon={LockKeyhole}
          {...register("password")}
          errorMSG={errors.password?.message}
        />
        <FormInput
          placeholder="Confirm Password"
          type="password"
          title="Confirm Password"
          Icon={LockKeyhole}
          {...register("password_confirmation")}
          errorMSG={errors.password_confirmation?.message}
        />
        {/* Remember me */}
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 accent-blue-600"
          />

          <span className="ml-3 ">Remember Me</span>
        </div>
        <Button
          type="submit"
          className={`cursor-pointer bg-brand py-1  ${
            isPending ? "cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Signing Up..." : "Sign Up"}
        </Button>
        <div className="w-full flex gap-1 justify-center">
          <h4 className="text-sm">Already have an account?</h4>
          <Link
            to="/signin"
            className="text-brand font-bold text-sm hover:text-blue-800 duration-300 ease-in-out"
          >
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
}
