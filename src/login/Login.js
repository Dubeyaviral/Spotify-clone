import React from 'react'
import styled from 'styled-components'
import { loginUrl } from '../neccessary/Spotify';


function Login() {
  return (
    <Container>
    <div className='login'>
    <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>  
    </div>
    </Container>
  )
}

export default Login;


const Container = styled.div`
.login {
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
  }
  
img {
    width: auto;
    height: 200px;
  }
  
a {
    padding: 20px;
    border-radius: 99px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    background-color: #1db954;
  }
`;
