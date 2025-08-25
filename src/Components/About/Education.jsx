import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                I have completed my Associate of Science in Computer Software
                Engineering from Shah Abdul Latif University, Khairpur
                (2021–2024). I'm currently pursuing an Advance Diploma in
                Software Engineering from Aptech Pakistan (2023–2025), focusing
                on web development and modern technologies. Earlier, I completed
                my Intermediate in Pre-Engineering from Government Islamia
                Science College, Sukkur (2018–2020).
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2018-2020</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">
                      Intermediate - Pre-Engineering
                    </h4>
                    <p className="fz-18 pra d-block">
                      Government Islamia science college sukkur
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2021-2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Associate of Science - AS</h4>
                    <p className="fz-18 pra d-block">Shah Abdul Latif University, Khairpur</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2023-2025</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Advance Diploma in Software Engineering -IT</h4>
                    <p className="fz-18 pra d-block">Aptech Pakistan</p>
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

export default Education;
