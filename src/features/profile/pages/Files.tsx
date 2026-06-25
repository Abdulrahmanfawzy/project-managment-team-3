import FileCard from "../components/FileCard";
const files = [
  {
    title: "Design mockups",
    author: "Ahmed Hassan",
    size: "6.4 MB",
    uploadedAt: "1h ago",
  },
  {
    title: "Project Requirements",
    author: "Sara Ali",
    size: "2.1 MB",
    uploadedAt: "3h ago",
  },
  {
    title: "Sprint Planning Notes",
    author: "Mohamed Adel",
    size: "1.8 MB",
    uploadedAt: "5h ago",
  },
  {
    title: "UI Style Guide",
    author: "Omar Khaled",
    size: "4.7 MB",
    uploadedAt: "8h ago",
  },
  {
    title: "User Research Report",
    author: "Nour Ahmed",
    size: "9.2 MB",
    uploadedAt: "1d ago",
  },
  {
    title: "Meeting Minutes",
    author: "Mariam Samy",
    size: "780 KB",
    uploadedAt: "2d ago",
  },
  {
    title: "Database Schema",
    author: "Youssef Ibrahim",
    size: "3.5 MB",
    uploadedAt: "3d ago",
  },
  {
    title: "Marketing Strategy",
    author: "Fatma Hassan",
    size: "5.6 MB",
    uploadedAt: "4d ago",
  },
  {
    title: "Final Presentation",
    author: "Karim Mostafa",
    size: "12.8 MB",
    uploadedAt: "1w ago",
  },
  {
    title: "Final Presentation",
    author: "Karim Mostafa",
    size: "12.8 MB",
    uploadedAt: "1w ago",
  },
];

export default function Files() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 ">
      {files.map((file, index) => (
        <FileCard
          key={index}
          title={file.title}
          author={file.author}
          size={file.size}
          uploadedAt={file.uploadedAt}
          onDownload={() => console.log("Downloading...")}
        />
      ))}
    </div>
  );
}
