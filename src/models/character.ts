export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  category: Category;
  message: string;
  kingdomYears?: number;
  weapon?: string;
  skill?: number;
  bossCounselor?: CharacterStructure;
  bossSquire?: CharacterStructure;
  servilism: number;
};

type Category = "king" | "fighter" | "counselor" | "squire";
