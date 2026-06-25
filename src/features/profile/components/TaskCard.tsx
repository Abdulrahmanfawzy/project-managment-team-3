import { CheckCircle2 } from "lucide-react";
import { cva } from "class-variance-authority";
import { Progress } from "@/components/ui/progress";
import type { TaskCardProps } from "../types";

const headerVariants = cva("flex items-center justify-between p-4", {
  variants: {
    variant: {
      todo: "bg-gray-100 text-gray-900",
      done: "bg-green-100 text-green-700",
    },
  },
  defaultVariants: {
    variant: "todo",
  },
});

//Shadcn progress bar doesn't change its bar color based on the variant
const progressVariants = cva("h-1 rounded-full", {
  variants: {
    variant: {
      todo: "bg-blue-500",
      done: "bg-green-500",
    },
  },
  defaultVariants: {
    variant: "todo",
  },
});

export default function TaskCard({
  title,
  tasks,
  variant = "todo",
}: TaskCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm h-fit ">
      {/* header */}
      <div className={headerVariants({ variant })}>
        <h1 className="text-xl font-semibold">{title}</h1>
        <span>{tasks.length}</span>
      </div>
      {/* titles */}
      <div className="flex items-center justify-between px-4 mt-3 mb-2">
        <span className="text-sm">Name</span>
        <span className="text-sm">Tasks</span>
      </div>
      {/* content */}
      <div className="px-4 mb-4 space-y-4 ">
        {tasks.map((task, index) => (
          <>
            <div key={index} className="flex flex-col gap-4 ">
              <div className="flex justify-between items-center gap-2 ">
                <div className="flex flex-col gap-3 w-full">
                  <span className="text-black text-lg">{task.name}</span>
                  <Progress
                    value={task.progress}
                    id={task.name}
                    className="bg-blue-100"
                  />
                </div>
                {variant == "done" && (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                )}
              </div>
            </div>
            <div className="h-0.5 w-full bg-bg-gray rounded-full" />
          </>
        ))}
      </div>
    </div>
  );
}
