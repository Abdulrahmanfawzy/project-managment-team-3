import ActivityCard from "./ActivityCard";

export default function RecentActivities() {
  const activities = [
    {
      title: "Completed task User Research Analysis",
      time: "1h ago",
    },
    {
      title: "Updated Design System Updates",
      time: "4h ago",
    },
    {
      title: "Joined meeting Sprint Planning Meeting",
      time: "1d ago",
    },
    {
      title: "Commented on Dashboard Layout Design",
      time: "2d ago",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full">
      {activities.map((act, index) => (
        <ActivityCard key={index} title={act.title} time={act.time} />
      ))}
    </div>
  );
}
