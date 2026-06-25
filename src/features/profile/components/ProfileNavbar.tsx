export default function TabNavigation({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}) {
  const tabs = ["Overview", "Tasks", "Files"];

  return (
    <>
      <nav className="flex gap-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-1 text-lg font-medium  ${
              activeTab === tab
                ? "text-blue-600 border-b-3 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </>
  );
}
