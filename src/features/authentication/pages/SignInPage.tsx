import FormInput from "@/features/authentication/components/FormInput";

import { Button } from "@/components/ui/button";
import { LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInFormData } from "../schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "../hooks/useSignIn";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const { mutate, isPending, error: APIerror } = useSignIn();

  function onSubmit(data: SignInFormData) {
    mutate({ email: data.email, password: data.password });
  }

  return (
    <>
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
      {APIerror && (
        <div className="text-red-500 text-sm font-semibold">
          {APIerror.message || "An error occurred"}
        </div>
      )}
      {/*  SIGN IN FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
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
          <Link
            to="/forgetpassword"
            className="text-brand cursor-pointer hover:text-blue-800 duration-300 ease-in-out"
          >
            Forget Password?
          </Link>
        </div>
        <Button
          type="submit"
          className={`cursor-pointer bg-brand py-1  ${
            isPending ? "cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Logging in......" : "Login"}
        </Button>
        <div className="w-full flex gap-1 justify-center">
          <h4 className="text-sm">Don't have an account yet?</h4>
          <Link
            to="/signup"
            className="text-brand font-bold text-sm hover:text-blue-800 duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
}
