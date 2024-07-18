import React from "react";
import "./galleryComponents.css";
import { BiSolidDownArrow } from "react-icons/bi";

const GalleryInPage = () => {
  return (
    <div>
      <div className="projectsHeading">
        Our Recent Projects{" "}
        <span>
          <BiSolidDownArrow />
        </span>
      </div>
      <div className="imageGridContainer">
        <div className="imageGrid">
          <div className="gridItem">
            <div className="gridItemImgDiv">
              <img src="/assets/images/whiteBg.png" alt="Grid 1" />
              <div className="imgText">
                <div className="secondSubTitle">Interior Design</div>
                <h5 className="fw-bolder white">Wall Painting</h5>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="gridItemImgDiv">
              <img src="/assets/images/whiteBg.png" alt="Grid 2" />
              <div className="imgText">
                <div className="secondSubTitle">Interior Design</div>
                <h5 className="fw-bolder white">Wall Painting</h5>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="gridItemImgDiv">
              <img src="/assets/images/whiteBg.png" alt="Grid 3" />
              <div className="imgText">
                <div className="secondSubTitle">Interior Design</div>
                <h5 className="fw-bolder white">Wall Painting</h5>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="gridItemImgDiv">
              <img src="/assets/images/whiteBg.png" alt="Grid 4" />
              <div className="imgText">
                <div className="secondSubTitle">Interior Design</div>
                <h5 className="fw-bolder white">Wall Painting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryInPage;
