import React from "react"

// Components and Pages:
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

// Styles:
import GlobalStyles from "./components/GlobalStyles"

// Routing:
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path={"game/:id"} element={<Home />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
