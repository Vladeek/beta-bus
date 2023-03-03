import styled from "styled-components";
import colors from "../../constants/colors";

const AuthInput = ({ type, placeholder, labelText }) => {
  return (
    <InputContainer>
      <Label>{labelText}</Label>
      <Input type={type} placeholder={placeholder}></Input>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
`;

const Label = styled.div`
  margin-bottom: 10px;
  color: ${colors.white};
  font-weight: 600;
  font-size: 20px;
`;

const Input = styled.input`
  background-color: ${colors.blue};
  border: 0;
  border-bottom: 2px solid ${colors.white};
  border-left: 2px solid ${colors.white};
  width: 420px;
  height: 35px;
  :focus {
    color: ${colors.white};
  }
  ::placeholder {
    padding: 4px 244px 15px 45px;
    color: ${colors.gray};
    opacity: 0.5;
    font-size: 14px;
  }
`;

export default AuthInput;
