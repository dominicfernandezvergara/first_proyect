import React from "react";
import "./custom-body-info.css";
import PropTypes from "prop-types";

function CustomBodyInfo({ dataBody }) {
  return (
    <div className="continer-custom-body-info">
      <h2 className="title-custom-body-info">
        {dataBody.title ? dataBody.title : null}
      </h2>
      <b className="subtitle-custom-body-info">
        {dataBody.subTitle ? dataBody.subTitle : null}
      </b>
      <p className="text-custom-body-info">
        {dataBody.mainText ? dataBody.mainText : null}
      </p>
      <div className="main-image-custom-body-info">
        {dataBody.mainImageUrl ? (
          <img
            className="secondary-image-custom-body-info"
            src={dataBody.mainImageUrl}
            alt=""
          />
        ) : null}
      </div>
      <div className="secondary-subtitle-custom-body-info">
        {dataBody.secondarySubtitle ? dataBody.secondarySubtitle : null}
      </div>
      <div className="text-custom-body-info">
        {dataBody.secondaryText ? dataBody.secondaryText : null}
      </div>
      <div className="secondary-image-custom-body-info">
        {dataBody.secondaryImageUrl ? (
          <img
            className="secondary-image-custom-body-info"
            src={dataBody.secondaryImageUrl}
            alt=""
          />
        ) : null}
      </div>
      <div className="text-custom-body-info">
        {dataBody.moreText ? dataBody.moreText : null}
      </div>

      <div className="end-points"></div>
    </div>
  );
}
CustomBodyInfo.propType = {
  dataBody: PropTypes.string,
};
export default CustomBodyInfo;
