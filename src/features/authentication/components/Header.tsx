export default function Header() {
  return (
    <header className="w-full flex justify-between px-10 pt-5 mb-5 ">
      <div>Collabspace</div>
      <select className="border rounded-lg px-3 py-1 bg-white text-gray-700 outline-none">
        <option>English</option>
        <option>Arabic</option>
      </select>
    </header>
  );
}
