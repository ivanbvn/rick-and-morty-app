import styled from "styled-components";

export const ComponentContainer = styled.div`
  height: 30rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`

export const Title = styled.div`
  h1 {
    height: 5rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 5rem;
    color: transparent;

    &::before {
      content: attr(data-text);
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      border-right: 0.3rem solid black;
      color: #611919;
      white-space: nowrap;
      overflow: hidden;
      animation: animate 2s linear;
    }

    @media (max-width: 670px) {
    font-size: 4rem;
    }

    @media (max-width: 500px) {
    font-size: 3rem;
    }
  }

  @keyframes animate {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  
`

export const Subtitle = styled.span`
  text-align: center;
  
  span {
    font-size: 25px;
  }
`

export const TecnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 2rem;
`

export const TecnologieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  height: 70px;
  background-color: white;
  overflow: hidden;
  border-radius: 25px;
  transition: ease-out 0.3s;

  &:hover {
    height: 120px;
  }
`

export const TecnologieName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 18px;
  width: 80px;
  height: 100%;
`

export const TecnologieImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3px;
`

export const ContactIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 600;
  }

  .linkedin-button {
    &:hover {
      width: 200px;
    }
  }
  .github-button {
    &:hover {
      width: 150px;
    }
  }
  .gmail-button {
    &:hover {
      width: 300px;
    }
  }
`

export const ContactButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 15px;
  transition: ease-out 0.3s;
  overflow: hidden;
`

export const ContactImage = styled.div`
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;

    img {
      width: 40px;
      height: 40px;
    }
`

export const ContactText = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 10px;
    line-height: 50px;
`