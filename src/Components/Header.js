import { styled } from 'styled-components';

const HeaderStyles = styled.div`
  background-color: red;
  color: white;
  
`;

const IconStyles = styled.span`
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

`;

export default function Header() {
  return (
    <HeaderStyles>
      <IconStyles className="material-symbols-outlined">check_circle</IconStyles>
      <h2>Tro-Todo: World's Greatest Todo App!</h2>
    </HeaderStyles>
  );
}
