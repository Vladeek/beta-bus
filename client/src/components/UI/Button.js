import styled from "styled-components";
import colors from "../../constants/colors";

const Button = ({ text, style }) => {
  return <MainButton style={style}>{text}</MainButton>;
};

const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 460px;
  min-height: 67px;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 18px;
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

export default Button;
