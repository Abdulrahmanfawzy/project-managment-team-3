import React from "react";
import { EllipsisVertical, Plus, MessageSquare, Calendar } from "lucide-react";

// --- Types ---

type Priority = "High" | "Medium" | "Low";

interface Column {
  id: string;
  title: string;
  dotColor: string;
  headerBg: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  columnId: string;
  date: string;
  assignees: string[];
  comments: number;
  progress?: number;
  reviewer?: string;
}

// --- Data ---

const columns: Column[] = [
  {
    id: "todo",
    title: "To-do",
    dotColor: "#6837A4",
    headerBg: "bg-gray-50",
  },
  {
    id: "inprogress",
    title: "In Progress",
    dotColor: "#6837A4",
    headerBg: "bg-blue-50",
  },
  {
    id: "inreview",
    title: "In Review",
    dotColor: "#6837A4",
    headerBg: "bg-pink-50",
  },
  {
    id: "completed",
    title: "Completed",
    dotColor: "#6837A4",
    headerBg: "bg-green-50",
  },
];

const tasks: Task[] = [
  {
    id: "1",
    title: "Create Wireframes",
    description: "Initial layout and structure for main page",
    priority: "High",
    columnId: "todo",
    date: "Dec 12",
    assignees: ["M", "S", "A"],
    comments: 8,
  },
  {
    id: "2",
    title: "User Research Analysis",
    description: "Initial layout and structure for main page",
    priority: "Medium",
    columnId: "todo",
    date: "Dec 12",
    assignees: ["M", "S", "A"],
    comments: 8,
  },
  {
    id: "3",
    title: "Design System Updates",
    description: "Update component library with new brand color",
    priority: "Low",
    columnId: "todo",
    date: "Dec 12",
    assignees: ["M", "S", "A"],
    comments: 8,
  },
  {
    id: "4",
    title: "Chat Screen Prototyping",
    description: "Create Interactive Prototype for Chat screen",
    priority: "High",
    columnId: "inprogress",
    date: "Dec 12",
    progress: 62,
    assignees: ["M", "S", "A"],
    comments: 8,
  },
  {
    id: "5",
    title: "Create Miro Interaction",
    description: "Initial layout and structure for main page",
    priority: "Low",
    columnId: "inprogress",
    date: "Dec 12",
    progress: 32,
    assignees: ["M", "S"],
    comments: 8,
  },
  {
    id: "6",
    title: "Mobile Responsiveness",
    description: "Create Interactive Prototype for Chat screen",
    priority: "High",
    columnId: "inreview",
    date: "Dec 12",
    assignees: ["M", "S", "A"],
    comments: 8,
    reviewer: "Ali Hassan",
  },
  {
    id: "7",
    title: "Accessibility Audit",
    description: "Initial layout and structure for main page",
    priority: "Low",
    columnId: "inreview",
    date: "Dec 12",
    assignees: ["M", "S"],
    comments: 8,
    reviewer: "Ali Hassan",
  },
  {
    id: "8",
    title: "Login Screen",
    description: "Create Interactive Prototype for Chat screen",
    priority: "High",
    columnId: "completed",
    date: "Dec 12",
    assignees: ["M", "S", "A"],
    comments: 8,
  },
  {
    id: "9",
    title: "Survey",
    description: "Initial layout and structure for main page",
    priority: "Low",
    columnId: "completed",
    date: "Dec 12",
    assignees: ["M", "S"],
    comments: 8,
  },
];

// --- Priority styles ---

const priorityStyles: Record<Priority, string> = {
  High: "text-red-500 bg-red-50",
  Medium: "text-orange-300 bg-orange-50",
  Low: "text-green-500 bg-green-50",
};

// --- Component ---

