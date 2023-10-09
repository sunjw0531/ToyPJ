import styled from 'styled-components';
import { useState, useRef } from 'react';

const PanelContainer = styled.div`
  display: flex;
`;

const BigContent = styled.div<{ ref: any }>`
  width: 550px;
  height: 400px;
`;

const SmallContents = styled.div<{ ref: any }>`
  padding: 10px;
  background-color: black;
`;

const SmallContent = styled.div<{ imgURL: string }>`
  background-image: url(${(props) => props.imgURL});
  width: 200px;
  height: 100px;
  background-size: cover;
`;

const Panel = () => {
  const [panelUrl, setPanelUrl] = useState<string>(
    'https://images.unsplash.com/photo-1524084516472-4719a5f35de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  );
  const [picked, setPicked] = useState<number>(0);
  const panelRef = useRef();
  const pickedPanelRef = useRef();
  const ChangePanelImg = (event: React.MouseEvent<HTMLDivElement>) => {
    const pickedPanel: any = pickedPanelRef.current;
    pickedPanel.children[picked].style.borderLeft = 'none';
    event.currentTarget.style.borderLeft = '2px solid red';

    const bigPanel: any = panelRef.current;
    bigPanel.firstChild.src = panelUrl;
  };
  return (
    <PanelContainer>
      <BigContent ref={panelRef}>
        <img
          src=""
          alt="BigPanelImg"
          style={{ backgroundSize: 'cover', width: '550px', height: '400px' }}
        />
      </BigContent>
      <SmallContents ref={pickedPanelRef}>
        <SmallContent
          imgURL={
            'https://images.unsplash.com/photo-1528301721190-186c3bd85418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          onClick={(event) => {
            setPicked(0);
            ChangePanelImg(event);
          }}
        />
        <SmallContent
          imgURL={
            'https://images.unsplash.com/photo-1524084516472-4719a5f35de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          onClick={(event) => {
            setPicked(1);
            ChangePanelImg(event);
          }}
        />
        <SmallContent
          imgURL={
            'https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          onClick={(event) => {
            setPicked(2);
            ChangePanelImg(event);
          }}
        />

        <SmallContent
          imgURL={
            'https://images.unsplash.com/photo-1532426532228-533e74dc21c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
          }
          onClick={(event) => {
            setPicked(3);
            ChangePanelImg(event);
          }}
        />
      </SmallContents>
    </PanelContainer>
  );
};

export default Panel;
