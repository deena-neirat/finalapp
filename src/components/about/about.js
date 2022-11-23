import React from "react";
import aboutStyle from "../about/about.module.css";
import img3 from "../imges/img3.png";
import img4 from "../imges/img4.png";
import img6 from "../imges/img6.png";
import img7 from "../imges/img7.png";

function About() {
  return (
    <section id="about">
      <div className=" shadow-lg my-4">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-lg-5 py-5">
            <div className="row">
              <div className="col-12">
                <div className="info-box shadow-lg ">
                  <img src={img6} alt="error" width="20%" height="20%" />
                  <div>
                    <h5>who are we ?</h5>
                    <p>
                      We are Arab American University clinics, we aim for you to
                      get healthy and beautiful teeth, free of .{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="info-box shadow-lg">
                  <img src={img7} alt="" width="20%" height="20%" />
                  <div className="ms-4">
                    <h5>Supervisors</h5>
                    <p>
                      the supervision of the most skilled teaching staff at the
                      university, they supervise the students who treat you. We
                      always strive to serve you and satisfy you{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="info-box shadow-lg">
                  <img
                    src={img4}
                    alt="error"
                    width="20%"
                    height="20%"
                    className={aboutStyle.centpic}
                  />
                  <div className="ms-4">
                    <h5>The purpose of the web page</h5>
                    <p>
                      This web aims to save you time in booking an appointment
                      that suits you in the appropriate clinics for you. We hope
                      that you will not forget to rate us in your experience in
                      our treatment.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5  m-5">
            <img src={img3} alt="error" width="110%" height="90%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
