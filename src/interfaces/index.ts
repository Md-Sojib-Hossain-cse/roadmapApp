export type TRoadmapItems = {
  title: string;
  description: string;
  status: "Planned" | "In-progress" | "Completed";
  image?: string;
  category: string;
  upvotes: number;
  upvotesBy: string[];
  items: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  _id: string;
};
