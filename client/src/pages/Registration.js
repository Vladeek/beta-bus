import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SocialButton from "../components/UI/SocialButton";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import CheckBox from "../components/UI/CheckBox";
import colors from "../constants/colors";

const socialButtonStyle = {};
const marginTop20 = {
  marginTop: "20px",
};
const marginTop30 = {
  marginTop: "30px",
};

const Registration = (props) => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <SignUpContainer>
        <SliderContainer>
          <SliderTitle>Plan Your Activities So you can Launch High</SliderTitle>
          <Slider></Slider>
          <Dots></Dots>
        </SliderContainer>
        <FormContainer>
          <FormTitle>Sign Up or Login</FormTitle>
          <Input
            style={marginTop20}
            labelText={"Fullname"}
            type={"text"}
            placeholder={"Enter your Fullname"}
          ></Input>
          <Input
            style={marginTop20}
            labelText={"Password"}
            type={"password"}
            placeholder={"**********************"}
          ></Input>
          <Input
            style={marginTop20}
            labelText={"E-mail"}
            type={"email"}
            placeholder={"Enter your E-mail Address"}
          ></Input>
          <CheckBox text={"I agree to  all the Terms & Conditions"}></CheckBox>
          <Button text={"Sign Up"} style={{ marginTop: 43 }}></Button>
          <Link
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account?
          </Link>
          <SocialButton
            style={marginTop30}
            text={"Sign up with Facebook"}
            icon={true}
            iconName={"facebook"}
            iconStyle={socialButtonStyle}
          ></SocialButton>
          <SocialButton
            style={marginTop30}
            text={"Sign up with Twitter"}
            icon={true}
            iconName={"twitter"}
            iconStyle={socialButtonStyle}
          ></SocialButton>
          <SocialButton
            style={marginTop30}
            text={"Sign up with Google"}
            icon={true}
            iconName={"google"}
            iconStyle={socialButtonStyle}
          ></SocialButton>
        </FormContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: "Open Sans";
`;

const SignUpContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 100%;
  border-radius: 15px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: ${colors.white};
`;

const SliderTitle = styled.div`
  width: 430px;
  margin-top: 86px;
  color: ${colors.lightBlue};
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.09em;
  text-align: center;
  opacity: 0.75;
`;

const Slider = styled.div`
  width: 430px;
  height: 645px;
  margin-top: 33px;
  background: url("https://ruseller.com/css/images/header1.jpg");
`;

const Dots = styled.div`
  background: url("../assets/img/dots.png");
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  background-color: ${colors.blue};
`;

const FormTitle = styled.div`
  margin-top: 34px;
  font-weight: 700;
  font-size: 25px;
  color: ${colors.gray};
  opacity: 0.8;
`;

const Link = styled.a`
  margin-top: 40px;
  text-decoration: underline;
  color: ${colors.white};
  :hover {
    cursor: pointer;
  }
`;

export default Registration;
