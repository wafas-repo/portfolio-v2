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
                    <a href="#About">
                        About
                    </a>
                </li>
                <li className="nav__list-item">
                  <a href="#Projects">
                  Projects
                  </a>
                  
                </li>
                <li className="nav__list-item">
                  <a href="#Contact">
                  Contact
                  </a>
                  
                </li>
            </ul>
            <button>Toggle</button>
            <button
              type="button"
              onClick={toggleNavList}
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