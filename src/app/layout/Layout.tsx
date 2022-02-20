import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";
import { styled } from "@mui/system";

const Container = styled("div")({
  minHeight: 200,
});

function Layout() {
  return (
    <div className="bg-gray-100">
      <Appbar />

      <Container className="">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
}

export default Layout;
