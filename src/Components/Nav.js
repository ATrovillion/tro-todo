import { styled } from 'styled-components';

const NavStyles = styled.div`
  background-color: blue;
`;

export default function Nav() {
  return (
    <NavStyles>
      <h2>Hi! I'm the nav element!</h2>
    </NavStyles>
  );
}
