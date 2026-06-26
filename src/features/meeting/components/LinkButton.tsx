export default function LinkButton({ activeTab, setActiveTab, title }) {
  return (
    <button
      className={`text-black p-3 cursor-pointer rounded-t-xl  ${
        activeTab === title ? "bg-gray-200" : ""
      }`}
      onClick={() => setActiveTab(title)}
    >
      {title}
    </button>
  );
}
