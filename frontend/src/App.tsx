import Home from "./component/admin/Home";
import Account from "./component/admin/Account";
import Product from "./component/admin/Product";

import HomeUser from "./component/user/HomeUser";

import Login from "./component/auth/Login";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "admin", element: <Home /> },
  { path: "admin/account", element: <Account /> },
  { path: "admin/product", element: <Product /> },

  { path: "user", element: <HomeUser /> },

  { path: "login", element: <Login /> },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
