import { Routes, Route } from "react-router-dom"
import AboutMe from "./sreens/about"
import ContactMe from "./sreens/contact"
import HomeScreen from "./sreens/home"
import NavScreen from "./sreens/navbar"
import MyWorks from "./sreens/works"
import './styles/reset.css'
import './styles/index.css'
import './styles/home.css'
import "./styles/about.css"
import "./styles/contact.css"
import "./styles/works.css"
import "./styles/all.css"
import AllWorks from "./sreens/allworks"

function App() {

  return (
    <div className="parent">
      <NavScreen />
      <div className="children">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/works" element={<MyWorks />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/allworks" element={<AllWorks />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
