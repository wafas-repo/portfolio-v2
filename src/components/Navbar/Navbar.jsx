import { Wrapper, Content } from "./Navbar.styles"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../../Contexts/theme";
import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const { themeName, toggleTheme } = useContext(ThemeContext);



  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <Wrapper>
      <Content>
        <nav className="centre">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <a className="link link--nav" href="#about">
                        about
                    </a>
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#projects">
                  projects
                    </a>
                  
                </li>
                <li className="nav__list-item">
                  <a className="link link--nav" href="#contact">
                    contact
                  </a>
                  
                </li>
            </ul>
            <button
              type="button"
                onClick={toggleTheme}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
              {themeName === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              type="button"
              onClick={toggleNavList}
              className="btn btn--icon nav__hamburger"
              aria-label='toggle navigation'
            >
              {showNavList ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            
        </nav>
      </Content>
    </Wrapper>
  )
}

export default Navbar