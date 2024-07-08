import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Wrapper } from './ScrollToTop.styles';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

   return isVisible ? (
        <Wrapper>
            <div className='scroll-top'>
                <a href='#top'>
                    <FaArrowUp fontSize='large' />
                </a>
            </div>
        </Wrapper>
    ) : null  
  
}

export default ScrollToTop