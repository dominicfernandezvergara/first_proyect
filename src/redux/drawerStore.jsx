const CURRENT_DRAWER_STATE = "CURRENT_DRAWER_STATE";
const MENU_ITEM_ACTIVE = "MENU_ITEM_ACTIVE";

const initialData = {
  drawerInfo: [
    {
      name: "HOME",
      path: "/home",
      data: "",
      active: false,
      id: 1,
    },
    {
      name: "PRODUCTS",
      path: "/products",
      data: ["Bananamilk", "Almondmilk"],
      active: false,
      id: 2,
    },
    {
      name: "OUR STORY",
      path: "/our-story",
      data: "",
      active: false,
      id: 3,
    },
    {
      name: "PRESS",
      path: "/press",
      data: "",
      active: false,
      id: 4,
    },
    {
      name: "RECIPES",
      path: "/recipes",
      data: "",
      active: false,
      id: 5,
    },
    {
      name: "CONSTACT",
      path: "/constact",
      data: "",
      active: false,
      id: 6,
    },
    {
      name: "FIND A STORE",
      path: "/find-a-store",
      data: "",
      active: false,
      id: 7,
    },
  ],
  drawerState: false,
};

export default function DrawerReducer(state = initialData, action) {
  switch (action.type) {
    case CURRENT_DRAWER_STATE: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        drawerState: action.payload,
      };
    }
    case MENU_ITEM_ACTIVE: {
      console.log("action.payload 2", action.payload);
      return {
        ...state,
        drawerInfo: action.payload,
      };
    }
    default:
      return state;
  }
}

export const setDrawerState = (drawerState) => async (dispatch) => {
  console.log("drawerState", drawerState);
  dispatch({
    type: CURRENT_DRAWER_STATE,
    payload: drawerState,
  });
};

export const updateMenuItemsAction = (menuItemActive) => async (dispatch) => {
  console.log("drawerState", menuItemActive);
  dispatch({
    type: MENU_ITEM_ACTIVE,
    payload: menuItemActive,
  });
};
