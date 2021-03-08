import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/hoanglong1698" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/long-nguyen-ha-hoang" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link href="https://facebook.com/hoanglong1698" rel="noreferrer noopener" target="_blank">
          Facebook
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
