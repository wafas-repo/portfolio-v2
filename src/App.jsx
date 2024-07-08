import About from "./components/About/About";
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import './App.css'

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div id='top'>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </div>
  )
}

export default App