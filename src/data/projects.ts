
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Credit Card Fraud Detection",
    description: "machine learning model to detect fraudulent transactions, including data preprocessing, feature optimization, and algorithm implementation for improved accuracy.",
    image: "/imgs/p4.png",
    tags: ["Python","Pandas","NumPy","Seaborn","Scikit-learn"],
    links: {
      github: "https://github.com/nishantsingh1107/Credit_card_fraud_detection",
      live: "",
    },
  },
  {
    id: 2,
    title: "Titanic Survival Analysis",
    description: "Applied data analysis techniques to identify key patterns and trends in Titanic passenger data, using various supervised techniques for model accuracy.",
    image: "/imgs/p1.jpg",
    tags: ["Scikit-learn", "TensorFlow", "Transformers", "Data Visualization"],
    links: {
      github: "https://github.com/nishantsingh1107/Titanic-survival-project",
      live: "",
    },
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "Built a personalized movie recommendation system using collaborative filtering, leveraging the MovieLens dataset and cosine similarity for item recommendations.",
    image: "/imgs/p2.png",
    tags: ["Python", "Pandas", "Tfidf-Vectorizer", "Collaborative Filtering"],
    links: {
      github: "https://github.com/nishantsingh1107/Movie-recommendation-system",
      live: ""
    },
  },
  // {
  //   id: 4,
  //   title: "Minders",
  //   description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
  //   image: "/imgs/p3.png",
  //   tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
  //   links: {
  //     github: "https://github.com/AathifZahir/Minders",
  //     live: "https://minders-sigma.vercel.app/",
  //   },
  // },
];
