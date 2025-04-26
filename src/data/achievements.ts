
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "Certificate Link";
  year: string;
  description: string;
  certificateLink: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Complete Machine Learning and Data Science Program",
    type: "Certificate Link",
    year: "2024",
    description: "A comprehensive program covering essential machine learning and data science concepts and techniques.",
    certificateLink:"https://www.geeksforgeeks.org/certificate/f30e6112e7e252f40f36a64d72175e9d?utm_source=socials&utm_medium=cc_link",
    icon: Award,
  },
  {
    id: 2,
    title: "Dynamic Programming, Greedy Algorithms",
    type: "Certificate Link", 
    year: "2024",
    description: "A course focused on mastering dynamic programming and greedy algorithm techniques for problem-solving.",
    certificateLink:"https://www.coursera.org/account/accomplishments/verify/W8A7EUC7NJCX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    icon: Award,
  },
  {
    id: 3,
    title: "Generative AI with Large Language Models ",
    type: "Certificate Link",
    year: "2024",
    description: "An in-depth course on leveraging large language models for generative AI applications.",
    certificateLink:"https://www.coursera.org/account/accomplishments/verify/9434EJTKMHEB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    icon: Award,
  },
  {
    id: 4,
    title: "Approximation Algorithms and Linear Programming",
    type: "Certificate Link",
    year: "2024",
    description: "A course on linear programming and approximation algorithms with guaranteed solution quality.",
    certificateLink:"https://coursera.org/share/ab48a46d945579cad1041127c47dfd7d",
    icon: Award,
  },
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
