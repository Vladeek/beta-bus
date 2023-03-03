import styled from "styled-components";

import SocialButton from "../components/UI/SocialButton";
import Input from "../components/UI/Input";
import InputLabel from "../components/UI/Label";
import Button from "../components/UI/Button";
import colors from "../constants/colors";

const Login = (props) => {
  return (
    <Container>
      <InputLabel></InputLabel>
      <Input></Input>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray};
`;

export default Login;
