import { Briefcase, CalendarDays, Clock4, Settings } from "lucide-react";
import Navbar from "../../components/shared/NavBarTemp";
import StatCard from "../../Features/profile/components/StatCard";
import TabNavigation from "../../Features/profile/components/TabNavigation";

import { Link, Outlet } from "react-router-dom";
import { useGetProfile } from "../../Features/profile/hooks/useGetProfile";
import { useDoneTasks } from "../../Features/profile/hooks/useDoneTasks";

export default function ProfilePage() {
  //TODO navigate to edit profile settings when clicking in the image profile settings button

  const { data: userProfile, isPending, error: APIerror } = useGetProfile();
  const { data: doneTasks } = useDoneTasks();
  const joinedData = new Date(userProfile.created_at).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" }
  );
  return (
    <div className="w-full min-h-screen mb-20">
      {/* Temporary navbar will be replaced later */}
      <Navbar />
      <div className="w-[90%] m-auto p-2.5 gap-2.5 mt-10 ">
        <div className="flex gap-5 justify-between w-full mb-5">
          {/* Profile image  and settings button */}
          <div className=" h-26 w-26 relative z-0">
            <div className="rounded-full h-full w-full overflow-hidden ">
              <img
                src="/public/dummyImage.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-full bg-[#E6EFFF] w-8 h-8 absolute -right-1.5 bottom-1.5 z-1 flex justify-center items-center">
              <Link
                to="/dashboard/profile/editprofile"
                className="cursor-pointer "
              >
                <Settings color="#005AFB" className="m-auto h-6 w-6" />
              </Link>
            </div>
          </div>
          {/* Name expertise and joined date */}
          <div className="my-4 flex flex-col gap-4 ">
            <h2 className="text-2xl text-black font-bold">
              {userProfile?.name}
            </h2>
            <div className="flex gap-2 items-center  ">
              <h2 className="text-xl">{userProfile?.job_title}</h2>
              <div className="flex gap-2 items-center">
                <CalendarDays />
                <h2 className="text-xl text-stone-700">Joined {joinedData}</h2>
              </div>
            </div>
          </div>
          {/* Completed task card */}
          <StatCard
            title="Completed Tasks"
            value={doneTasks?.length.toString() || "0"}
            color="lightBlue"
            Icon={Briefcase}
          />
          <StatCard
            title="Hours Worked"
            value={"0"}
            color="lightRed"
            Icon={Clock4}
          />
        </div>
        {/* Profile navbar */}
        <TabNavigation />
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
