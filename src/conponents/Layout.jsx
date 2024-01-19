import React, { useState } from "react";
import NavPage from "./NavPage";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div>
      {" "}
      <NavPage />
      {children}
      <Footer />
    </div>
  );
}
