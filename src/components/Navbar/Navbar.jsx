import { Wrapper, Content } from "./Navbar.styles"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

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
            >
              Toggle
            </button>
            <button
              type="button"
              onClick={toggleNavList}
              className="nav__hamburger"
              aria-label='toggle navigation'
            >
              {showNavList ? <IoMdClose /> : <IoMdMenu />}
            </button>
            
        </nav>
      </Content>
    </Wrapper>
  )
}

export default Navbar