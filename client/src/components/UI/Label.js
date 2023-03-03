import styled from "styled-components";
import colors from "../../constants/colors";

const InputLabel = (labelText) => {
  return (
    <>
      <Label>{labelText}</Label>
    </>
  );
};

const Label = styled.div`
  color: ${colors.black};
  font-weight: 600;
  font-size: 20px;
`;

export default InputLabel;
