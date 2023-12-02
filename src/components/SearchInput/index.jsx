import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';

export function SearchInput() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  async function toggleSearch() {
    navigate(`/search-results/${search}`);
  }

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleSearch();
    }
  };

  return (
    <Input
      icon={(props) => <IoIosSearch {...props} onClick={toggleSearch} />}
      placeholder="Pesquisar pelo título do prato ou ingrediente"
      onChange={(e) => setSearch(e.target.value)}
      onKeyPress={handleEnterKeyPress}
    />
  );
}
