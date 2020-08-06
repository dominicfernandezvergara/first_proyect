import React, { Fragment } from "react";
import "./drawer.css";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DrawerButtonList from "./drawer-button-list";
import { setDrawerState } from "../../../redux/drawerStore";

//Drawer API : https://material-ui.com/api/drawer/

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const drawerState = useSelector((state) => state.drawer.drawerState);

  const toggleDrawer = (event, open) => {
    dispatch(setDrawerState(open));
  };

  return (
    <Fragment>
      <Button
        className="responsive-button"
        onClick={(e) => toggleDrawer(e, true)}
      >
        <i className="material-icons reorder">reorder</i>
      </Button>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={(e) => toggleDrawer(e, false)}
      >
        <DrawerButtonList />
      </Drawer>
    </Fragment>
  );
}
