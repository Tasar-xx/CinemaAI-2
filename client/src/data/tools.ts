// Import tool illustration images
import scriptDevImage from "../assets/script-dev.png";
import conceptArtImage from "../assets/concept-art.png";
import lookDevImage from "../assets/look-dev.png";
import characterDevImage from "../assets/character-dev.png";
import locationScoutingImage from "../assets/location-scouting.jpeg";
import storyboardingImage from "../assets/storyboarding.jpeg";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  demoText: string;
  learnMoreLink: string;
  imageUrl?: string;
  images?: string[]; // Array of image URLs for the carousel
}

export const tools: Tool[] = [
  {
    id: "script",
    title: "Script Development",
    description:
      "Modify character arcs, plot points, and story elements to see how changes affect the overall narrative in real-time.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    demoText: "Script visualization demo",
    learnMoreLink: "#",
    imageUrl: scriptDevImage,
    images: [scriptDevImage, conceptArtImage, characterDevImage],
  },
  {
    id: "concept-art",
    title: "Concept Art Generation",
    description:
      "Create and iterate through various versions of visual concepts in real-time, adjusting to match your directorial vision.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    demoText: "Concept art generation demo",
    learnMoreLink: "#",
    imageUrl: conceptArtImage,
    images: [conceptArtImage, lookDevImage, storyboardingImage],
  },
  {
    id: "look-dev",
    title: "Look Development",
    description:
      "Experiment with film styles, aspect ratios, color profiles, and lighting schemes to establish your project's visual identity.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010-2.828L7.343 11z",
    demoText: "Look development demo",
    learnMoreLink: "#",
    imageUrl: lookDevImage,
    images: [lookDevImage, storyboardingImage, scriptDevImage],
  },
  {
    id: "character-dev",
    title: "Character Development",
    description:
      "Try endless character looks, visualize costume options, and map actors' faces to see how they fit your character vision.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    demoText: "Character visualization demo",
    learnMoreLink: "#",
    imageUrl: characterDevImage,
    images: [characterDevImage, locationScoutingImage, conceptArtImage],
  },
  {
    id: "location-scouting",
    title: "Virtual Location Scouting",
    description:
      "Scout locations remotely in 3D, explore spaces from any angle, and visualize set modifications before physical production.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    demoText: "3D location scouting demo",
    learnMoreLink: "#",
    imageUrl: locationScoutingImage,
    images: [locationScoutingImage, characterDevImage, lookDevImage],
  },
  {
    id: "storyboarding",
    title: "AI Storyboarding",
    description:
      "Generate detailed storyboards from script sections, visualize shot sequences, and plan camera blocking with precision.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    demoText: "Storyboard generation demo",
    learnMoreLink: "#",
    imageUrl: storyboardingImage,
    images: [storyboardingImage, scriptDevImage, locationScoutingImage],
  },
];
