import { useNavigate } from "react-router-dom";

import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import colors from "../constants/colors";
import { MainContainer } from "./Registration";
import { SignUpContainer } from "./Registration";
import { SliderContainer } from "./Registration";
import { SliderTitle } from "./Registration";
import { Slider } from "./Registration";
import { Dots } from "./Registration";
import { FormContainer } from "./Registration";
import { FormTitle } from "./Registration";
import { Link } from "./Registration";

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <SignUpContainer>
        <SliderContainer>
          <SliderTitle>
            Plan Your Activities
            <br /> So you can Launch High
          </SliderTitle>
          <Slider />
          <Dots />
        </SliderContainer>
        <FormContainer>
          <FormTitle>Sign Up or Login</FormTitle>
          <Input
            style={{ marginTop: 20 }}
            labelText={"Fullname"}
            type={"text"}
            placeholder={"Enter your Fullname"}
          />
          <Input
            style={{ marginTop: 20 }}
            labelText={"Password"}
            type={"password"}
            placeholder={"**********************"}
          />
          <Button text={"Sign In"} style={{ marginTop: 43 }} />
          <Link
            onClick={() => {
              navigate("/registration");
            }}
          >
            Not registered yet?
          </Link>
          <Button
            style={{
              marginTop: 30,
              borderRadius: "15px",
              fontWeight: 600,
              fontSize: "18px",
              color: colors.lightBlue,
              letterSpacing: "normal",
              justifyContent: "space-evenly",
            }}
            text={"Sign in with Facebook"}
            icon={true}
            iconName={"facebook"}
          />
          <Button
            style={{
              marginTop: 30,
              borderRadius: "15px",
              fontWeight: 600,
              fontSize: "18px",
              color: colors.lightBlue,
              letterSpacing: "normal",
              justifyContent: "space-evenly",
            }}
            text={"Sign in with Twitter"}
            icon={true}
            iconName={"twitter"}
          />
          <Button
            style={{
              marginTop: 30,
              borderRadius: "15px",
              fontWeight: 600,
              fontSize: "18px",
              color: colors.lightBlue,
              letterSpacing: "normal",
              justifyContent: "space-evenly",
            }}
            text={"Sign in with Google"}
            icon={true}
            iconName={"google"}
          />
        </FormContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

export default Login;
