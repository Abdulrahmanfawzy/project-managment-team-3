const navItems = [
  "Dashboard",
  "Projects",
  "Tasks",
  "Chats",
  "Meetings",
  "Reports",
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-gray-50 px-8 py-3">
      <div className="mx-auto flex max-w-7xl items-center">
        {/* Logo */}
        <h1 className="mr-12 text-2xl font-semibold text-gray-900">
          Collabspace
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`rounded-full px-4 py-2 transition-colors ${
                  item === "Reports"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
