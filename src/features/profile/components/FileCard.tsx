import { Download, FileText } from "lucide-react";
import type { FileCardProps } from "../types";

export default function FileCard({
  title,
  author,
  size,
  uploadedAt,
  onDownload,
}: FileCardProps) {
  return (
    <div className="flex items-center rounded-xl border border-border shadow p-3">
      <div className="flex items-center justify-around w-full">
        {/* icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500">
          <FileText className="h-7 w-7 text-white" />
        </div>
        {/* title, author, size, uploadedAt */}
        <div className="space-y-1">
          <h1 className="text-xl text-black font-semibold">{title}</h1>
          <p className="text-black">By {author}</p>
          <p className="text-black text-xs">
            {size} MB • {uploadedAt}
          </p>
        </div>
        {/* download button */}
        <button className="cursor-pointer" onClick={onDownload}>
          <Download />
        </button>
      </div>
    </div>
  );
}
