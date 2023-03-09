import styled from "styled-components";
import colors from "../../constants/colors";
import Icon from "./Icon";

const Button = ({
  text,
  style,
  hoverColor,
  icon,
  iconName,
  iconStyle,
  social,
  ...props
}) => {
  return (
    <MainButton style={style} {...props}>
      {!!icon && <Icon icon={iconName} style={iconStyle}></Icon>}
      {text}
    </MainButton>
  );
};

const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 460px;
  min-height: 67px;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: ${colors.blue};
  background-color: ${colors.white};
  border: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  transition: all ease 0.3s;
  &:hover {
    color: ${colors.white};
    background-color: ${colors.blue};
    cursor: pointer;
  }
`;

const SocialButton = styled(MainButton)`
  margin-top: 30px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.lightBlue};
  letter-spacing: normal;
  justify-content: space-evenly;
  &:hover {
    color: ${colors.white};
  }
`;

export default Button;
