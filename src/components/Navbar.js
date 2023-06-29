import React from 'react';


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';


function MyComponent() {


    
    return (
        <>
          <Nav>
            <Bars />
      
            <NavMenu>
              <NavLink to='./Homepage' activeStyle>
                Home
              </NavLink>
              <NavLink to='/Pricing' activeStyle>
                Pricing
              </NavLink>
             
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
    };


export default MyComponent;
