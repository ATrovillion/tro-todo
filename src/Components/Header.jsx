import { styled } from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  height: 3em;
  
  
`;

const IconStyles = styled.span`
float: left;
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
      <h2>Tro-Todo: The World's Greatest Todo App!</h2>
    </HeaderStyles>
  );
}
