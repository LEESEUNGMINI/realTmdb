import React from "react";
import Layout from "../conponents/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "#721c24",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          페이지를 찾을 수 없습니다.
        </h1>
      </div>
    </Layout>
  );
}
