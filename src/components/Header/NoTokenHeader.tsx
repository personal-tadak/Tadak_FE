import styled from "@emotion/styled";
import HeaderLogo from "../../assets/HeaderLogo.svg";

export const NoTokenHeader = () => {
  return (
    <Container>
      <img src={HeaderLogo} alt="logo" style={{ marginLeft: "313px" }} />
    </Container>
  );
};

const Container = styled.header`
  width: 1920px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;
