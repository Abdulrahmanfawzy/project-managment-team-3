import { Briefcase, CalendarDays, Clock4, Settings } from "lucide-react";
import Navbar from "../components/NavBarTemp";
import StatCard from "../components/StatCard";
import { useState } from "react";
import TabNavigation from "../components/ProfileNavbar";
import Overview from "./Overview";
import Tasks from "./Tasks";
import Files from "./Files";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");

  return (
    <div className="w-full min-h-screen mb-20">
      {/* Temporary navbar will be replaced later */}
      <Navbar />
      <div className="w-[90%] m-auto p-2.5 gap-2.5 mt-10 ">
        <div className="flex gap-5 justify-between w-full mb-5">
          {/* Profile image  and settings button */}
          <div className=" h-24 w-24 relative z-0">
            <div className="rounded-full h-full w-full overflow-hidden ">
              <img
                src="public/dummyImage.jpg"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="rounded-full bg-[#E6EFFF] w-8 h-8 absolute -right-1.5 bottom-1.5 z-1 flex justify-center items-center">
              <button className="cursor-pointer">
                <Settings color="#005AFB" className="m-auto h-6 w-6" />
              </button>
            </div>
          </div>
          {/* Name expertise and joined date */}
          <div className="my-4 flex flex-col gap-4 ">
            <h2 className="text-2xl text-black font-bold">Mohamed Salah</h2>
            <div className="flex gap-2 items-center  ">
              <h2 className="text-xl">UI/UX Designer</h2>
              <div className="flex gap-2 items-center">
                <CalendarDays />
                <h2 className="text-xl text-stone-700">Joined Apr 2022</h2>
              </div>
            </div>
          </div>
          {/* Completed task card */}
          <StatCard
            title="Completed Tasks"
            value="140"
            color="lightBlue"
            Icon={Briefcase}
          />
          <StatCard
            title="Hours Worked"
            value="345"
            color="lightRed"
            Icon={Clock4}
          />
        </div>
        {/* Profile navbar */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-12">
          {activeTab == "Overview" && <Overview />}
          {activeTab == "Tasks" && <Tasks />}
          {activeTab == "Files" && <Files />}
        </div>
      </div>
    </div>
  );
}
