import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import MobileStickyCTA from "./components/MobileStickyCTA";
import ScrollManager from "./components/ScrollManager";

import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import FreeWeekPage from "./pages/FreeWeekPage";

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
        </Routes>

        <SiteFooter />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  );
}
