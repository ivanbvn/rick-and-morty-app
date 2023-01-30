import styled from "styled-components";

export const ComponentContainer = styled.div`
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

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 22px;

  select {
    cursor: pointer;
    width: 9rem;
    padding: 10px;
    font-size: 16px;
    color: #5e5237;
    background-color: #e4c888a4;
    border-radius: 8px;
    font-weight: 600;

    &:focus {
      outline: none;
    }

    option {
      font-size: 16px;
      font-weight: 600;
    }

  }

  @media (max-width: 370px) {
    gap: 1rem;
  }
`;
