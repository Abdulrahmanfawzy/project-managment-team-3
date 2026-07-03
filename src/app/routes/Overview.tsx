import RecentActivities from "../../Features/profile/components/RecentActivities";
import { useGetProfile } from "../../Features/profile/hooks/useGetProfile";

export default function Overview() {
  const { data: userProfile } = useGetProfile();
  return (
    <div className="w-188.25 space-y-10">
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-black">About</h1>
        <p className="text-black">{userProfile.about}</p>
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-semibold text-black">Recent Activities</h1>
        <RecentActivities />
      </div>
    </div>
  );
}
