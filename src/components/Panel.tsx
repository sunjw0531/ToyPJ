import styled from 'styled-components';

const PanelContainer = styled.div`
  display: flex;
`;

const BigContent = styled.div``;

const SmallContents = styled.div``;

const SmallContent = styled.div``;

const Panel = () => {
  return (
    <PanelContainer>
      <BigContent>0</BigContent>
      <SmallContents>
        <SmallContent>1</SmallContent>
        <SmallContent>2</SmallContent>
        <SmallContent>3</SmallContent>
      </SmallContents>
    </PanelContainer>
  );
};

export default Panel;
