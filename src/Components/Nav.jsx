import { styled } from 'styled-components';

const NavStyles = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  li {
    float: left;
  }

  li a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }

  .active {
    background-color: red;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <li><a href="#home" className="active">Home</a></li>
      <li><a href="#about">About</a></li>
    </NavStyles>
  );
}
