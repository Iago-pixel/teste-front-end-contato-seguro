import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Container from "./style";

const UserForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    phone: yup
      .string()
      .matches(
        "^(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])9[0-9]{8}$"
      ),
    birth: yup.string(),
    city: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = () => {};

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="form-header">
          <h1>Inserir</h1>
          <button>x</button>
        </div>
        <div className="input-box">
          <label for="name">Nome:</label>
          <Input id="name" {...register("name")} />
          <span>{errors.name?.message}</span>
        </div>
        <div className="input-box">
          <label for="email">E-mail:</label>
          <Input id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>
        <div className="two-inputs-box">
          <div className="input-box">
            <label for="phone">Telefone:</label>
            <Input id="phone" {...register("phone")} />
            <span>{errors.phone?.message}</span>
          </div>
          <div className="input-box">
            <label for="birth">Data de Nascimento:</label>
            <Input id="birth" type="date" {...register("birth")} />
            <span>{errors.birth?.message}</span>
          </div>
        </div>
        <div className="input-box">
          <label for="city">Cidade onde nasceu:</label>
          <Input id="city" {...register("city")} />
          <span>{errors.city?.message}</span>
        </div>
        <div>
          <Button className="form-button">Limpar</Button>
          <Button type="submit" className="form-button">
            Enviar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UserForm;
