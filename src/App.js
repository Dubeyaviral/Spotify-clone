import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./player/Player";
import { getTokenFromUrl } from "./neccessary/Spotify";
import Login from "./login/Login";
import { useDataLayerValue } from "./neccessary/DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  const [{ token, discover_weekly, playlists }, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type: 'SET_USER',
          user
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcU8D6PA6YtDh').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    // window.location.hash = "";
    }

  },[])
  // console.log(playlists);
  
  return (
    <div className="app">   
     {token ? <Player spotify = {spotify} /> : <Login/>}
    </div>
  );
}

export default App;