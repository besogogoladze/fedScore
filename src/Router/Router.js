import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import EabXVMain from "../ClubsMain/EabXVMain";
import Home from "../Home/Home";
import NantesMain from "../ClubsMain/NantesMain";
import HavreMain from "../ClubsMain/HavreMain";
import Layout from "../Components/Layout";

function Router() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fedScore/EABXV" element={<EabXVMain />} />
          <Route path="/fedScore/Nantes" element={<NantesMain />} />
          <Route path="/fedScore/Havre" element={<HavreMain />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default Router;
