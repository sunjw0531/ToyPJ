import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div<{ scrollDirection: string }>`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px;
  /* width: 100vw; */
  max-width: 1300px;
  margin: 0 auto;
  opacity: ${(props) => (props.scrollDirection === 'up' ? 100 : 0)};
`;

const Logo = styled.img`
  width: 5%;
  height: 5%;
`;

const Header: FC = () => {
  const navigate = useNavigate();
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    // 스크롤 감지
    const detectScroll = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [scrollDirection]);
  return (
    <>
      <HeaderContainer
        scrollDirection={scrollDirection}
        onMouseOver={() => setScrollDirection('up')}
      >
        <Logo
          src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c6989a7ed5854e0aa1d297e3ed162d5d/default/light/1.0"
          onClick={() => navigate('/')}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
