import { Mail } from "lucide-react";
import FormInput from "../components/FormInput";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { useForgetPassword } from "../hooks/useForgetPassword";
import { useForm } from "react-hook-form";
import {
  forgetPasswordSchema,
  type ForgetPasswordFormData,
} from "../schemas/forgetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

export default function ForgetPasswordPage() {
  const { mutate, isSuccess, error: APIerror, isPending } = useForgetPassword();
  //TODO redirect to reset password page if isSuccess is true

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  function onSubmit(data: ForgetPasswordFormData) {
    console.log(data);
    mutate({ email: data.email });
  }

  return (
    <>
      {/* TITLE */}
      <h1 className="font-bold text-black text-3xl">Forgot password ?</h1>
      <h2 className="text-lg">Enter your Email address.</h2>
      {/*API ERROR */}
      {APIerror && (
        <div className="text-red-500 text-sm font-semibold">
          {APIerror.message || "An error occurred"}
        </div>
      )}
      {/*  FORGOT PASSWORD FORM */}
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
        <Button
          className={`cursor-pointer bg-brand py-1  ${
            isPending ? "cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send reset Email"}
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
