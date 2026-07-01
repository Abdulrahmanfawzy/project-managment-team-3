export default function SectionsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" grid grid-cols-4 gap-18.75">{children}</div>;
}
