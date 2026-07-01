export default function InputsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl px-4 py-6 grid grid-cols-2 gap-4 border border-border col-span-3">
      {children}
    </div>
  );
}
