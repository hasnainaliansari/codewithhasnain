import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "hasnainaliansari221@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "+(92) 319 475 4114",
  },
  {
    id: 3,
    system: "Address",
    contact: "Karachi, Pakistan",
  },
  {
    id: 4,
    system: "Follow",
    socialContact: [
      <a href="https://www.facebook.com/hasnainali.ansari.12/" target="_blank">
        <Facebook />
      </a>,
      <a href="https://x.com/Mr_hasnain_ali" target="_blank">
        <Twitter />
      </a>,
      <a href="https://www.linkedin.com/in/hasnain-ali-ansari-5a7944227/" target="_blank">
        <Linkedin />
      </a>,
      <a href="" target="_blank">
        <Globe />
      </a>,
      <a href="https://instagram.com/hasnainali.ansari" target="_blank">
        <Instagram />
      </a>,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Hasnain Ali Ansari is a skilled Frontend Developer from Pakistan
                with hands-on experience in HTML, CSS, JavaScript, React,
                WordPress, Bootstrap, and jQuery. He also works with backend
                technologies like PHP, Laravel, MySQL, and SQLyog. With a strong
                focus on responsive design and clean UI/UX, Hasnain delivers web
                solutions that are fast, functional, and user-friendly. He is
                open to freelance projects and remote opportunities worldwide.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socialContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socialContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socialContact.map((info, index) => (
                                  <li key={index}>{info}</li>
                                ))}
                              </ul>
                            )}
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

export default AboutMe;
