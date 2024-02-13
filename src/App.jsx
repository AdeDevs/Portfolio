import { Routes, Route } from "react-router-dom"
import AboutMe from "./sreens/about"
import ContactMe from "./sreens/contact"
import HomeScreen from "./sreens/home"
import NavScreen from "./sreens/navbar"
import MyWorks from "./sreens/works"

function App() {

  return (
    <div>
      <NavScreen />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/works" element={<MyWorks />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
