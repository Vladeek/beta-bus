import styled from "styled-components";
import colors from "../../constants/colors";

const AuthInput = (type, placeholder) => {
  return (
    <>
      <Input type={type} placeholder={placeholder}></Input>
    </>
  );
};

const Input = styled.input`
  :focus {
    color: ${colors.white};
  }
`;

export default AuthInput;
