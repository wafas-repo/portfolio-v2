import { Wrapper } from "./Footer.styles";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  return (
    <Wrapper>
        <footer>
            <a className='link footer__link' href="">
                Created By Wafa Qazi
            </a>

        </footer>
            <ScrollToTop />
    </Wrapper>
  )
}

export default Footer