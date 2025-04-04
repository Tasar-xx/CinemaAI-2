export interface Benefit {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

export const benefits: Benefit[] = [
  {
    id: "psychological",
    title: "Psychological Impact",
    description: "Writing has always been a way to manifest words—now we can manifest words directly into images and ideas, creating a seamless bridge between imagination and visualization.",
    image: "Creative visualization demo",
    points: [
      "Immediate visual feedback on creative decisions",
      "Reduced cognitive load when translating concepts to visuals",
      "Enhanced creative confidence through rapid iteration"
    ]
  },
  {
    id: "efficiency",
    title: "Production Efficiency",
    description: "What used to take days of back-and-forth communication can now be accomplished in a single afternoon, with all key stakeholders able to contribute to the iterative process simultaneously.",
    image: "Production efficiency visualization",
    points: [
      "50+ iterations possible in a single collaborative session",
      "Lower production budgets through precise previsualization",
      "Streamlined creative decision-making process"
    ]
  },
  {
    id: "creative-control",
    title: "Creative Control",
    description: "Directors can now visualize their exact vision independently, then share these specific visual concepts with their teams to ensure everyone is aligned before production begins.",
    image: "Creative control visualization",
    points: [
      "Enhanced director-team communication",
      "Artistic vision preserved throughout production",
      "Reduced misinterpretation between departments"
    ]
  },
  {
    id: "future-tech",
    title: "Future Innovations",
    description: "AI filmmaking technology is improving every day, with new capabilities constantly being developed and integrated into our platform.",
    image: "Future technology visualization",
    points: [
      "Advanced physics engines for realistic simulations",
      "Next-generation 4D gaussian splatting technology",
      "Enhanced AI performance capture capabilities"
    ]
  }
];
