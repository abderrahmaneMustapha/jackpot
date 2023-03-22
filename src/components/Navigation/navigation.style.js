import styled from "styled-components";

const Nav = styled.nav`
    font-weight: bold;
    color: #ffffff;
    /* position: fixed; */
    transition: 0.5s;
    z-index: 10;
    @media (max-width: 768px) {
        /* transform: translate(-100%); */
    }
`;

const NavList = styled.ul`

    display: flex;
    flex-direction: column;
    list-style: none;
    position: fixed;
    width: 20%;
    @media (max-width: 768px) {
      width: 30%;
    }
    height: 100vh;
    background-color: #373737;
`;

const NavItem = styled.li`
    cursor: pointer;
    width: 100%;
    padding: 1.2em 1.6em;
   

    &:hover {
        text-decoration: underline;
    }

    ${({ isActive }) =>
        isActive &&
        `
      background-color: #8DC63F;
      color: #373737;
    `}

    @media (max-width: 768px) {
        margin: 10px 0;
        padding: 0.8em 1.2em;
    }
`;



export { NavItem, NavList, Nav };
