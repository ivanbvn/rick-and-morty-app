import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #614124e1;
  height: 80px;
  /* width: 100%; */
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  margin-bottom: 22px;
  border-radius: 10px;
  position: sticky;
  top: 25px;

  @media (max-width: 970px) {
    /* display: grid; */
    /* grid-template-columns: auto auto; */
    height: 150px;
    justify-content: space-evenly;
    padding: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 6rem;
  height: 2.1rem;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  background-color: #ffb26b;
  color: black;
  transition: 0.2s;
  border: 2px solid #ffb26b;

  &:hover {
    border-style: solid;
    outline: none;
    color: #ffffff;
    border-color: #d8633f;
    background-color: #d8633f;
  }

  &.active {
    border-style: solid;
    outline: none;
    color: #ffffff;
    border-color: #d8633f;
    background-color: #d8633f;
  }

  &.logout {
    background-color: #bd1111;
    border-color: #bd1111;
    color: white;

    &:hover {
      background-color: #940f0f;
      border-color: #940f0f;
    }
  }

  @media (max-width: 970px) {
    width: 10rem;
  }

  @media (max-width: 600px) {
    width: 6rem;
  }

  @media (max-width: 395px) {
    width: 5rem;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

export const FirstContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 970px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
