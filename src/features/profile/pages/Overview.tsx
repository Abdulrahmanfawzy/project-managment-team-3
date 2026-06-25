import RecentActivities from "../components/RecentActivities";

export default function Overview() {
  return (
    <div className="w-188.25 space-y-10">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-black">About</h1>
        <p className="text-black">
          Experienced UI/UX Designer with over 5 years of expertise in creating
          user-centered digital experiences. Passionate about design systems,
          accessibility, and leading creative teams to deliver exceptional
          products. Strong background in user research, wireframing,
          prototyping, and front-end development.
        </p>
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-black">Recent Activities</h1>
        <RecentActivities />
      </div>
    </div>
  );
}
