import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LangChain Chatbot",
    description: "LangChain Chatbot connected with OpenAI and Agent tools.",
    image: "/projects/LangChain Chatbot.png",
    tags: ["Python","Streamlit", "OpenAI", "Agent tools","Docker"],
    demoUrl: "https://chatbot.datasetcore.com.",
    githubUrl: "https://github.com/aidarmen/chatbot_with_tools",
  },
  {
    id: 2,
    title: "Web Scraper Dashboard",
    description:
      "Interactive dashboard for web scraping data.",
    image: "/projects/Web Scraper.png",
    tags: ["Python","Streamlit", "OpenAI", "Web Scraper","Docker","SupaBase"],
    demoUrl: "https://webscraper.datasetcore.com",
    githubUrl: "https://github.com/aidarmen/scrap-master",
  },
  {
    id: 3,
    title: "Sudoku",
    description:
      "Sudoku game built with React, Vite, and Docker. Fully responsive and deployable.",
    image: "/projects/Sudoku.png",
    tags: ["TypeScript","React",  "Docker"],
    demoUrl: "https://sudoku.datasetcore.com",
    githubUrl: "https://github.com/aidarmen/sudoku",
  },
    {
    id: 4,
    title: "Power Bi Sample Dashboard",
    description:
      "Power Bi Sample Dashboard showcasing data visualization capabilities.",
    image: "/projects/Power Bi Sample Dashboard.png",
    tags: ["Power Bi","Data Visualization", "Dashboard","Data Analysis"],
    demoUrl: "https://datasetcore.com/dashboard1.html",
    githubUrl: "https://github.com/aidarmen/Power-BI-Collections",
  },
  {
    id: 5,
    title: "Power Bi Sample Dashboard",
    description:
      "Power Bi Sample Dashboard showcasing data visualization capabilities.",
    image: "/projects/bank_loan_data_insights.png",
    tags: ["Power Bi","Data Visualization", "Dashboard","Data Analysis"],
    demoUrl: "https://datasetcore.com/dashboard2.html",
    githubUrl: "https://github.com/aidarmen/Power-BI-Collections",
  },
  {
    id: 6,
    title: "Intro to PyTorch Series",
    description:
      "A curated series of Kaggle notebooks introducing PyTorch fundamentals through practical examples.",
    image: "/projects/Intro to PyTorch.png",
    tags: ["Python", "PyTorch", "Deep Learning", "Kaggle"],
    demoUrl: "https://www.kaggle.com/code/aidarmen/kaggle-notebook-series-introduction-to-pytorch",
    githubUrl: "", // You can add a GitHub repo later if relevant
  },
  {
    id: 7,
    title: "Machine Learning Start Series",
    description:
      "Step-by-step notebooks guiding beginners through core ML algorithms and workflows.",
    image: "/projects/Machine Learning Start.png",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Kaggle"],
    demoUrl: "https://www.kaggle.com/code/aidarmen/kaggle-notebook-series-machine-learning-start",
    githubUrl: "",
  },
  {
    id: 8,
    title: "Deep Learning with Keras Series",
    description:
      "Comprehensive guide to deep learning using Keras, complete with examples and challenges.",
    image: "/projects/Deep Learning with Keras.png",
    tags: ["Python", "Deep Learning", "Keras", "Neural Networks", "Kaggle"],
    demoUrl: "https://www.kaggle.com/code/aidarmen/kaggle-notebook-series-deep-learning-with-keras",
    githubUrl: "",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aidarmen"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};