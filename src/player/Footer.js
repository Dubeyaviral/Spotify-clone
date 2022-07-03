import React, {useCallback} from "react";
import styled from "styled-components";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Slider } from "@mui/material";
import { Grid } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useDataLayerValue } from "../neccessary/DataLayer";
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebPlayer, { CallbackState, STATUS } from "react-spotify-web-playback";

function Footer() {
  const [{ current_song, token, isPlaying }, dispatch] = useDataLayerValue();

  // const handleCallback = useCallback(({ type, ...state }: CallbackState)=>{

  // },[])
  
  const playStatus = ()=>{
    if(isPlaying===true){
      dispatch({
        type: "SET_PLAYING_STATUS",
        status: false 
      })
    }
    else{
      dispatch({
        type: "SET_PLAYING_STATUS",
        status: true 
      })
    }
  }

  return (
    <Container>
      <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumLogo"
            src={current_song ? current_song.album.images[0].url : ""}
            alt=""
          />
          <div className="footer__songInfo">
            <h4>
              {current_song ? current_song.name : "Select a song to play"}
            </h4>
            <p>
              {current_song
                ? current_song.artists.map((artist) => artist.name).join(", ")
                : "Artists"}
            </p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleOnIcon className={""} />
          <SkipPreviousOutlinedIcon className="footer__icon" />
          {/* <PlayCircleOutlinedIcon onClick={} fontSize="large" className="footer__icon" /> */}
          {isPlaying===true ? <PauseCircleOutlineIcon onClick={playStatus} fontSize='large'
                                                   className='footer__icon'/> :
                    <PlayCircleOutlinedIcon onClick={playStatus} fontSize='large'
                                           className='footer__icon'/>}
          {/* {current_song?<SpotifyWebPlayer
          // callback={handleCallback}
          initialVolume={50}
          persistDeviceSelection
          play={true}
          showSaveIcon
          styles={{
            sliderColor: '#1cb954',
          }}
          syncExternalDevice
          token={token}
          uris={current_song.external_urls.uri}
        />: ""} */}
          <SkipNextOutlinedIcon className="footer__icon" />
          <RepeatIcon className={""} />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider
                aria-labelledby="discrete-slider"
                valueLabelDisplay="off"
                min={0}
                max={100}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
   {
    .footer {
      position: fixed;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      height: 65px;
      width: 100%;
      background-color: #282828;
      padding: 20px;
    }

    .footer__left {
      flex: 0.3;
      display: flex;
      align-items: center;
      color: white;
      width: 300px;
    }

    .footer__albumLogo {
      height: 60px;
      width: 60px;
      object-fit: contain;
      margin-right: 20px;
    }

    .footer__center {
      flex: 0.4;
      padding: 0 100px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 300px;
    }

    .footer__right {
      flex: 0.3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
    }

    .footer__right * .MuiSlider-root {
      color: #1ed15e;
      width: 90%;
    }

    .footer__green {
      color: #1ed15e;
    }

    .footer__songInfo > h4 {
      margin-bottom: 5px;
    }

    .footer_songInfo > p {
      font-size: 12px;
    }

    .footer__icon:hover,
    .footer__green:hover {
      transition: transform 0.2s ease-in-out;
      transform: scale(1.2) !important;
    }
  }
`;
