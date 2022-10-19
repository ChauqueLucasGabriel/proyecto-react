import React from 'react'
import { Container, LogoContainer, Menu, MenuBurger, MenuItem, MenuItemLink, Wrapper } from '../Navbar/Navbar.elements.js'
import { FaTeamspeak } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IconContext } from 'react-icons/lib';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize:"2em"}}}>
                <Link to={'/'}>
            <LogoContainer>
            <FaTeamspeak/>
            <p>Alien</p>
            <p>Tech</p>
            </LogoContainer>
                </Link>
                
                <MenuBurger>
                    <FaBars/>
                </MenuBurger>

                <Menu>
                <MenuItem>
                    <Link to={'/'}>
                    <MenuItemLink>Home</MenuItemLink>
                    </Link>
                </MenuItem>
                <MenuItem>
                <Link to={'/categoria/auriculares'}>
                    <MenuItemLink>Auriculares</MenuItemLink>
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to={'/categoria/monitores'}>
                    <MenuItemLink>Monitores</MenuItemLink>
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to={'/carrito'}>
                    <MenuItemLink><RiShoppingCart2Fill/></MenuItemLink>
                </Link>
                </MenuItem>
                </Menu>    
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export default NavBar