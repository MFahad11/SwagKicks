import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
// <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
const Footer = () => {
  return (
    <div>
      <div className=" container vstack gap-4 text-light pt-5">
        <div className="mx-auto text-center w-100">
          <p className="fs-5 fw-bold m-0">NewsLetter SIGN UP</p>
          <p className=" fw-bold text-muted ">Get info on sneakers, promos & more.</p>
          <div className=" d-flex flex-md-row pb-4 flex-column mx-auto justify-content-center w-50">
            <input
              className="form-control me-3"
              type="text"
              placeholder="Enter Your Email....."
            />
            <button type="button" className="btn btn-warning btn-lg mt-2 mt-md-0">
              Submit
            </button>
          </div>
        </div>
        <div className=" border-0 border-top border-bottom pt-2 pb-2">
            <p className="fs-5 fw-bold mb-2">Stay Connected</p>
            <div className="d-flex">
                <FontAwesomeIcon icon={faFacebook} className='fs-1 me-2 text-muted'/>
                <FontAwesomeIcon icon={faTwitter} className='fs-1 me-2 text-muted'/>
                <FontAwesomeIcon icon={faInstagram} className='fs-1 me-2 text-muted'/>
            </div>
        </div>
        <div className=" border-0 border-bottom pt-2 pb-2">
            <p className="text-muted fw-bold">CUSTOMER CARE</p>
            <p className="text-muted fw-bold">Call us at 1-866-339-7463</p>
            <p className="text-muted fw-bold">Chat with us</p>
            <p className="text-muted fw-bold"> Contact Us</p>
            <p className="text-muted fw-bold">Shipping Rates</p>
            <p className="text-muted fw-bold">Return Policy</p>
            <p className="text-muted fw-bold">Frequently Asked Questions</p>
        </div>
        <div>
            <div className="hstack gap-3 mb-1">
                <div className="text-muted">Privacy Policy</div>
                <div className="vr"></div>
                <div className="text-muted">Terms of Use</div>
                <div className="vr"></div>
                <div className="text-danger">Covid-19</div>
            </div>
            <p className="text-center m-0 mt-2">©2022 SwagKicks.com. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
