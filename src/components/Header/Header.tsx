import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../style/color";

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  return (
    <Container>{isLoggedIn ? <TokenHeader /> : <NoTokenHeader />}</Container>
  );
};

const TokenHeader = () => {
  return (
    <GroupWrapper>
      <StyledLink to="#">타자연습</StyledLink>
      <StyledLink to="#">마이페이지</StyledLink>
      <LogoutBnt>로그아웃</LogoutBnt>
    </GroupWrapper>
  );
};

const NoTokenHeader = () => {
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

const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 313px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledLink = styled(Link)`
  font-weight: 600;
  color: ${color.Black};
  margin-right: 77px;
  font-size: 23px;
`;

const LogoutBnt = styled.button`
  all: unset;
  font-weight: 600;
  color: ${color.Black};
  font-size: 23px;
  &:focus {
    outline: none;
  }
`;

export default Header;
