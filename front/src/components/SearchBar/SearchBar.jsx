import { useState } from "react";
import { Button, SearchContainer, SearchInput } from "./SearchBarStyles";

export default function SearchBar(props) {

   const { onSearch, onRandomCharacter } = props

   const [characterName, setCharacterName] = useState('')

   const handleInputChange = (event) => {
      setCharacterName(event.target.value)
   }

   return (
      <SearchContainer>
         <SearchInput type='search' placeholder='Search by ID...' onChange={handleInputChange} />
         <Button onClick={() => onSearch(characterName)}>Search</Button>
         <Button onClick={onRandomCharacter}>Random</Button>
      </SearchContainer>
   );
}
