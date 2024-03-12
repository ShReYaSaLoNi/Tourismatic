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
import VedioSteps from "views/examples/VedioSteps.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ArtistProfilePage from "views/examples/ArtistProfilePage";
import LoginPage from "views/examples/LoginPage.js";
import SignupPage from "views/examples/SignupPage";
import System from "views/examples/System.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/vedio-steps" element={<VedioSteps />} />
      <Route path="/sys-page" element={<System />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/artistprofile-page" element={<ArtistProfilePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
