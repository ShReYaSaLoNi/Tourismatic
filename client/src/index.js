import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import VedioSteps from "views/pages/VedioSteps.js";
import ProfilePage from "views/pages/ProfilePage.js";
import ArtistProfilePage from "views/pages/ArtistProfilePage";
import LoginPage from "views/pages/LoginPage.js";
import SignupPage from "views/pages/SignupPage";
import System from "views/pages/System.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/vedio-steps" element={<VedioSteps />} />
      <Route path="/sys-page" element={<System />} />
      <Route path="/users/:userId" element={<ProfilePage />} />
      <Route path="/influencers/:userId" element={<ArtistProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
