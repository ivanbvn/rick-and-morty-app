import styled from "styled-components";

export const ComponentContainer = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 390px) {
    margin-bottom: 8rem;
  }
`

export const CharacterContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  justify-content: space-between;
  background-color: #cccccca7;
  border-radius: 10px;
  box-shadow: 3px 3px 8px 2px black;

  button {
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    color: black;
    background-color: #f53c3c;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid black;
    transition: 0.10s;

    &:hover {
      border-color: black;
      background-color: #a51616;
      color: white;
    }
  }

  @media (max-width: 600px) {
    height: fit-content;
    gap: 15px;
  }

  @media (max-width: 370px) {
    padding: 15px;
  }
`

export const CharacterInfoContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  animation: slideToTop 1.2s;

  @keyframes slideToTop {
    from {
      transform: translateY(200px);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`

export const CharacterInfo = styled.div`
  height: fit-content;
  border-radius: 5px;
  padding: 15px;
  justify-content: center;
  gap: 1.8rem;
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: auto auto;
  background-color: #614124b7;
  box-shadow: 0px 0px 4px 1px black;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

`

export const CharacterImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 1rem;
    border: 1px solid black;
    box-shadow: 0px 0px 4px 1px black;
  }
`

export const CharacterName = styled.div`
  animation: slideToRight 1.2s;

  @keyframes slideToRight {
    from {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(0);
    }
  }

  h1 {
    width: fit-content;
    padding: 0.5rem;
    background-color: #58585890;
    /* border: 1px solid black; */
    border-radius: 10px;
    box-shadow: 0px 0px 4px 1px black
  }
`

export const GifContainer = styled.div`
  img {
    opacity: 0.8;
    max-width: 300px;
    border-radius: 20px;
    box-shadow: 1px 1px 10px 5px black;
  };
`

