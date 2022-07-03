import React from 'react'
import styled from 'styled-components';


function SidebarOptions({title,Icon,id,spotify}) {
    const changePlaylist = (id,e)=>{

    }
  return (
    <Container>
        <div className='sidebarOption'>
        {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon ? <h4>{title}</h4> : <p onClick={(e) => changePlaylist(id, e)}>{title}</p>}
        </div>
    </Container>
  )
}

export default SidebarOptions

const Container   = styled.div`{
    .sidebarOption {
        display: flex;
        align-items: center;
        color: grey;
        height: 40px;
        cursor: pointer;
        transition: 200ms color ease-in;
    }
    
    .sidebar > hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
    
    .sidebarOption:hover {
        color: white;
    }
    
    .sidebarOption__icon {
        padding-left: 10px;
        padding-right: 10px;
    }
    
    .sidebar__title {
        margin-left: 10px;
        padding: 5px;
        font-size: 12px;
    }
    
    .sidebarOption > p {
        margin-top: 10px;
        margin-left: 10px;
        font-size: 14px;
    }
}`