import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { SliderItem } from "./Registration";
import { MainContainer } from "./Registration";
import { SignUpContainer } from "./Registration";
import { SliderContainer } from "./Registration";
import { SliderTitle } from "./Registration";
import { FormContainer } from "./Registration";
import { FormTitle } from "./Registration";
import { Link } from "./Registration";

const Login = (props) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainContainer>
      <SignUpContainer>
        <SliderContainer>
          <SliderTitle>
            Plan Your Activities
            <br /> So you can Launch High
          </SliderTitle>
          <Slider {...settings}>
            <div>
              <h1>123213</h1>
            </div>
            <div>
              <h1>3333</h1>
            </div>
            <div>
              <h1>2222</h1>
            </div>
            {/* <SliderItem /> */}
          </Slider>
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
          <Button text={"Sign In"} style={{ marginTop: 43 }} social={false} />
          <Link
            onClick={() => {
              navigate("/registration");
            }}
          >
            Not registered yet?
          </Link>
          <Button
            text={"Sign in with Facebook"}
            social={true}
            icon={true}
            iconName={"facebook"}
          />
          <Button
            text={"Sign in with Twitter"}
            social={true}
            icon={true}
            iconName={"twitter"}
          />
          <Button
            social={true}
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
