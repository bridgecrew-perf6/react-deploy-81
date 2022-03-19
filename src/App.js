import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <HashRouter>
      <NavBar />
        <Routes>
          <Route element={<Header/>} path='/' exact />
          <Route element={<About/>} path='/about' />
          <Route element={<Projects/>} path='/projects' />
          <Route element={<Contact/>} path='/contact' />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  )
}

export default App;

