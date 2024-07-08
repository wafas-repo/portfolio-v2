import { CONTACT as contact } from "../../information";
import { Wrapper, Button } from "./Contact.styles";

const Contact = () => {
  if (!contact.email) return null
  return (
    <Wrapper>
        <section className="contact--section" id='contact'>
        <h2 className='section__title'>Contact</h2>
        <Button>
            <a href={`mailto:${contact.email}`}>
                <span type='button' className='btn btn--outline'>
                Email me
                </span>
            </a>
        </Button>
        </section>
    </Wrapper>
  )
}

export default Contact