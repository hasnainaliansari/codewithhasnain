import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Web Development",
    subHeading: "Modern Website Solutions",
    para: "Crafting responsive and dynamic websites using React, PHP, and JavaScript tailored to grow your business online.",
  },
  {
    id: "02",
    heading: "Mobile App Development",
    subHeading: "Cross-Platform Apps",
    para: "Building fast and scalable mobile apps using Flutter with Firebase and Firestore integration for real-time performance.",
  },
  {
    id: "03",
    heading: "Custom Admin Panels",
    subHeading: "Dashboard & CMS",
    para: "Developing user-friendly admin dashboards and content management systems using modern web stacks.",
  },
  {
    id: "04",
    heading: "Backend Development",
    subHeading: "Secure & Scalable Systems",
    para: "Creating powerful backend solutions using PHP, Firebase, and Firestore to support both web and mobile applications with speed and security.",
  },
  {
    id: "05",
    heading: "API Integration",
    subHeading: "Backend Connectivity",
    para: "Connecting your app to powerful APIs and databases using secure and efficient backend logic (Firebase, MySQL, REST APIs).",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Specialized Tech Services to Grow Your Business"
            sortTitle="What I Can Build for You"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
