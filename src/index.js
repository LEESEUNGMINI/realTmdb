import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./conponents/router";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <ChakraProvider>
  <RouterProvider router={router} />
  // </ChakraProvider>
  // </React.StrictMode>
);
