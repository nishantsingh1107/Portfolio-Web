
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Complete Machine Learning and Data Science Program",
    type: "certification",
    year: "2024",
    description: "A comprehensive program covering essential machine learning and data science concepts and techniques.",
    icon: Award,
  },
  {
    id: 2,
    title: "Dynamic Programming, Greedy Algorithms",
    type: "certification", 
    year: "2024",
    description: "A course focused on mastering dynamic programming and greedy algorithm techniques for problem-solving.",
    icon: Award,
  },
  {
    id: 3,
    title: "Generative AI with Large Language Models ",
    type: "certification",
    year: "2024",
    description: "An in-depth course on leveraging large language models for generative AI applications.",
    icon: Award,
  },
  // {
  //   id: 4,
  //   title: "Python Certification",
  //   type: "certification",
  //   year: "2023",
  //   description: "Completed comprehensive Python programming certification.",
  //   icon: Award,
  // },
  // {
  //   id: 5,
  //   title: "SQL Certification",
  //   type: "certification",
  //   year: "2022",
  //   description: "Earned certification in SQL database management and querying.",
  //   icon: Award,
  // },
  // {
  //   id: 6,
  //   title: "Prompt Engineering Certification",
  //   type: "certification",
  //   year: "2023",
  //   description: "Completed specialized training in AI prompt engineering techniques.",
  //   icon: Award,
  // },
];
