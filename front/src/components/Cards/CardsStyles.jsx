import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;

  @media (max-width: 1400px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 1060px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const CharacterCard = styled.div`
  width: 300px;
  height: 350px;
  margin-bottom: 20px;
  border: 2px solid #68686849;
  border-radius: 8px;
  overflow: hidden;
  background-color: #243763;
  color: white;
  position: relative;
  box-shadow: 0px 0px 10px 2px #6868687b;
  transition: ease 0.2s;
  animation: fadeIn 0.8s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.div`
  background-color: rgb(184, 4, 4);
  z-index: 1;
  border-radius: 8px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0.3rem;
  left: 16.8rem;
  cursor: pointer;
  color: white;
  align-items: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  transition: ease 0.2s;

  &:hover {
    background-color: rgb(124, 2, 2);
  }
`;

export const ClickedFavoriteButton = styled.div`
  background-color: rgba(109, 104, 104, 0.733);
  z-index: 1;
  border-radius: 8px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0.3rem;
  right: 16.8rem;
  cursor: pointer;
  color: white;
  align-items: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  transition: ease 0.5s;
  font-size: 14px;

  &:hover {
    background-color: rgba(83, 77, 77, 0.863);
  }

  div {
    transition: ease 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const UnclickedFavoriteButton = styled.div`
  background-color: rgba(109, 104, 104, 0.733);
  z-index: 1;
  border-radius: 8px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0.3rem;
  right: 16.8rem;
  cursor: pointer;
  color: white;
  align-items: center;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  transition: ease 0.5s;
  font-size: 14px;

  &:hover {
    background-color: rgba(83, 77, 77, 0.863);
  }

  div {
    transition: ease 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const NameAndSpecie = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 15px;
  height: 13%;
`;

export const InfoText = styled.span`
  font-weight: 400;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardName = styled.h2`
  position: absolute;
  bottom: 4rem;
  padding: 4px;
  background-color: #585858c6;
  color: white;
  width: fit-content;
  display: flex;
`;
