import TaskCard from "../components/TaskCard";

const todoTasks = [
  { name: "Create user interview", progress: 10 },
  { name: "Create Wireframes", progress: 15 },
  { name: "Create user flow", progress: 1 },
  { name: "Design log in screen", progress: 2 },
];

const doneTasks = [
  { name: "Update design system", progress: 100 },
  { name: "Create information architected", progress: 100 },
  { name: "Make survey", progress: 100 },
  { name: "Create Wireframes", progress: 100 },
  { name: "Create Wireframes", progress: 100 },
];

export default function Tasks() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <TaskCard title="To do" tasks={todoTasks} variant="todo" />
      <TaskCard title="Done" tasks={doneTasks} variant="done" />
    </div>
  );
}
