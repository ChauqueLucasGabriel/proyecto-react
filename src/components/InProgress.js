import React from 'react'
import { IoBuild } from "react-icons/io5";
import { Container, Wrapper } from './InProgressComponents';
import {IconContext} from 'react-icons/lib';

function InProgress() {
  return (
    <>
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize:"6em"}}}>
                <IoBuild/>
                <p>In Building...</p>
            </IconContext.Provider>
        </Wrapper>
    </Container>
    </>
  )
}

export default InProgress