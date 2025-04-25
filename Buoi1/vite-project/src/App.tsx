import Home from "./component/Home/Home"
import Account from "./component/Account/Account"
import Product from "./component/Product/Product"


import React from "react";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import { useState } from 'react'

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/account", element: <Account/>},
  {path: "/product", element: <Product/>},
])

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
