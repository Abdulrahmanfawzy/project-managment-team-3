import { useResetPassword } from "../hooks/useResetPassword";
import { useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "../schemas/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Mail } from "lucide-react";
import Header from "../components/Header";

export default function ResetPasswordPage() {
  const { mutate, isSuccess, error: APIerror, isPending } = useResetPassword();

  //TODO integrate reset_token from the email link to the reset password form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  function onSubmit(data: ResetPasswordFormData) {
    console.log(data);
    // mutate({
    //   email: data.email,
    //   password: data.password,
    //   password_confirmation: data.password_confirmation,
    //   reset_token: "",
    // });
  }

  return (
    <>
      {/* TITLE */}
      <h1 className="font-bold text-black text-3xl">Reset Password</h1>

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
        <Button
          type="submit"
          className={`cursor-pointer bg-brand py-1  ${
            isPending ? "cursor-not-allowed" : ""
          }`}
        >
          {isPending ? "Submitting..." : "Reset Password"}
        </Button>
      </form>
    </>
  );
}
