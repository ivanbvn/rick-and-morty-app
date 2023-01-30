import styled from "styled-components";

export const ComponentContainer = styled.div`
  height: 100%;
  display: flex;
`

export const CardContainer = styled.div`
  width: 15rem;
  height: 25rem;
  margin: auto;
  display: flex;
  align-items: baseline;
  background-color: #ffffff;
  /* justify-content: space-evenly; */
  flex-direction: column;
  border-radius: 12px;
  padding: 35px 40px;
  box-sizing: content-box;
  /* border: 1px solid #ccc; */
  box-shadow: 0px 0px 1px 1px #ccc;
  animation: fadeIn 1s;

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`

export const LoginText = styled.span`
  font-size: 19px;
  font-weight: 500;
  display: flex;
  justify-content: baseline;
  margin-bottom: 0.5rem;
  animation: upDown 1s;

  @keyframes upDown {
    from {
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const FormContainer = styled.form`
  animation: upDown 1s;

  @keyframes upDown {
    from {
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const Container = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;

  span {
    font-size: 13px;
    display: flex;
    justify-content: center;
    margin-top: -5px;
    color: red;
  }
`

export const Input = styled.input`
  padding: 10px 8px;
  display: flex;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  outline: none;
  border: 2px solid lightgray;
  transition: 0.5s;

  &:focus {
    outline: none;
    border-color: #FF8B13;
  }

  &.error {
    border-color: red;
  }

`

export const Label = styled.label`
  display: flex;
  font-size: 16px;
`

export const Button = styled.button`
  cursor: pointer;
  width: 15rem;
  padding: 10px 0;
  border-radius: 6px;
  border: none;
  background-color: #FF8B13;
  color: white;
  box-shadow: 1px 1px 4px 1px #88888881;
  margin-top: 10px;
`

export const FooterContainer = styled.div `
  height: 100%;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;  
  margin-bottom: 5px;
  animation: slideToTop 1s;

  @keyframes slideToTop {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0);
    }
  }

  div {
    width: 100%;
    padding: 6px;
    /* display: flex; */
    /* align-items: center; */
  }

  div hr {
    border-color: #e7e7e761;
  }

  div span {
    position: relative;
    bottom: 14px;
    left: 6.8rem;
    border: 1px solid #ccccccca;
    background-color: white;
    color: #ccccccca;
    border-radius: 6px;
  }

`

export const IconsContainer = styled.div `
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 12px;

    img {
      cursor: pointer;
    }
` 

export const Hr = styled.hr`
  margin: 12px 0;
`

export const FooterText = styled.span`
  font-size: 14px;

  a {
    color: black;
  }

`