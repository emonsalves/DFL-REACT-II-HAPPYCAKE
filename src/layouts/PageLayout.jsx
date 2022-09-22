import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Footer from "./Footer"
import Header from "./Header"

function PageLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default PageLayout
