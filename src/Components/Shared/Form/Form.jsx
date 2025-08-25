import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Form = ({ isColTwo }) => {
  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form
        action="https://formsubmit.co/hasnainaliansari221@gmail.com"
        method="POST"
        className="row g-4"
      >
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Write Comments"
            required
          ></textarea>
        </div>

        {/* Hidden inputs for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://codewithhasnain.vercel.app/thank-you"
        />

        {/* Keep your original Link styling but trigger form submit */}
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            e.target.closest("form").submit();
          }}
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
        >
          <span className="get__text">Submit Comment</span>
          <span>
            <i className="fz-20">
              <ArrowRight />
            </i>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Form;
