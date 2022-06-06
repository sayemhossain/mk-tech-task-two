import React from "react";
import about from "../../img/about.jpg";
import facebook from "../../img/social-media/facebook-icon.png";
import linkedin from "../../img/social-media/linkedin-icon.png";
import instra from "../../img/social-media/instagram-icon.png";
import twitter from "../../img/social-media/twitter-icon.png";
import Contact from "../Contact/Contact";

const About = () => {
  return (
    <>
      <div className="py-2">
        <div className="container">
          <div className="text-center py-5">
            <h2>About us</h2>
            <hr className="w-25 mx-auto" />
          </div>
          <div>
            <div className="row">
              <div className="col-lg-6">
                <img className="img-fluid" src={about} alt="" />
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis repellat repudiandae quod voluptas sint explicabo
                  atque quisquam facilis, nulla accusantium, eaque corporis
                  pariatur est velit deleniti? Odit perspiciatis rem iure
                  officia voluptatibus sed atque, repellendus reiciendis, error,
                  quos vel praesentium harum temporibus in possimus impedit
                  accusamus similique! Sapiente, maxime eveniet? Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Enim reiciendis,
                  illum nam eveniet accusamus inventore, illo mollitia, non
                  animi omnis voluptate? Dolore, numquam laborum obcaecati
                  reprehenderit libero totam aspernatur maxime.
                </p>
                <div className="flex mt-5">
                  <img
                    className="img-fluid"
                    style={{ width: "60px" }}
                    src={facebook}
                    alt=""
                  />
                  <img
                    className="img-fluid"
                    style={{ width: "60px" }}
                    src={instra}
                    alt=""
                  />
                  <img
                    className="img-fluid "
                    style={{ width: "60px" }}
                    src={linkedin}
                    alt=""
                  />
                  <img
                    className="img-fluid"
                    style={{ width: "60px" }}
                    src={twitter}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
