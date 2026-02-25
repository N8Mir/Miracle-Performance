import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import MobileStickyCTA from "./components/MobileStickyCTA.jsx";
import ScrollManager from "./components/ScrollManager.jsx";

import HomePage from "./pages/HomePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import FreeWeekPage from "./pages/FreeWeekPage.jsx";
import RedwavePage from "./pages/RedwavePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-white text-gray-900 pb-20 md:pb-0">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/free-week" element={<FreeWeekPage />} />
          <Route path="/redwave" element={<RedwavePage />} />
        </Routes>
        <SiteFooter />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  );
}
