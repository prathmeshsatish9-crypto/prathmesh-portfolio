export const portfolio = {
  name: "Prathmesh Shelar",
  email: "prathmeshsatish9@gmail.com",
  github: "", // Add your full GitHub profile URL.
  linkedin: "", // Add your full LinkedIn profile URL.
  resumePath: "/resume.pdf", // Upload the PDF to public/resume.pdf.
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "Data analysis" | "Machine learning" | "Python";
  technologies: string[];
  placeholder: boolean;
  repository?: string;
  demo?: string;
};

export const projects: Project[] = [
  { id: "01", title: "Data analysis project", description: "A space for a future project exploring a dataset, uncovering patterns, and communicating findings.", category: "Data analysis", technologies: ["Python", "Pandas", "NumPy"], placeholder: true },
  { id: "02", title: "Machine learning project", description: "A space for a future project applying machine learning fundamentals to a practical problem.", category: "Machine learning", technologies: ["Python", "Machine Learning"], placeholder: true },
  { id: "03", title: "Python project", description: "A space for a future Python project focused on thoughtful problem-solving and clear, maintainable code.", category: "Python", technologies: ["Python"], placeholder: true },
];

export const learning = [
  { title: "SQL & databases", description: "Queries, relational data, and database management", tag: "DATABASES" },
  { title: "Statistics & probability", description: "Building a foundation for making sense of data", tag: "FOUNDATIONS" },
  { title: "Exploratory data analysis", description: "Finding patterns and asking better questions", tag: "DATA SCIENCE" },
  { title: "Machine learning", description: "Understanding the fundamentals of learning from data", tag: "ARTIFICIAL INTELLIGENCE" },
];