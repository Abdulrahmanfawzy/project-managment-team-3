import ChangeLang from "@/components/shared/ChangeLang";

export default function Header() {
  return (
    <header className="w-full flex justify-between px-10 pt-5 mb-5 ">
      <div>Collabspace</div>
      <ChangeLang />
    </header>
  );
}
