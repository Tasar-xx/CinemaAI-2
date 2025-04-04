export interface FutureTech {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const futureTechs: FutureTech[] = [
  {
    id: "neural-rendering",
    title: "Real-time Neural Rendering",
    description: "Future versions will include neural rendering capabilities that allow for instant, photorealistic scene generation based on simple text descriptions or rough sketches.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    id: "emotional-performance",
    title: "Emotional Performance AI",
    description: "Advanced AI systems that can generate nuanced, emotionally rich performances based on script input, allowing directors to pre-visualize complex acting scenes.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
  },
  {
    id: "immersive-collaboration",
    title: "Immersive Collaboration",
    description: "Virtual production environments where entire creative teams can collaborate in shared virtual spaces, manipulating and experiencing scenes together in real-time.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }
];