const Taskstab = () => {
  return (
    // [1] PAGE WRAPPER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // الـ grid الرئيسي اللي بيحتوي الـ 4 columns
    <div className="relative top-[207px] left-[64px] w-[1312px] h-[755px] grid grid-cols-1  gap-[32px] p-4 sm:grid-cols-2 md:p-6 xl:grid-cols-4">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.columnId === column.id);
        return (
          <div
            key={column.id}
            // [2] COLUMN CARD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            // الكارد الأبيض بتاع كل column
            className="flex flex-col w-[304px] h-[695px] gap-[18px] pb-[20px] rounded-[16px] overflow-hidden border border-border bg-bg shadow-md"
          >
            <div
              // [3] COLUMN HEADER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              // الشريط الملون في أعلى كل column
              className={`flex rounded-t-[16px] justify-between w-[304px] h-[62px] gap-[4px] items-center p-[20px] ${column.headerBg}`}
            >
              <div className="flex items-center w-[101.83px] h-[22px] gap-[4px]">
                <span
                  className="h-[5.18px] w-[5.18px] rounded-full"
                  style={{ backgroundColor: column.dotColor }}
                />
                <h2 className="leading-none font-cairo font-bold text-[11.64px] text-foreground">
                  {column.title}
                </h2>
              </div>
              <button className="w-[15.52px] h-[15.52px] top-[0.62px] left-[6.05px] ml-auto text-muted-foreground hover:text-foreground">
                <EllipsisVertical size={16} />
              </button>
            </div>

            <div className="flex flex-col w-[304px] h-[595px] gap-[15px] px-[20px]">
              {/* [5] ADD TASK BUTTON */}
              <button
                type="button"
                className="flex w-[264px] h-[40px] items-center justify-center gap-[8px] rounded-[32px] border border-dashed border-brand bg-background py-[12px] pl-[20px] pr-[12px] text-brand cursor-pointer"
              >
                <span className="h-[14px] w-[63px] text-[14px] font-medium leading-none">
                  Add Task
                </span>
                <Plus className="w-[16px] h-[16px]" />
              </button>
              {/* [6] TASKS LIST ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  قائمة الـ task cards الخاصة بالـ column ده */}
              {columnTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col w-[264px] h-[167px] rounded-[16px] border border-border bg-social-bg p-[16px]"
                >
                  <div className="flex flex-col w-[232px] gap-[12px] h-full">
                    {/* Title + Priority */}
                    <div className="flex justify-between items-center w-[232px] h-[24px]">
                      <p className="w-[186px] h-[14px] text-[11.64px] font-bold leading-[100%] text-black">
                        {task.title}
                      </p>

                      <span
                        className={`flex items-center justify-center h-[24px] px-[6px] py-[4px] rounded-full text-xs font-medium ${priorityStyles[task.priority]}`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-[11px] font-normal leading-[100%] tracking-[0%] text-muted-foreground">
                      {task.description}
                    </p>
                    <div className="h-[32px]">
                      {task.progress !== undefined && (
                        <div className="flex flex-col gap-1 ">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-muted">
                            <div
                              className="h-1.5 rounded-full bg-brand"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="h-[16px]">
                      {task.reviewer && (
                        <div className="flex justify-between text-xs">
                          <span>{task.reviewer}</span>
                          <span>Reviewer</span>
                        </div>
                      )}
                    </div>

                    {/* BOTTOM ROW  */}
                    <div className="mt-auto flex items-center justify-between w-[232px] h-[28px] ">
                      {/* AVATARS GROUP */}
                      <div className="flex items-center w-[53.19px] h-[21.73px]">
                        {task.assignees.map((_, index) => (
                          <div
                            key={index}
                            className="w-[21.73px] h-[21.73px] rounded-full border-[1.36px] border-white bg-[#6837A4]"
                            style={{
                              marginLeft: index === 0 ? "0" : "-6px",
                              zIndex: task.assignees.length - index,
                            }}
                          />
                        ))}
                      </div>

                      {/* COMMENTS + DATE - w=96px h=28px gap=11px */}
                      <div className="flex items-center w-[96px] h-[28px] gap-[11px]">
                        {/* Comments: رقم + أيقونة gap=4px */}
                        <div className="flex items-center gap-[4px]">
                          <span className="text-[12px] font-normal text-[#27272B]">
                            {task.comments}
                          </span>
                          <MessageSquare size={16} color="#27272B" />
                        </div>

                        {/* Date: نص + أيقونة */}
                        <div className="flex items-center gap-[4px]">
                          <span className="font-rubik text-[12px] text-[#383838]">
                            {task.date}
                          </span>
                          <Calendar size={12} color="#000000" />
                        </div>
                      </div>
                    </div>
                    {/* END BOTTOM ROW */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Taskstab;
