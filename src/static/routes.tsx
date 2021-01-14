import Contacts from "components/pages/Contacts";
import Main from "components/pages/Main";
import Cart from "components/pages/Cart";
import Item from "components/pages/Item";
import Search from "components/pages/Search";
import Checkout from "components/pages/Checkout";
import Category from "components/pages/Category";
import Final from "components/pages/Final";

interface IRoute {
  path: string;
  name?: string;
  component: React.FC;
  exact?: boolean;
}

export const menuRoutes: IRoute[] = [
  {
    path: "/contacts",
    name: "Контакты",
    component: Contacts,
  }
];

export const routes: IRoute[] = [
  ...menuRoutes,
  {
    path: "/search/:query",
    component: Search,
  },
  {
    path: "/item/:id",
    component: Item,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/categories/:category",
    component: Category,
  },
  {
    path: "/final",
    component: Final,
  },
  {
    path: "/",
    component: Main,
    exact: true,
  },
];
