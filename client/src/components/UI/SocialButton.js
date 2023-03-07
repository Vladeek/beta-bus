import styled from "styled-components";
import colors from "../../constants/colors";
import Icon from "./Icon";

const SocialButton = ({ text, style, icon, iconName, iconStyle, ...props }) => {
  return (
    <Button style={style} {...props}>
      {!!icon && <Icon icon={iconName} iconStyle={iconStyle}></Icon>}
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 18px;
  color: ${colors.lightBlue};
  min-width: 458px;
  min-height: 62px;
  background-color: ${colors.white};
  border: 0;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
  transition: all ease 0.3s;
  &:hover {
    color: ${colors.white};
    background-color: ${colors.blue};
    cursor: pointer;
  }
`;

export default SocialButton;
