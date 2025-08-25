import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";
// import './../../apis/json/portfolio.json';

const ProtfolioDetails = () => {
const { id } = useParams();
console.log("URL Param ID:", id);

  const [data, setData] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/apis/json/portfolio.json");
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const result = await response.json();

        const portfolioItem = result.find((item) => item.id.toString() === id);
        if (portfolioItem) {
          setData(portfolioItem);
        } else {
          setError("Portfolio item not found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger py-5">Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <PageHeader heading={data.page_heading} page={data.page_subheading} />

      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Main big image */}
            <img
              src={`/uploads/${data.image_main}`}
              alt={data.page_heading}
              style={{ maxWidth: "100%" }}
            />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>{data.client_name}</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>{data.project_date}</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>{data.category}</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>{data.location}</p>
                  </div>
                </div>
              </div>
              <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id }) => (
                  <li key={id}>
                    <Link to="">
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">{data.project_description}</p>
            </div>

            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text__boxhead">Challenge</h3>
              <p className="fz-16 pra ttext__one">
                {data.challenge_description}
              </p>
              <ul className="challenge__list">
                <li>{data.challenge_point_1}</li>
                <li>{data.challenge_point_2}</li>
                <li>{data.challenge_point_3}</li>
              </ul>
            </div>

            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h3 className="text__boxhead">Solution & Result</h3>
              <p className="fz-16 pra">{data.solution_description}</p>
            </div>

            {/* Two smaller images side by side */}
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="thumb">
                <img
                  src={`/uploads/${data.image_extra_1}`}
                  alt="Extra Image 1"
                />
              </div>
              <div className="thumb">
                <img
                  src={`/uploads/${data.image_extra_2}`}
                  alt="Extra Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="protfolidetails__section cmn__bg pt-120 pb-120">
        <div className="container">
          <div className="project__head text-center">
            <span
              className="common__sub"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Portfolio
            </span>
            <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
              Related Work
            </h2>
          </div>

          <div className="project__wrapone">
            {projectList
              .slice(0, 2)
              .map(({ heading, id, image, subHeading }, index) => (
                <ProjectCard
                  key={id}
                  image={image}
                  heading={heading}
                  subHeading={subHeading}
                  openLightbox={openLightbox}
                  index={index}
                />
              ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            onClose={closeLightbox}
            currentId={currentId}
          />
        )}
      </section> */}
    </>
  );
};

export default ProtfolioDetails;
