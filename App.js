import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crime Rate Analysis and Predictions",
    description:
      "A machine learning project using clustering, classification, and visualizations to predict and analyze crime trends across states.",
  },
  {
    title: "Amul Dairy Sales Dashboard (Power BI + SQL)",
    description:
      "Created an interactive sales dashboard with KPIs, regional breakdowns, and trend analysis using Power BI and SQL queries.",
  },
  {
    title: "Mobile-Sized Mid-Air Holographic Interface (Concept)",
    description:
      "Inspired by Tony Stark's tech, this concept project aims to simulate a floating holographic UI using affordable tools like AR.js, Unity + Vuforia, Python + OpenCV, and Pepper’s Ghost illusion for mobile interaction. Focused on building a proof-of-concept with limited resources.",
  },
];

export default function App() {
  return (
    <div className="p-6 space-y-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        My Portfolio
      </motion.h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-base leading-relaxed">
          I am Bharath, an aspiring tech innovator passionate about blending creativity and technology. While I'm grounded in data science and analysis, I also dream big — like building a mid-air holographic interface using just my mobile and basic tools. I'm self-driven, resourceful, and love bringing imaginative concepts into reality.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Python, SQL, Power BI</li>
          <li>Data Analysis, Data Visualization</li>
          <li>Machine Learning, Clustering, Classification</li>
          <li>Basic AR/VR concepts, Computer Vision, Unity + Vuforia</li>
          <li>Creative problem-solving, Concept prototyping</li>
        </ul>
      </section>
    </div>
  );
}