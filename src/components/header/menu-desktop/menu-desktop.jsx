import React from "react";
import "./menu-desktop.css";
import { useSelector } from "react-redux";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { updateMenuItemsAction } from "../../../redux/drawerStore";
import { useHistory } from "react-router-dom";

function MenuDesktop() {
  const history = useHistory();
  const dispatch = useDispatch();
  const menuItem = useSelector((state) => state.drawer.drawerInfo);
  const itemMenuleft = menuItem.slice(0, 4);
  const itemMenuRight = menuItem.slice(4, 8);

  console.log("useHistoryuseHistory", useHistory());
  const activeButton = (itemId) => {
    const menuItemsUpdated = menuItem.map((item, i) => ({
      ...item,
      active: itemId === item.id,
    }));
    dispatch(updateMenuItemsAction(menuItemsUpdated));
    history.push("/home");
  };

  return (
    <div className="container-menu-desktop">
      <div className="menu-desktop">
        {itemMenuleft.map((item, index) => {
          return (
            <button
              key={index}
              className={cn("button-menu-desktop", {
                "button-active-menu-desktop": item.active,
              })}
              onClick={() => {
                activeButton(item.id);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <img
        className="menu-desktop-logo"
        src="https://mooala.com/wp-content/uploads/2019/10/Mooala_Logo-1.png"
        alt="logo"
      />
      <div className="menu-desktop">
        {itemMenuRight.map((item, index) => {
          return (
            <button
              key={index}
              className={cn("button-menu-desktop", {
                "button-active-menu-desktop": item.active,
              })}
              onClick={() => {
                activeButton(item.id);
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default MenuDesktop;
