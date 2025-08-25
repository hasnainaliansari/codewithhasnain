import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { Link, ScrollRestoration } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "react-bootstrap-icons";

const ThankYou = () => {
  return (
    <>
      <PageHeader heading={"Thank You"} page={"Message Sent"} />

      <section className="contact__section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box text-center cmn__bg p-5">
                <i className="text-success fz-50 mb-4 d-block">
                  <CheckCircle />
                </i>
                <h3 className="mb-3">Thank You!</h3>
                <p className="mb-4">
                  Your message has been successfully sent.  
                  I’ll get back to you as soon as possible.
                </p>

                <Link
                  to="/"
                  className="d-inline-flex fw-500 cmn--btn align-items-center gap-2"
                >
                  <i className="fz-20">
                    <ArrowLeft />
                  </i>
                  <span className="get__text">Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollRestoration />
    </>
  );
};

export default ThankYou;
