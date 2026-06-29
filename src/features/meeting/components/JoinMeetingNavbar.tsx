import type React from "react";
import LinkButton from "./LinkButton";
import type { JoinMeetingPageProps } from "../types";
const links = ["AI Summary", "Note", "Comments"];

export default function JoinMeetingNavbar({
  activeTab,
  setActiveTab,
}: JoinMeetingPageProps) {
  return (
    <div className="flex items-center gap-5">
      {links.map((link, index) => (
        <LinkButton
          key={index}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title={link}
        />
      ))}
    </div>
  );
}
