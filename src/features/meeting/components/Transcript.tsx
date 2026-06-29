import type { transcriptProps } from "../types";

export function Transcript({ transcript }: transcriptProps) {
  console.log(transcript);
  return (
    <div className="mb-3">
      <div className="flex items-center gap-3">
        <span className="px-2 py-1 rounded-3xl border text-sm">
          {transcript.time}
        </span>
        <div className="bg-red-500 h-7 w-7 rounded-full" />
        <h3 className="text-black text-sm">{transcript.name}</h3>
      </div>
      <p className="text-black text-sm">{transcript.transcript}</p>
    </div>
  );
}
