import { styled } from 'styled-components';

const HeaderStyles = styled.div`
  background-color: red;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h2>Hi! I'm the header element!</h2>
    </HeaderStyles>
  );
}
