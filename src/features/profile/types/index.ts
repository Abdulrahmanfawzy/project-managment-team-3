interface Task {
  name: string;
  progress: number;
}

export interface TaskCardProps {
  title: string;
  tasks: Task[];
  variant?: "todo" | "done";
}

export interface FileCardProps {
  title: string;
  author: string;
  size: string;
  uploadedAt: string;
  onDownload?: () => void;
}
