import { cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

export default function StatCard({
  title,
  value,
  Icon,
  color,
}: {
  title: string;
  value: string;
  Icon: LucideIcon;
  color: "lightRed" | "lightBlue";
}) {
  const iconVariants = cva(
    "w-18 h-18 rounded-full flex items-center justify-center",
    {
      variants: {
        color: {
          lightBlue: "bg-icon-lightBlue",
          lightRed: "bg-icons-lightRed",
        },
      },
    }
  );

  return (
    <div className="w-77.5 bg-white p-4  rounded-xl flex items-center justify-between shadow-sm">
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <h2 className="mt-8 text-3xl font-bold text-black">{value}</h2>
      </div>
      <div>
        <div className={iconVariants({ color })}>
          <Icon />
        </div>
      </div>
    </div>
  );
}
