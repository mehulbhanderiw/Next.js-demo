import React from "react";
import { Modal } from "react-bootstrap";

const Popup = ({ popupShow, setPopupShow }) => {
  return (
    <Modal
      show={popupShow}
      centered
      onHide={() => setPopupShow(false)}
      dialogClassName="w-popup"
    >
      <div className="newsletter-popup-container position-relative">
        <div className="row no-gutters bg-white newsletter-popup-content">
          <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
            <div className="banner-content text-center">
              <img
                src="/assets/images/popup/newsletter/logo.png"
                className="logo"
                alt="logo"
                width={60}
                height={15}
              />
              <h2 className="banner-title">
                get{" "}
                <span>
                  25<light>%</light>
                </span>{" "}
                off
              </h2>
              <p>
                Subscribe to the Molla eCommerce newsletter to receive timely
                updates from your favorite products.
              </p>
              <form action="#">
                <div className="input-group input-group-round">
                  <input
                    type="email"
                    className="form-control form-control-white"
                    placeholder="Your Email Address"
                    aria-label="Email Adress"
                    required=""
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <span>go</span>
                    </button>
                  </div>
                </div>
              </form>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="register-policy-2"
                  required=""
                />
                <label
                  className="custom-control-label"
                  htmlFor="register-policy-2"
                >
                  Do not show this popup again
                </label>
              </div>
            </div>
          </div>
          <div className="col-xl-2-5col col-lg-5">
            <img
              src="/assets/images/popup/newsletter/img-1.jpg"
              className="newsletter-img"
              alt="newsletter"
            />
          </div>
        </div>
        <div className="close-btn">
          <button onClick={() => setPopupShow(false)}>
            <i className="icon-close" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
