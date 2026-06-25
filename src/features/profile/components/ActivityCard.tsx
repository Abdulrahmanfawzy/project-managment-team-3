import { File } from "lucide-react";

export default function ActivityCard({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <div className="flex justify-between h-5 gap-5">
      <div className="flex gap-3">
        <File color="#CCA60C" />
        <h2>{title}</h2>
      </div>
      <div>{time}</div>
    </div>
  );
}
