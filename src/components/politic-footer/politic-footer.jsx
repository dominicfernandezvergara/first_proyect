import React from "react";
import "./politic-footer.css";
import PropTypes from "prop-types";

function PoliticFooter({ dataFooter }) {
  const footerButtonList = dataFooter.map((item, index) => {
    return (
      <button className="button-politic-footer-list" key={index}>
        {item}
      </button>
    );
  });
  return <div className="container-politic-footer">{footerButtonList}</div>;
}
PoliticFooter.propType = {
  dataFooter: PropTypes.array,
};
export default PoliticFooter;
