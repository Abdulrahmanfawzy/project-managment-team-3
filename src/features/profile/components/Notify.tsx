import { cva } from "class-variance-authority";

const variants = cva("flex items-center justify-between p-4", {
  variants: {
    variant: {
      error: "text-red-500",
      success: "text-green-700",
    },
  },
  defaultVariants: { variant: "success" },
});
export default function Notify({
  variant,
  message,
}: {
  variant: "error" | "success";
  message: string;
}) {
  return <p className={variants({ variant })}>{message}</p>;
}
