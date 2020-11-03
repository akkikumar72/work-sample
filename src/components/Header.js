import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Cart } from '../assets/images/cart.svg';

const Nav = styled.div`
  background-color: #000e22e6;
  display: flex;
  align-items: center;
  height: 7rem;
`;

const NavHeader = styled.div`
  max-width: 100%;
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 10%;
  text-align: left;
  svg {
    display: inline-block;
    color: #fff;
    width: 6rem;
    height: 6rem;
  }
`;

const NavCenter = styled.div`
  width: 80%;
  text-align: center;
`;

const UL = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    opacity: 0.9;
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: 0.24rem;
    text-transform: uppercase;
    font-weight: 300;
    cursor: pointer;
    &:hover{
    color: #c3c3c3;
    }
  }
`;

const NavRight = styled.div`
  width: 10%;
  text-align: right;

  svg {
    margin-right: 20px;
    color: #fff;
  }
`;

const MenuLink = styled.a``;

function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <MenuLink href="#">
            <Logo />
          </MenuLink>
        </NavLeft>

        <NavCenter>
          <UL>
            <li>
              <MenuLink>News</MenuLink>
            </li>
            <li>
              <MenuLink>Watches</MenuLink>
            </li>
            <li>
              <MenuLink>Jewelry</MenuLink>
            </li>
            <li>
              <MenuLink>Watch bracelet</MenuLink>
            </li>
            <li>
              <MenuLink>Gift sets</MenuLink>
            </li>
            <li>
              <MenuLink>Shop</MenuLink>
            </li>
          </UL>
        </NavCenter>

        <NavRight>
          <MenuLink href="#">
            <Cart />
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default Header;
