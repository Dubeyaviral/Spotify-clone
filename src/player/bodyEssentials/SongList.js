import styled from 'styled-components';
import React, {useEffect} from 'react'
import { useDataLayerValue } from '../../neccessary/DataLayer';

function SongList({track}) {
    const [{},dispatch]= useDataLayerValue();
    
    function currentPlaying(e, track) {
        dispatch({
            type: 'SET_CURRENT_PLAYING',
            current_song: track
        });
        dispatch({
            type: "SET_PLAYING_STATUS",
            status: true 
          })
    // console.log("dispatching");
    // console.log(track);
    }

  return (
    <Container>
    <div className='songRow' onClick={ (e) => currentPlaying(e,track)}>
    <img className='songRow__album' src={track.album.images[0].url} alt=''/>
            <div className='songRow__info'>
                <h1>{track.name}</h1>
                <p>
                {track.artists.map((artist) => artist.name).join(', ')}
                </p>
                <p>
                {track.album.name}                    
                </p>
            </div>
    </div>
    </Container>
  )
}

export default SongList;

const Container = styled.div`{
    .songRow {
        margin-left: 20px;
        padding: 20px;
        display: fleX;
        align-items: center;
        color:white;
    }
    
    .songRow:hover {
        cursor: pointer;
        background-color: black;
        opacity: 0.8
    }
    
    .songRow__info {
        margin-left: 20px
    }
    
    .songRow__info > h1 {
        font-size: 16px;
    }
    
    .songRow__info > p {
        font-size: 14px;
        margin-top: 3px;
        color: grey;
    }
    
    .songRow__album {
        height: 40px;
        width: 40px;
    }
}`