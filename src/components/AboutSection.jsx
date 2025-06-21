import { Briefcase, User } from "lucide-react";
import { BarChart2, Cpu, Code, PieChart, SlidersHorizontal, Layers } from 'lucide-react';


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm a data scientist with a strong interest in front-end development. I build interactive, data-driven web applications that turn complex insights into clear, user-friendly visuals.
              </p>

            <p className="text-muted-foreground">
             I'm passionate about exploring diverse tech stacks and enjoy working with tools like Python, React, Vite, and Streamlit. I thrive on creating solutions that are both intelligent and intuitive.
             </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-6">
            {/* Data Science */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Science</h4>
                    <p className="text-muted-foreground">
                    Analyzing and modeling data to uncover insights and drive decisions.
                    </p>
                </div>
                </div>
            </div>

            {/* Machine Learning */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                    <p className="text-muted-foreground">
                    Building intelligent models for prediction, classification, and optimization.
                    </p>
                </div>
                </div>
            </div>

            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                    Creating responsive, interactive applications with modern frameworks.
                    </p>
                </div>
                </div>
            </div>

            {/* Data Visualization */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <PieChart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Visualization</h4>
                    <p className="text-muted-foreground">
                    Presenting complex data clearly using charts, dashboards, and UI tools.
                    </p>
                </div>
                </div>
            </div>

            {/* Streamlit & Dashboards */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <SlidersHorizontal className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Streamlit & Dashboards</h4>
                    <p className="text-muted-foreground">
                    Building interactive data apps to make models accessible and usable.
                    </p>
                </div>
                </div>
            </div>

            {/* Multi-Stack Enthusiast */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Multi-Stack Enthusiast</h4>
                    <p className="text-muted-foreground">
                    Passionate about exploring a wide range of technologies and frameworks.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};