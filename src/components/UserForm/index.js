import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Container from "./style";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/modules/users/actions";

const UserForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    phone: yup
      .string()
      .matches(
        "^(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])9[0-9]{8}$",
        "Número inválido"
      ),
    birth: yup.string(),
    city: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("http://127.0.0.1:5000/user", data)
      .then((response) => {
        console.log(response);
        dispatch(addUsers([data]));
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cleanForm = () => {
    reset({ name: "", email: "", phone: "", birth: "", city: "" });
    clearErrors();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="form-header">
          <h1>Inserir</h1>
          <button onClick={() => closeModal()}>x</button>
        </div>
        <div className="input-box">
          <label for="name">Nome:</label>
          <Input id="name" name="name" register={register} />
          <span>{errors.name?.message}</span>
        </div>
        <div className="input-box">
          <label for="email">E-mail:</label>
          <Input id="email" name="email" register={register} />
          <span>{errors.email?.message}</span>
        </div>
        <div className="two-inputs-box">
          <div className="input-box">
            <label for="phone">Telefone:</label>
            <Input id="phone" name="phone" register={register} />
            <span>{errors.phone?.message}</span>
          </div>
          <div className="input-box">
            <label for="birth">Data de Nascimento:</label>
            <Input id="birth" type="date" name="birth" register={register} />
            <span>{errors.birth?.message}</span>
          </div>
        </div>
        <div className="input-box">
          <label for="city">Cidade onde nasceu:</label>
          <Input id="city" name="city" register={register} />
          <span>{errors.city?.message}</span>
        </div>
        <div>
          <Button
            type="button"
            onClick={() => cleanForm()}
            className="form-button"
          >
            Limpar
          </Button>
          <Button type="submit" className="form-button">
            Enviar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default UserForm;
