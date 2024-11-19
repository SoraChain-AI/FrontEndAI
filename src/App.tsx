// import Page from "./components/Page";
// import React from "react";
import { Routes, Route } from "react-router-dom";
import { SoraChainDashboard } from "./components/DashBoard/SoraChainDashboard";
import { Home } from "./components/Home/Home";

function App() {
  // return <Page />;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<SoraChainDashboard />} />
    </Routes>
  );
}
export default App;
