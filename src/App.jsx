import About from "./components/About/About";
import Header from "./components/Header/Header"
import Projects from "./components/Projects/Projects";

// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <GlobalStyle />
    </>
  )
}

export default App