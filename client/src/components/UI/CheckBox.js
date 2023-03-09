import styled from "styled-components";
import colors from "../../constants/colors";

const CheckBox = ({ text, style }) => {
  return (
    <TermsCheckBox>
      <input type="checkbox" />
      <label style={style}>{text}</label>
    </TermsCheckBox>
  );
};

const TermsCheckBox = styled.div`
  margin-top: 40px;
  text-decoration: underline;
  color: ${colors.white};
`;

export default CheckBox;
