import React from "react";
import { Download, Plus, FileText } from "lucide-react";

type FileItem = {
  id: number;
  title: string;
  author: string;
  meta: string;
};

const recentFiles: FileItem[] = [
  {
    id: 1,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 2,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 3,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
];

const allFiles: FileItem[] = [
  {
    id: 1,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 2,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 3,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 4,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 5,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 6,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 7,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 8,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
  {
    id: 9,
    title: "Design mockups",
    author: "By Ahmed Hassan",
    meta: "6.4 MB • 1h ago",
  },
];

const allFilesRows = [
  allFiles.slice(0, 3),
  allFiles.slice(3, 6),
  allFiles.slice(6, 9),
];

const Filestab = () => {
  return (
    <div className=" w-[1312px] h-[553px] mx-auto rounded-[24px] flex flex-col items-center gap-[48px]">
      {/* Recent Files */}
      <div className="flex flex-col items-start gap-[31px] ">
        <span className="text-[25px] font-medium leading-[150%] text-black">
          Recent Files
        </span>

        <div className="flex flex-row w-[1312px] h-[90px] items-center gap-[50px]">
          {recentFiles.map((file) => (
            <div
              key={file.id}
              className="w-[404px] h-[90px] rounded-[16px] border border-border-files bg-white p-[16px] flex flex-row items-center gap-[14px] grow"
            >
              <div className="flex flex-row items-center gap-[14px] w-[334px] grow h-[58px] ">
                <div className="w-[40px] h-[40px] shrink-0 flex items-center justify-center cursor-pointer">
                  <FileText
                    size={40}
                    className="text-[#F44336]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-[2px] grow w-[280px] h-[58px]">
                  <span className="text-[16px] font-medium leading-[150%] text-black">
                    {file.title}
                  </span>
                  <span className="text-[13px] font-normal leading-[150%] text-black">
                    {file.author}
                  </span>
                  <span className="text-[12px] font-normal leading-[150%] text-black">
                    {file.meta}
                  </span>
                </div>
              </div>
              <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                <Download size={24} className="text-black cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Files */}
      <div className="flex flex-col items-end gap-[24px] self-stretch">
        <div className="flex flex-row justify-between items-center self-stretch h-[40px]">
          <span className="text-[25px] font-medium leading-[150%] text-black">
            All Files
          </span>
          <button className="h-[40px] pl-[20px] pr-[12px] py-[12px] flex flex-row items-center gap-[8px] bg-buttom-files rounded-[32px] cursor-pointer">
            <span className="text-[14px] font-medium leading-[100%] text-white">
              Upload File
            </span>
            <Plus size={16} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start gap-[16px] self-stretch">
          {allFilesRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row items-center gap-[32px] self-stretch h-[90px]"
            >
              {row.map((file) => (
                <div
                  key={file.id}
                  className="w-[416px] h-[90px] rounded-[16px] border border-border-files bg-white p-[16px] flex flex-row items-center gap-[14px] grow"
                >
                  <div className="flex flex-row items-center gap-[14px] grow h-[58px]">
                    <div className="w-[40px] h-[40px] shrink-0 flex items-center justify-center cursor-pointer">
                      <FileText
                        size={40}
                        className="text-[#F44336]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-[2px] grow h-[58px]">
                      <span className="text-[16px] font-medium leading-[150%] text-black">
                        {file.title}
                      </span>
                      <span className="text-[13px] font-normal leading-[150%] text-black">
                        {file.author}
                      </span>
                      <span className="text-[12px] font-normal leading-[150%] text-black">
                        {file.meta}
                      </span>
                    </div>
                  </div>
                  <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                    <Download size={24} className="text-black cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filestab;
