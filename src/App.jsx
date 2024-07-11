
import { ThemeProvider} from './Contexts/theme';
import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { GlobalStyle } from './GlobalStyle';

const App = () => {

  return (
    <ThemeProvider>
      <div id="top">
        <GlobalStyle />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
