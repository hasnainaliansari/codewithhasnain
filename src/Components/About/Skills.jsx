import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import figma from "../../assets/img/about/figma.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";
import react from "../../assets/img/about/react.png";
import php from "../../assets/img/about/php.png";
import flutter from "../../assets/img/about/flutter.png";
import javascript from "../../assets/img/about/javascript.png";

const skillsList = [
  {
    id: 1,
    skill: "React",
    percentage: "95%",
    image: react,
  },
  {
    id: 2,
    skill: "PHP",
    percentage: "95%",
    image: php,
  },
  {
    id: 3,
    skill: "Flutter",
    percentage: "85%",
    image: flutter,
  },
  {
    id: 4,
    skill: "JavaScript",
    percentage: "95%",
    image: javascript,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                I work with React, PHP, JavaScript, and Flutter to build modern websites and applications. I can create full-stack web apps and also build mobile apps using Flutter with Firebase and Firestore for real-time features. I focus on clean, responsive design and smooth user experience.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
