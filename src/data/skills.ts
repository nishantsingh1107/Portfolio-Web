
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C", "c++", "Python", "Java", "HTML", "CSS"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Git-Hub", "Oracle SQL", "VS Code"],
  },
  {
    name: "Data Science & Machine Learning",
    icon: Palette,
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow"],
  },
];
