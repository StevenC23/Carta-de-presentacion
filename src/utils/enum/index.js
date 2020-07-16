import Home from "../../pages/Home/index";
import About from "../../pages/About/index";
import Works from "../../pages/Works/index";

export const ROUTS = [
  {
    id: 1,
    component: Home,
    path: "/",
  },
  {
    id: 2,
    component: About,
    path: "/about",
  },
  {
    id: 3,
    component: Works,
    path: "/works",
  },
];
