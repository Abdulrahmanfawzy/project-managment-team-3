import { type LucideIcon } from "lucide-react";

export default function FormInput({
  title,
  Icon,
  type,
  placeholder,
}: {
  title: string;
  Icon: LucideIcon;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="rounded-xl border-2 border-ring  px-5 py-2 relative z-0 flex w-full  ">
      <div className="absolute z-1 -top-3.5 bg-gray-100">
        <label className="text-sm"> {title}</label>
      </div>
      <div className="flex items-center gap-3">
        <Icon
          size={20}
          className="color-ring"
          strokeWidth={2}
          absoluteStrokeWidth
        />

        <input
          className="w-full outline-none"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
}
