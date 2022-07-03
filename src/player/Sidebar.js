import React from 'react'
import styled from 'styled-components';
import SidebarOptions from './SidebarOptions'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from '../neccessary/DataLayer';

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <Container>
      <div className="sidebar">
      <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                 alt=''/>
            <SidebarOptions title='Home' Icon={HomeOutlinedIcon}/>
            <SidebarOptions title='Search' Icon={SearchOutlinedIcon}/>
            <SidebarOptions title='Your Library' Icon={LibraryMusicOutlinedIcon}/>
      <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
              <SidebarOptions title={playlist.name} key={playlist.id} />
            ))}
    </div>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`{
  .sidebar {
    height: 100vh;
    flex: 0.2;
    color: #fff;
    min-width: 230px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #040404;
}

.sidebar_logo {
    height: 70px;
    padding: 10px;
    margin-right: auto;
}

}`