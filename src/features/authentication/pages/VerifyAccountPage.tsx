import React from "react";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import { useVerifyAccount } from "../hooks/useVerifyAccount";
import { useForm } from "react-hook-form";
import {
  verifyAccountSchema,
  type VerifyAccountFormData,
} from "../schemas/verifyAccount";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";

export default function VerifyAccountPage() {
  const { mutate, isSuccess, error: APIerror, isPending } = useVerifyAccount();
  //TODO redirect to login page after verifying

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyAccountFormData>({
    resolver: zodResolver(verifyAccountSchema),
  });

  function onSubmit(data: VerifyAccountFormData) {
    console.log(data);
    // mutate({ email: data.email });
  }

  return (
    <>
      {/* TITLE */}
      <h1 className="font-bold text-black text-3xl">Verify Account</h1>
      <h2 className="text-lg">
        Enter the OTP that was sent to you to verify your email{" "}
        {"TODO email here"}.
      </h2>
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
          placeholder="OTP"
          type="text"
          title="OTP"
          Icon={KeyRound}
          {...register("OTP")}
          errorMSG={errors.OTP?.message}
        />
        <Button
          className={`cursor-pointer bg-brand py-1  ${
            isPending ? "cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? "Verifying..." : "Verify"}
        </Button>
      </form>
    </>
  );
}
