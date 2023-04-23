import { Container } from "./style";
import logo from "../../img/logo.png";
import Button from "../../components/Button";
import Search from "../../components/Search";

export const Home = () => {
  return (
    <Container>
      <div className="logo-box">
        <img src={logo} alt="" />
      </div>
      <div className="inputs-box">
        <Button>+</Button>
        <Search />
      </div>
      <div>
        <table>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
          </tr>
        </table>
      </div>
    </Container>
  );
};
