import { cva } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

export default function EditProfileInput({
  title,
  Icon,
  type,
  placeholder,
  errorMSG,
  ...props
}: {
  title: string;
  Icon: LucideIcon;
  type: string;
  placeholder: string;
  errorMSG?: string;
}) {
  const classVariants = cva("rounded-3xl border-2 px-3 py-2 flex w-full ", {
    variants: {
      class: {
        error: "border-red-600",
        noError: "border-ring",
      },
    },
    defaultVariants: { class: "noError" },
  });
  return (
    <div className="space-y-10">
      {/* {errorMSG && (
        <p className="text-red-500 w-full text-center mb-2">{errorMSG}</p>
      )} */}

      <label className="text-lg text-black ">{title}</label>

      <div className={classVariants({ class: errorMSG ? "error" : "noError" })}>
        <div className="flex items-center gap-3 w-full">
          <Icon
            size={20}
            className="color-ring"
            strokeWidth={2}
            absoluteStrokeWidth
          />

          <input
            {...props}
            className="w-full outline-none"
            placeholder={placeholder}
            type={type}
          />
        </div>
      </div>
    </div>
  );
}
