import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EabXVMain from "../ClubsMain/EabXVMain";
import Home from "../Home/Home";
import NantesMain from "../ClubsMain/NantesMain";
import HavreMain from "../ClubsMain/HavreMain";
import Layout from "../Components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EABXV" element={<EabXVMain />} />
          <Route path="/Nantes" element={<NantesMain />} />
          <Route path="/Havre" element={<HavreMain />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
