import StyledForm from "./style";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Search = ({ setSearch, setSearchType }) => {
  const formSchema = yup.object().shape({
    search: yup.string().required("Campo vazio"),
    searchType: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitSearch = ({ search, searchType }) => {
    setSearch(search);
    setSearchType(searchType);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitSearch)}>
      <Input
        name="search"
        register={register}
        className="search-input"
        placeholder="Buscar..."
        required
      />
      <select {...register("searchType")} className="select-input" required>
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
