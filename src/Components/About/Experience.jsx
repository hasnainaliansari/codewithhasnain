import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                With hands-on experience in frontend development, I’ve worked on diverse projects ranging from business websites to custom web applications. Over the years, I’ve developed expertise in HTML, CSS, JavaScript, React, PHP, Laravel, WordPress, and MySQL. I’ve built responsive websites, designed email templates, and collaborated with teams to deliver pixel-perfect UI. My focus is on writing clean, efficient code and creating seamless user experiences. I’m always eager to take on new challenges and stay updated with the latest web technologies.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Paragon Web Solutions</h4>
                    <p className="fz-18 pra d-block">CEO</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Sr. Graphic Designer</h4>
                    <p className="fz-18 pra d-block">Nexnology</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Frontend Developer PHP/React</h4>
                    <p className="fz-18 pra d-block">Nexnology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
