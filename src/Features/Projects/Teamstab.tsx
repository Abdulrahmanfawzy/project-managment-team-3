import React from "react";
import { BadgeCheck } from "lucide-react";

const Teamstab = () => {
  type Team = {
    id: number;
    name: string;
    text: string;
    bgColor: string;
    textColor: string;
    height: string;
  };

  type Member = {
    id: number;
    teamId: number;
    name: string;
    role: string;
    progress: number;
    tasks: string;
  };

  const teams: Team[] = [
    {
      id: 1,
      name: "UI/UX",
      text: "42% Completed",
      textColor: "text-header-text1",
      bgColor: "bg-column-header1",
      height: "h-[542px]",
    },
    {
      id: 2,
      name: "Frontend",
      text: "42% Completed",
      textColor: "text-header-text2",
      bgColor: "bg-column-header2",
      height: "h-[486px]",
    },
    {
      id: 3,
      name: "Backend",
      text: "42% Completed",
      textColor: "text-header-text3",
      bgColor: "bg-column-header3",
      height: "h-[542px]",
    },
    {
      id: 4,
      name: "Marketing",
      text: "42% Completed",
      textColor: "text-header-text4",
      bgColor: "bg-column-header4",
      height: "h-[396px]",
    },
  ];

  const members: Member[] = [
    // UI/UX – teamId: 1
    {
      id: 1,
      teamId: 1,
      name: "Mohanad wahib",
      role: "Leader",
      progress: 60,
      tasks: "12/20",
    },
    {
      id: 2,
      teamId: 1,
      name: "Mohanad wahib",
      role: "UI Designer",
      progress: 45,
      tasks: "09/20",
    },
    {
      id: 3,
      teamId: 1,
      name: "Mohanad wahib",
      role: "UX Designer",
      progress: 70,
      tasks: "14/20",
    },
    {
      id: 4,
      teamId: 1,
      name: "Mohanad wahib",
      role: "UX Researcher",
      progress: 90,
      tasks: "18/20",
    },
    {
      id: 5,
      teamId: 1,
      name: "Mohanad wahib",
      role: "Product Designer",
      progress: 20,
      tasks: "04/20",
    },
    {
      id: 6,
      teamId: 1,
      name: "Mohanad wahib",
      role: "Visual Designer",
      progress: 45,
      tasks: "09/20",
    },

    // Frontend – teamId: 2
    {
      id: 7,
      teamId: 2,
      name: "Mohanad wahib",
      role: "Front Leader",
      progress: 60,
      tasks: "12/20",
    },
    {
      id: 8,
      teamId: 2,
      name: "Mohanad wahib",
      role: "React Dev",
      progress: 45,
      tasks: "09/20",
    },
    {
      id: 9,
      teamId: 2,
      name: "Mohanad wahib",
      role: "Frontend Dev",
      progress: 70,
      tasks: "14/20",
    },
    {
      id: 10,
      teamId: 2,
      name: "Mohanad wahib",
      role: "UI Engineer",
      progress: 90,
      tasks: "18/20",
    },
    {
      id: 11,
      teamId: 2,
      name: "Mohanad wahib",
      role: "Frontend Dev",
      progress: 20,
      tasks: "04/20",
    },

    // Backend – teamId: 3
    {
      id: 12,
      teamId: 3,
      name: "Mohanad wahib",
      role: "Back Leader",
      progress: 60,
      tasks: "12/20",
    },
    {
      id: 13,
      teamId: 3,
      name: "Mohanad wahib",
      role: "Backend Dev",
      progress: 45,
      tasks: "09/20",
    },
    {
      id: 14,
      teamId: 3,
      name: "Mohanad wahib",
      role: "API Engineer",
      progress: 70,
      tasks: "14/20",
    },
    {
      id: 15,
      teamId: 3,
      name: "Mohanad wahib",
      role: "Backend Dev",
      progress: 90,
      tasks: "18/20",
    },
    {
      id: 16,
      teamId: 3,
      name: "Mohanad wahib",
      role: "Database Engineer",
      progress: 20,
      tasks: "04/20",
    },
    {
      id: 17,
      teamId: 3,
      name: "Mohanad wahib",
      role: "Junior Backend",
      progress: 45,
      tasks: "09/20",
    },

    // Marketing – teamId: 4
    {
      id: 18,
      teamId: 4,
      name: "Mohanad wahib",
      role: "Marketing Lead",
      progress: 60,
      tasks: "12/20",
    },
    {
      id: 19,
      teamId: 4,
      name: "Mohanad wahib",
      role: "Content Strategist",
      progress: 45,
      tasks: "09/20",
    },
    {
      id: 20,
      teamId: 4,
      name: "Mohanad wahib",
      role: "Growth Specialist",
      progress: 70,
      tasks: "14/20",
    },
    {
      id: 21,
      teamId: 4,
      name: "Mohanad wahib",
      role: "SEO Specialist",
      progress: 90,
      tasks: "18/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:p-6 sm:grid-cols-2 xl:grid-cols-4 w-[1312px] gap-[32px]">
      {teams.map((team) => {
        const teamMembers = members.filter((m) => m.teamId === team.id);

        return (
          <div
            key={team.id}
            className={`w-[304px] ${team.height} rounded-[16px] border border-border overflow-hidden shadow-sm`}
          >
            {/* ── Colored Header ── */}
            <div
              className={`${team.bgColor} w-[304px] h-[68px] p-[20px] flex justify-between`}
            >
              <div className="w-[264px] h-[28px] gap-[16px] flex justify-between items-center">
                <span className="text-[20px] font-medium leading-[150%] text-[#000712]">
                  {team.name}
                </span>
                <span
                  className={`${team.textColor} text-[13px] font-normal leading-[150%]`}
                >
                  {team.text}
                </span>
              </div>
            </div>

            {/* ── White Body ── */}
            <div className="bg-white flex flex-col">
              {/* Column labels row */}
              <div className="flex items-center justify-between px-[20px] py-[12px]">
                <span className="text-[13px] font-normal text-gray-400">
                  Name
                </span>
                <span className="text-[13px] font-normal text-gray-400">
                  Tasks
                </span>
              </div>

              {/* Member rows */}
              {teamMembers.map((member, index) => (
                <div key={member.id}>
                  {index !== 0 && (
                    <div className="mx-[20px] border-t border-gray-100" />
                  )}

                  <div className="flex items-center gap-[10px] px-[20px] py-[10px]">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-[36px] h-[36px] rounded-full bg-gray-200" />
                      {index === 0 && (
                        <BadgeCheck
                          className="absolute top-0 right-0 h-[16.5px] w-[16.5px] fill-[#005AFB] text-white"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Name + Role + Progress bar */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[13px] font-medium text-gray-800 truncate">
                          {member.name}
                        </span>
                        <span className="text-[11px] font-normal text-gray-400 truncate">
                          {member.role}
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-[6px] h-[4px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${member.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Task count */}
                    <span className="text-[12px] font-normal text-gray-500 shrink-0">
                      {member.tasks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teamstab;
