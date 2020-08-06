const CURRENT_STATE_PRODUCT = "CURRENT_STATE_PRODUCT";

const initialData = {
  products: [
    {
      name: "bananamilk",
      subcategories: [
        {
          name: "ORIGINAL BANANAMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/12/1908P_MOO_48oz_Bananamilk_Original_Fortified-1-2.png",
          color: "bananamilk",
        },
        {
          name: "CHOCOLATE BANANAMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/12/1908P_MOO_48oz_Bananamilk_Original_Fortified-1-2.png",
          color: "bananamilk",
        },
        {
          name: "STRAWBERRY BANANAMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/12/1908P_MOO_48oz_Bananamilk_Original_Fortified-1-2.png",
          color: "bananamilk",
        },
      ],
      active: true,
    },
    {
      name: "almondmilk",
      subcategories: [
        {
          name: "ORIGINAL ALMONDMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2020/01/1908P_MOO_48oz_Almondmilk_Original_Fortified-1.png",
          color: "almondmilk",
        },
        {
          name: "VANILLA BEAN ALMONDMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2020/01/1908P_MOO_48oz_Almondmilk_Original_Fortified-1.png",
          color: "almondmilk",
        },
        {
          name: "UNSWEETENED ALMONDMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2020/01/1908P_MOO_48oz_Almondmilk_Original_Fortified-1.png",
          color: "almondmilk",
        },
      ],
      active: false,
    },
    {
      name: "creamers",
      subcategories: [
        {
          name: "Vanilla Bean Plant-Based Creamer",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/05/banana-nut.png",
          color: "creamers",
        },
        {
          name: "Banana Nut Plant-Based Creamer",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/05/banana-nut.png",
          color: "creamers",
        },
        {
          name: "Oats ‘n’ Crème Plant-Based Creamer",
          urlImage:
            "https://mooala.com/wp-content/uploads/2019/05/banana-nut.png",
          color: "creamers",
        },
      ],
      active: false,
    },
    {
      name: "coconutoatmilk",
      subcategories: [
        {
          name: "COCONUT OATMILK",
          urlImage:
            "https://mooala.com/wp-content/uploads/2020/03/Mooala_48oz_Oatmilk_Unsweet_Coconut_Fortified_01.png",
          color: "coconutoatmilk",
        },
      ],
      active: false,
    },
  ],
};

export default function ProductsDataReducer(state = initialData, action) {
  switch (action.type) {
    case CURRENT_STATE_PRODUCT: {
      console.log("state.products", state.products);
      console.log("action.payload", action.payload);
      const itemIndex = action.payload;
      const newProducts = state.products.map((item, i) => {
        return i === itemIndex
          ? {
              ...item,
              active: true,
            }
          : {
              ...item,
              active: false,
            };
      });
      return {
        ...state,
        products: newProducts,
      };
    }
    default:
      return state;
  }
}

export const updateProductsNavStateActios = (index) => async (dispatch) => {
  console.log("index", index);
  dispatch({
    type: CURRENT_STATE_PRODUCT,
    payload: index,
  });
};
