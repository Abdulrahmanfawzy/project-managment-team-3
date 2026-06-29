const keyPoints = [
  {
    id: 1,
    text: "The team reviewed the latest homepage design and agreed on the proposed layout.",
  },
  {
    id: 2,
    text: "Several usability improvements were suggested for the sign-up flow.",
  },
  {
    id: 3,
    text: "Final color decisions were postponed to the next meeting.",
  },
  {
    id: 4,
    text: "The design team was asked to update the wireframes based on feedback.",
  },
  {
    id: 5,
    text: "A follow-up review meeting was scheduled for next week.",
  },
];

export default function AiSummary() {
  return (
    <div className="text-black space-y-3">
      <h1 className="text-black text-2xl">AI Generated Summary</h1>
      <h2 className="text-black text-xl">Key Points</h2>
      {keyPoints.map((point) => (
        <h3 key={point.id}>• {point.text}</h3>
      ))}
    </div>
  );
}
