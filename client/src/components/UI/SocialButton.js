import styled from "styled-components";
import iconSet from "../../assets/icons/beta-bus.json";
import IcomoonReact from "icomoon-react";
import colors from "../../constants/colors";

const SocialButton = ({ text, style, icon, iconID, ...props }) => {
  return (
    <Button style={style} {...props}>
      {!!icon && <IcomoonReact style={Icon} iconSet={iconSet} icon={iconID} />}
      {text}
    </Button>
  );
};

const Icon = styled.img`
  width: 41px;
  height: 41px;
  margin-left: 21px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
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
