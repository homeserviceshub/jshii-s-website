import React from "react";
import "./galleryComponents.css";
import ContactComponentInPage from "../contactComponent/contactComponentInPage";

const GalleryComponent = () => {
  const galleryData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 0, 9, 2, 88, 7,
    67, 6, 5, 5, 4, 4, 43, 34,
  ];
  return (
    <>
      <div className="imageGridContainer">
        <div className="imageGrid">
          {galleryData.map((item, index) => {
            return (
              <div key={index} className="gridItem">
                <div className="gridItemImgDiv">
                  <img src="/assets/images/whiteBg.png" alt="working" />
                  <div className="imgText">
                    <div className="secondSubTitle">Interior Design</div>
                    <h5 className="fw-bolder white">Wall Painting</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ContactComponentInPage />
    </>
  );
};

export default GalleryComponent;
