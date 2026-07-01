import { cva } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

export default function FormInput({
  title,
  Icon,
  type,
  placeholder,
  errorMSG,
  ...props
}: {
  title: string;
  Icon: LucideIcon;
  type?: string;
  placeholder: string;
  errorMSG?: string;
}) {
  const classVariants = cva(
    "rounded-xl border-2 px-5 py-2 relative z-0 flex w-full ",
    {
      variants: {
        class: {
          error: "border-red-600",
          noError: "border-ring",
        },
      },
      defaultVariants: { class: "noError" },
    }
  );
  return (
    <div>
      {errorMSG && (
        <p className="text-red-500 w-full text-center mb-2">{errorMSG}</p>
      )}

      <div className={classVariants({ class: errorMSG ? "error" : "noError" })}>
        <label className="text-xs absolute z-1 -top-2.5 bg-gray-100 ">
          {title}
        </label>

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
