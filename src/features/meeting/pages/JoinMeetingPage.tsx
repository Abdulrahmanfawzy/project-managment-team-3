import { useState } from "react";
import JoinMeetingNavbar from "../components/JoinMeetingNavbar";
import AiSummary from "./AiSummary";
import ChangeLang from "@/components/shared/ChangeLang";
import { Transcript } from "../components/Transcript";
import {
  Briefcase,
  CalendarDays,
  ChevronRight,
  Clock4,
  Search,
} from "lucide-react";
import Navbar from "@/components/shared/NavBarTemp";

const circles = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

const transcripts = [
  {
    time: "00:01",
    name: "Mohanad Wahib",
    transcript:
      "Good morning everyone. Thanks for joining on time. Today we'll focus on reviewing the latest design updates and aligning on next steps.",
  },
  {
    time: "00:40",
    name: "Ahmed Hassan",
    transcript:
      "Morning. I went through the new homepage design, and overall it looks cleaner, but I think we still have some usability issues to address.",
  },
  {
    time: "01:23",
    name: "Omar Khaled",
    transcript:
      "I agree. The layout is better, but the call-to-action isn't very clear, especially for first-time users.",
  },
  {
    time: "02:01",
    name: "Mohanad Wahib",
    transcript:
      "That's a good point. Do you think we should reduce the number of required fields during onboarding to improve conversions?",
  },
  {
    time: "02:45",
    name: "Ahmed Hassan",
    transcript:
      "Yes, I think simplifying the onboarding flow would help. We can move some optional information to a later step.",
  },
  {
    time: "03:12",
    name: "Sara Mostafa",
    transcript:
      "I also noticed that the navigation menu becomes crowded on smaller screens. We should consider a more compact mobile layout.",
  },
  {
    time: "03:58",
    name: "Omar Khaled",
    transcript:
      "Another thing is performance. The landing page images are quite large and may affect loading times.",
  },
  {
    time: "04:30",
    name: "Mohanad Wahib",
    transcript:
      "Let's add image optimization and lazy loading to the next sprint backlog.",
  },
  {
    time: "05:14",
    name: "Ahmed Hassan",
    transcript:
      "I'll prepare a revised prototype with the suggested usability improvements and share it by tomorrow.",
  },
  {
    time: "06:02",
    name: "Sara Mostafa",
    transcript:
      "Great. Once the prototype is ready, we can schedule another review session and collect feedback from stakeholders.",
  },
];

export default function JoinMeetingPage() {
  const [activeTab, setActiveTab] = useState<string>("AI Summary");

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-full py-10 px-25 space-y-3">
        {/* path */}
        <div className=" flex gap-2 items-center w-full text-black">
          <span className="text-slate-500">Meetings</span>
          <ChevronRight className="text-black" />
          <span>Design Review</span>
        </div>
        <div className="flex justify-between w-full gap-5">
          <div className="space-y-5">
            {/*meeting title */}
            <h1 className="text-2xl text-black mb-2">Design Review</h1>
            {/*meeting details */}
            <div className="flex gap-5 items-center">
              <div className="bg-blue-200 rounded-full h-6 w-6 flex items-center justify-center">
                <Briefcase className="text-blue-500 h-4 w-4" />
              </div>
              <h3 className="text-black text-sm">project 1</h3>
              {/*Attendance */}
              <div className="flex">
                {circles.map((color, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full ${color} ${
                      index > 0 ? "-ml-1" : ""
                    }`}
                  ></div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {/* Date */}
                <CalendarDays className="text-black h-4 w-4" />
                <h3 className="text-black text-xs">December 12, 2025</h3>
              </div>
              {/*Duration */}
              <div className="flex gap-2">
                <Clock4 className="text-black h-4 w-4" />
                <h3 className="text-black text-xs">10:00 - 10:30 AM</h3>
              </div>
            </div>
            {/*Video div*/}
            <div className=" bg-red-500 h-95 rounded-3xl w-188 "></div>
            {/*Navbar and sub pages */}
            <div className="w-full">
              <JoinMeetingNavbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="w-full bg-gray-200 px-3 py-5 rounded-b-xl">
                {activeTab === "AI Summary" && <AiSummary />}
              </div>
            </div>
          </div>

          {/*Transcript section */}
          <div className="w-full space-y-5 shadow-sm rounded-xl px-5 py-10 h-full">
            {/*header and language */}
            <div className="flex items-center  justify-between mb-3">
              <h1 className="text-black text-2xl space-y-5">
                Meeting transcripts
              </h1>
              <ChangeLang />
            </div>
            {/* transcript search input */}
            <div className="w-full bg-gray-200 rounded-full px-5 flex items-center gap-2 ">
              {/*icon */}
              <Search className="text-black" />
              <input
                className="bg-gray-200 outline-none w-full p-2 text-black"
                placeholder="Search Transcript"
              />
            </div>

            <div className="overflow-auto h-130 scrollbar-thumb-brand scrollbar-track-gray-200">
              {transcripts.map((transcript, index) => (
                <Transcript key={index} transcript={transcript} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
