import React from 'react'
import { Container, LogoContainer, Menu, MenuBurger, MenuItem, MenuItemLink, Wrapper } from '../Navbar/Navbar.elements.js'
import { FaTeamspeak } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IconContext } from 'react-icons/lib';
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize:"2em"}}}>
            <LogoContainer>
            <FaTeamspeak/>
            <p>Alien</p>
            <p>Tech</p>
            </LogoContainer>
                
                <MenuBurger>
                    <FaBars/>
                </MenuBurger>

                <Menu>
                <MenuItem>
                    <MenuItemLink>Home</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>About</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>Product</MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink><RiShoppingCart2Fill/></MenuItemLink>
                </MenuItem>
                </Menu>    
            </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export default NavBar