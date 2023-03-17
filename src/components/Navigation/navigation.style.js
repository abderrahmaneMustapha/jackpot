import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #373737;
  color: #ffffff;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  padding: 1.2em 1.6em;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  ${({ isActive }) =>
    isActive &&
    `
      background-color: #8DC63F;
      color: #373737;
    `}
`;

export { NavItem, NavList, Nav };