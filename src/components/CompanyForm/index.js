import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Container from "./style";
import axios from "axios";
import { addCount } from "../../store/modules/count/actions";
import { useDispatch } from "react-redux";

const CompanyForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    cnpj: yup.string().required("CNPJ obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("http://127.0.0.1:5000/company", data)
      .then((response) => {
        console.log(response);
        dispatch(addCount());
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
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
          <label for="cnpj">CNPJ:</label>
          <Input id="cnpj" name="cnpj" register={register} />
          <span>{errors.cnpj?.message}</span>
        </div>
        <div className="input-box">
          <label for="address">address:</label>
          <Input id="address" name="address" register={register} />
          <span>{errors.address?.message}</span>
        </div>
        <div>
          <Button type="submit" className="form-button">
            Enviar
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CompanyForm;
