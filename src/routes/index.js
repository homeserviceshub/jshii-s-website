import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
import AboutUs from "../pages/aboutUs";
import Gallery from "../pages/gallery";
import Services from "../pages/Services";
import Service from "../pages/Services/service";
import ContactUs from "../pages/contactUs";

export default function AppRoutes() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/:id" element={<Service />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
