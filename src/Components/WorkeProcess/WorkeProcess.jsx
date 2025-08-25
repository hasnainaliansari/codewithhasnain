import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Planning",
    info: "Laying the foundation for development success.",
    list: [
      "Understanding project goals and requirements",
      "Analyzing audience and business needs",
      "Choosing the right tools (React, PHP, Flutter, Firebase)",
    ],
  },
  {
    id: 2,
    title: "Development",
    info: "Building the core functionality.",
    list: [
      "Creating web apps with React, JavaScript, and PHP",
      "Developing cross-platform mobile apps using Flutter",
      "Setting up real-time databases with Firebase & Firestore",
    ],
  },
  {
    id: 3,
    title: "Testing & Launch",
    info: "Ensuring quality and smooth delivery.",
    list: [
      "Testing across devices and platforms",
      "Fixing bugs and optimizing performance",
      "Deploying the final product and providing support",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Build Your Dream Website or App in Just a Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
