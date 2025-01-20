import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Produtos/ProdutosLista.js";
import Form from "../pages/Produtos/produtoform.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/CadastrarProduto",
    element: <Form />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
