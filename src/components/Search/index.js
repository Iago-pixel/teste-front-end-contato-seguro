import StyledForm from "./style";
import { useState } from "react";
import Input from "../Input";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("Nome");

  const handleChange = (set) => (e) => {
    set(e.target.value);
    console.log(`search: ${search}`);
    console.log(`searchType: ${searchType}`);
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitSearch}>
      <Input
        className="search-input"
        placeholder="Buscar..."
        onChange={handleChange(setSearch)}
        value={search}
        required
      />
      <select
        className="select-input"
        defaultValue={searchType}
        onChange={handleChange(setSearchType)}
        required
      >
        <option value="name">Nome</option>
        <option value="email">E-mail</option>
        <option value="phone">Telefone</option>
        <option value="birth">Nascimento</option>
        <option value="city">Cidade</option>
      </select>
    </StyledForm>
  );
};

export default Search;
