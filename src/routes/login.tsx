import { FC } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 90vh;
`;

const LoginInfo = styled.div``;

const Login: FC = () => {
  return (
    <>
      <LoginContainer>로그인</LoginContainer>
    </>
  );
};

export default Login;
