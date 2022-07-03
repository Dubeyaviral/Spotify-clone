import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Header from "./bodyEssentials/Header";
import { useDataLayerValue } from "../neccessary/DataLayer";
import SongList from "./bodyEssentials/SongList";

function Body({ spotify }) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  
  return (
    <Container>
      <div className="body">
        <Header spotify={spotify} />
        <div className="body__info">
          <img
            src={discover_weekly?.images[0].url}
            alt=""
          />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>{discover_weekly?.name}</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className="body__songs">
        <div className="body__icons">
                    {/* {playing ? <PauseCircleFilledIcon onClick={track ? stopPlaying : null}
                                                      className='body__shuffle'/> :
                        <PlayCircleFilledIcon onClick={track ? startPlaying : null} fontSize='large'
                                              className='body__shuffle'/>} */}
                    <FavoriteBorderIcon fontSize='large'/>
                    <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map(item => {
          // console.log(item.track.external_ids.isrc)
        return <SongList track = {item.track}  spotify={spotify} key={item.track.external_ids.isrc} />
        })} 
        </div>
      </div>
    </Container>
  );
}

export default Body;

const Container = styled.div`
   {
    .body {
      flex: 0.8;
      height: 100vh;
      width: 79.8vw;
      color: #fff;
      padding: 30px;
      overflow-y: overlay;
      background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  }
  
  .body::-webkit-scrollbar{
      display: none;
  }
  
  .body__info {
      display: flex;
      align-items: flex-end;
      padding: 10px;
  }
  
  .body__info > img {
      height: 20vw;
      margin: 0 20px;
      box-shadow: 0 4px 60px rgba(0, 0, 0, 60);
  }
  
  .body__icons {
      display: flex;
      align-items: center;
  }
  
  .body__icons > .MuiSvgIcon-root{
      margin-right: 20px;
  }
  
  .body__shuffle {
      font-size: 80px!important;
      margin-left: 50px;
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
  .body__shuffle:hover {
      transition: 100ms transform ease-in;
      transform: scale(1.08);
  }
  
  .body__infoText {
      flex: 1
  }
  
  .body__infoText > h2 {
      font-size: 48px;
      margin-bottom: 10px
  }
  
  .body__infoText > p {
      font-size: 14px;
  }
  
  .body__songs {
      margin: 20px -30px;
  }
  }
`;
