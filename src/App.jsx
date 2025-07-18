import { useState } from 'react'
import './App.css'

import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <main>
        <Info/>
        <span id="long-info">
          <About/>
          <Interests/>
        </span>
        <Footer/>
      </main>
    </>
  )
}

export default App
