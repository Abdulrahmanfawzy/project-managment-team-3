export default function FormTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-xl text-black">{title}</h1>
      <p className="text-lg text-">{description}</p>
    </div>
  );
}
