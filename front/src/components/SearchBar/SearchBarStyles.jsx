import styled from "styled-components";

export const SearchContainer = styled.div`
   width: fit-content;
   display: flex;
   align-items: center;
   gap: 10px;

   @media (max-width: 970px) {
      flex-direction: column;
   }
`

export const SearchInput = styled.input`
   width: 10rem;
   padding: 6px 12px;
   background-color: #FFAE6D;
   border-radius: 6px;
   font-size: 15px;
   transition: 0.4s;
   border: 2px solid #FFAE6D; 

   &:hover {
      border-color: #F9975D;
   }

   &:focus {
      outline: none;
      border-color: #cf7b43;
      background-color: #cf7b43;
   }

   &:focus::placeholder {
      color: #0000007f
   }

   @media (max-width: 600px) {
      width: 6rem;

      &::placeholder {
         color: transparent;
      }

      &:focus::placeholder {
         color: transparent;
      }
   }

   @media (max-width: 395px) {
      width: 5rem;
   }
`

export const Button = styled.button`
   cursor: pointer;
   width: 6rem;
   height: 2.1rem;
   border-radius: 8px;
   font-size: 18px;
   font-weight: 600;
   background-color: #FFB26B;
   color: black;
   transition: 0.2s;
   border: 2px solid #FFB26B;

   &:hover {
      border-style: solid;
      outline: none;
      color: #ffffff;
      border-color: #d8633f;
      background-color: #d8633f;
   }

   @media (max-width: 970px) {
      width: 100%;
   }

   @media (max-width: 395px) {
      font-weight: 500;
   }
`