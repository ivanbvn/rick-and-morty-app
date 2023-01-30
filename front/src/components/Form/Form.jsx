import React, { useState } from 'react'
import { FooterContainer, CardContainer, Input, LoginText, FormContainer, Container, Label, Button, FooterText, IconsContainer, ComponentContainer } from './FormStyles'
import { validation } from './validation'

const Form = (props) => {

  const { login } = props

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUserData({
      ...userData,
      [name]: value
    })
    setErrors(
      validation({
        ...userData,
        [name]: value
      })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <ComponentContainer>
      <CardContainer>
        <LoginText>LOGIN</LoginText>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <Container>
              <Label htmlFor="username">Username: </Label>
              <Input
                type="text"
                name='username'
                onChange={handleInputChange}
                value={userData.username}
                className={errors.username && 'error'}
              />
              {errors.username && <span>{errors.username}</span>}
            </Container>
            <Container>
              <Label htmlFor="password">Password: </Label>
              <Input
                type="password"
                name='password'
                onChange={handleInputChange}
                value={userData.password}
                className={errors.password && 'error'}
              />
              {errors.password && <span>{errors.password}</span>}
            </Container>
            <div>
              <Button type='submit'>LOGIN</Button>
            </div>
          </div>
        </FormContainer>
        <FooterContainer>
          <div>
            <hr />
            <span>OR</span>
          </div>
          <IconsContainer>
            <img src="https://img.icons8.com/color/38/google-logo.png" alt="" />
            <img src="https://img.icons8.com/ios-glyphs/38/github.png" alt="" />
            <img src="https://img.icons8.com/color/38/linkedin-circled--v4.png" alt="" />
          </IconsContainer>
          <FooterText>Nedd an account? <a href='/register'>SIGN UP</a></FooterText>
        </FooterContainer>
      </CardContainer>
    </ComponentContainer>
  )
}

export default Form