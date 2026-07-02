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

export interface UserCounts {
  tasks: number;
  teams: number;
  projects: number;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  country_code: string | null;
  full_phone: string | null;
  about: string | null;
  job_title: string | null;
  experience_years: number;
  availability_status: "available" | "unavailable";
  current_team: string | null;
  current_project: string | null;
  teams: unknown[]; // Replace with Team[] later
  roles: unknown[]; // Replace with Role[] later
  counts: UserCounts;
  files: unknown[]; // Replace with File[] later
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}
