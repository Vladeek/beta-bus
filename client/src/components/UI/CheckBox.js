import styled from "styled-components";
import colors from "../../constants/colors";

const CheckBox = ({ text }) => {
  return (
    <CheckTerm>
      <input type="checkbox" name="scales" />
      <label style={{ marginLeft: 20 }}>{text}</label>
    </CheckTerm>
  );
};

const CheckTerm = styled.div`
  margin-top: 40px;
  text-decoration: underline;
  color: ${colors.white};
`;

export default CheckBox;
