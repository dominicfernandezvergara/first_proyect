import React from "react";
import "./home.css";
import SimpleSlider from "../../components/slider";
import { useSelector } from "react-redux";
import PoliticFooter from "../../components/politic-footer";
import SingUp from "../../components/sing-up";
import ProductsNav from "../../components/products-nav";

function Home() {
  const dataProductsNav = useSelector((state) => state.productsData.products);
  const dataFooter = useSelector((state) => state.dataBody.dataPoliticFooter);

  return (
    <div className="container-home">
      <SimpleSlider />
      <ProductsNav dataProductsNav={dataProductsNav} />
      <img
        src="https://mooala.wpengine.com/wp-content/uploads/2018/02/WhatIs.png"
        className="fist-image-home"
        alt=""
      ></img>
      <SingUp />
      <PoliticFooter dataFooter={dataFooter} />
    </div>
  );
}

export default Home;
