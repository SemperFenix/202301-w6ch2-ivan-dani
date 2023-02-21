export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  category: Category;
  message: string;
  kingdomYears?: number; // For king
  weapon?: string; // For fighter
  skill?: number; // For fighter
  bossCounselor?: CharacterStructure; // For counselor
  bossSquire?: CharacterStructure; // For squire
  servilism?: number; // For squire
};

type Category = "king" | "fighter" | "counselor" | "squire";
