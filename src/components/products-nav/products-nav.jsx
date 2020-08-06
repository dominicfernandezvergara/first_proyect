import React, { useState, Fragment } from "react";
import "./products-nav.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { updateProductsNavStateActios } from "../../redux/productsStore";

function ProductsNav({ dataProductsNav }) {
  const [currentSubCategories, setCurrentSubCategories] = useState(
    dataProductsNav[0].subcategories
  );
  const dispatch = useDispatch();

  const onClickTabProduct = (index) => {
    const itemSubcategories = dataProductsNav[index].subcategories;
    setCurrentSubCategories(itemSubcategories);
    dispatch(updateProductsNavStateActios(index));
  };

  const tabsList = dataProductsNav.map((item, index) => {
    const itemName = item.name;
    const name = itemName.toUpperCase();
    const stateItem = item.active;
    return (
      <button
        key={index}
        className={cn("tab", item.name, { "right-tab": stateItem })}
        onClick={() => onClickTabProduct(index)}
      >
        {name}
      </button>
    );
  });

  return (
    <Fragment>
      <div className="container-products-nav">
        <div className="title-products-nav">Products</div>
        <div className="wrapper-tabs-products">
          <div className="tabs-list">{tabsList}</div>
          {currentSubCategories.map((subCategory, index) => {
            return (
              <div key={index} className="wrapper-products-nav">
                <div className="wrap-image-product-nav">
                  <img
                    className="image-product-nav"
                    src={subCategory.urlImage}
                    alt=""
                  ></img>
                </div>
                <div className={cn("product-name", subCategory.color)}>
                  {subCategory.name}
                </div>
                <button className="button-product-info">DRINK INFO</button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsNav;
