export interface JoinMeetingPageProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface transcriptProps {
  transcript: { time: string; name: string; transcript: string };
}
