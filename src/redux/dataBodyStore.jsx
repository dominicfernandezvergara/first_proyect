const CURRENT_DRAWER_STATE = "CURRENT_DRAWER_STATE";

const initialData = {
  ourStory: {
    title: "Our Story",
    subTitle:
      "We’re Mooala, and our mission is simple: to make outstanding, dairy-free beverages for you, and to benefit the greater good.",
    mainText:
      "Deep in the heart of Dallas, Texas, our founder Jeff embarked on a project to craft organic plant-based beverages uncompromised in both quality and taste. The process of making plant-based products is not easy or fast – but it sure is fun. Driven by lactose intolerance and a passion for happy, healthy brands, Jeff tinkered with innovative recipes and fun packaging until the products were finally worthy to “bear” the Mooala seal (see what we did there?). In 2016, he left corporate America forever to share Mooala with the world...and to get out of his cubicle.",
    mainImageUrl:
      "https://mooala.com/wp-content/uploads/2020/04/Mooala-wemakegoodness-03.png",
    secondarySubtitle: "Deep Down, We're all a little Nuts.",
    secondaryText:
      "We have a passion for fun, new dairy-free products that is unrivaled. We come home from our happy almondmilk jobs and have glorious bananamilk dreams. We managed to capture that joy in a bottle, and now we want to share it with you. After a sip, you might become a little obsessed yourself. And that’s OK – healthy obsessions are a good thing. Go nuts (or bananas)!",
    secondaryImageUrl:
      "https://mooala.wpengine.com/wp-content/uploads/2018/02/KoalaBanner.png",
    moreText: "",
  },
  helpUs: {
    title: "Support Local Trade",
    subTitle: "Help us spread the love!",
    mainText:
      "Mooala supports non-profit micro finance organizations in impoverished countries. These groups provide entrepreneurs and economies with a “hand up” – not a hand out – and provide tremendous support to communities in need. A portion of all of our profits go to support these organizations – thanks for helping us spread the love.",
    mainImageUrl:
      "https://mooala.wpengine.com/wp-content/uploads/2018/02/TexasSeal.png",
    secondarySubtitle: "",
    secondaryText:
      "Mooala is proudly owned and operated in the great State of Texas. By choosing our brand, you’re not just enjoying amazing plant-based beverages – you’re supporting local commerce. Thanks!",
    secondaryImageUrl: "",
    moreText: "",
  },
  BackgroundImageApp:
    "https://mooala.com/wp-content/uploads/2018/02/WoodBackground.jpg",
  dataPoliticFooter: [
    "TERMS OF USE & PRIVACY POLICY",
    "REQUEST MOOALA",
    "DOWNLOAD COUPON",
    "PRESS",
    "© Copyright 2019 Mooala Brands, LLC.",
  ],
};

export default function DataBodyReducer(state = initialData, action) {
  switch (action.type) {
    case CURRENT_DRAWER_STATE: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        drawerState: action.payload,
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
