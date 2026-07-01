import type { LucideIcon } from "lucide-react";

export default function ProfileImage({
  Icon,
  image,
}: {
  Icon: LucideIcon;
  image?: string;
}) {
  return (
    <div className=" h-26 w-26 relative z-0">
      <div className="rounded-full h-full w-full overflow-hidden ">
        <img src={image} className="object-cover w-full h-full" />
      </div>

      <div className="rounded-full bg-[#E6EFFF] w-8 h-8 absolute -right-1.5 bottom-1.5 z-1 flex justify-center items-center">
        <button className="cursor-pointer">
          <Icon color="#005AFB" className="m-auto h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
