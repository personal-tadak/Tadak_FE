import styled from "@emotion/styled";

export const NoTokenHeader = () => {
  return <Container></Container>;
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
