import Navbar from "../Navbar/Navbar"
import { Wrapper, Content } from "./Header.styles"
const Header = () => (
  <Wrapper>
    <Content>
      <h3>
        <a className="link" href="">WQ.</a>
      </h3>
      <Navbar />
    </Content>
  </Wrapper>
)

export default Header