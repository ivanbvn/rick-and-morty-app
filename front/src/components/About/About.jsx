import React from 'react'
import { ComponentContainer, Title, ContactIconsContainer, ContactButton, TecnologiesContainer, TecnologieInfo, TecnologieImage, TecnologieName, Subtitle, ContactImage, ContactText } from './AboutStyles'

const About = () => {
  return (
    <ComponentContainer>

      <Title>
        <h1 data-text="Ivan Bilvinas">Ivan Bilvinas</h1>
      </Title>
      <Subtitle>
        <span>Proyecto desarrollado para la carrera de FullStack Developer del <strong><a href='https://www.soyhenry.com/'>bootcamp SoyHenry</a></strong>.</span>
      </Subtitle>

      <div>
        <h3>Tecnologias usadas:</h3>
      </div>

      <TecnologiesContainer>
        <TecnologieInfo>
          <TecnologieImage><img src="https://www.svgrepo.com/show/354262/react-router.svg" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>React Router</span></TecnologieName>
        </TecnologieInfo>
        <TecnologieInfo>
          <TecnologieImage><img src="https://www.svgrepo.com/show/306811/styled-components.svg" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>styled components</span></TecnologieName>
        </TecnologieInfo>
        <TecnologieInfo>
          <TecnologieImage><img src="https://www.svgrepo.com/show/353724/express.svg" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>Express.js</span></TecnologieName>
        </TecnologieInfo>
        <TecnologieInfo>
          <TecnologieImage><img src="https://img.icons8.com/color/64/react-native.png" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>React</span></TecnologieName>
        </TecnologieInfo>
        <TecnologieInfo>
          <TecnologieImage><img src="https://img.icons8.com/color/64/redux.png" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>React Redux</span></TecnologieName>
        </TecnologieInfo>
        <TecnologieInfo>
          <TecnologieImage><img src="https://img.icons8.com/fluency/64/node-js.png" alt="" style={{ width: '64px' }} /></TecnologieImage>
          <TecnologieName><span>Node.js</span></TecnologieName>
        </TecnologieInfo>
      </TecnologiesContainer>

      <div>
        <h3>Contacto:</h3>
      </div>

      <ContactIconsContainer>
        <a href="https://www.linkedin.com/in/ivan-bilvinas-5897331b7/">
          <ContactButton className='linkedin-button'>
            <ContactImage className='contact-image'><img src="https://img.icons8.com/color/38/linkedin-circled--v4.png" alt="Linkedin" /></ContactImage>
            <ContactText className='contact-text'><span>Ivan Bilvinas</span></ContactText>
          </ContactButton>
        </a>
        <a href="https://github.com/ivanbvn">
          <ContactButton className='github-button'>
            <ContactImage className="contact-image"><img src="https://img.icons8.com/ios-glyphs/38/github.png" alt="Github" /></ContactImage>
            <ContactText className='contact-text'><span>ivanbvn</span></ContactText>
          </ContactButton>
        </a>
        <ContactButton className='gmail-button'>
          <ContactImage className="contact-image"><img src="https://img.icons8.com/color/38/gmail--v1.png" alt="Gmail" /></ContactImage>
          <ContactText className="contact-text"><span>bilvinas.ivan@gmail.com</span></ContactText>
        </ContactButton>
      </ContactIconsContainer>

    </ComponentContainer>
  )
}

export default About