import InputStyled from "./style";

const Input = ({ name, register, ...rest }) => {
  return register ? (
    <InputStyled {...register(name)} {...rest} />
  ) : (
    <InputStyled {...rest} />
  );
};

export default Input;
