import React from "react";
import "./our-history.css";
import CustomBodyInfo from "../../components/custom-body-info";
import { useSelector } from "react-redux";
import PoliticFooter from "../../components/politic-footer";
import SingUp from "../../components/sing-up";

function OurHistory() {
  const dataFirsthBody = useSelector((state) => state.dataBody.ourStory);
  const dataSecondBody = useSelector((state) => state.dataBody.helpUs);
  const dataFooter = useSelector((state) => state.dataBody.dataPoliticFooter);

  return (
    <div className="container-our-history">
      <CustomBodyInfo dataBody={dataFirsthBody} />
      <CustomBodyInfo dataBody={dataSecondBody} />
      <SingUp />
      <PoliticFooter dataFooter={dataFooter} />
    </div>
  );
}

export default OurHistory;
