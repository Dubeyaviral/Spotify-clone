import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
  return (
    <Container>
    <div className='player'>
      <div className="player_body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
    </Container>
  )
}

export default Player

const Container  = styled.div`{
.player_body {
    display:flex;
}
}`