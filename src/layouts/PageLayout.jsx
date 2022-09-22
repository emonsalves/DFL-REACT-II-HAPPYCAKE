import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Footer from "./Footer"
import Header from "./Header"

function PageLayout() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default PageLayout
