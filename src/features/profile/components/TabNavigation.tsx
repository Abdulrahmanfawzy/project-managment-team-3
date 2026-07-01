import { NavLink } from "react-router-dom";

export default function TabNavigation() {
  const tabs = ["Overview", "Tasks", "Files"];

  return (
    <>
      <nav className="flex gap-10">
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={`/dashboard/profile/${tab.toLowerCase()}`}
            className={({ isActive }) =>
              `relative pb-1 text-lg font-medium ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`
            }
          >
            {tab}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
