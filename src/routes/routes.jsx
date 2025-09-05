import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../component/Layout/Layout";
import {
  Checkout,
  Home,
  ProductCategory,
  ProductGrid,
  ShoppingCart,
  SingleProduct,
} from "../screen";
import React from "react";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {appRoutes.map((route, i) => (
            <Route
              path={route?.path}
              element={<Layout>{route?.component}</Layout>}
              key={i}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;

export const appRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/product",
    component: <SingleProduct />,
  },
  {
    path: "/cart",
    component: <ShoppingCart />,
  },
  {
    path: "/checkout",
    component: <Checkout />,
  },
  {
    path: "/category",
    component: <ProductCategory />,
  },
  {
    path: "/productgrid",
    component: <ProductGrid />,
  },
];
