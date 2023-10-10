import { FC } from 'react';
import styled from 'styled-components';
import Panel from '../components/Panel';
import Login from '../components/Login';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 80px;
`;

const Main: FC = () => {
  return (
    <MainContainer>
      <Panel />
      <Login />
      <div>ㅁㄴㅇㄹ</div>
    </MainContainer>
  );
};

export default Main;
