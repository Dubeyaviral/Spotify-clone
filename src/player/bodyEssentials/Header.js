import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../../neccessary/DataLayer";

function Header() {
      const [{user}, dispatch] = useDataLayerValue();
  return (
    <Container>
      <div className="header">
        <div className="header__left">
          <SearchOutlinedIcon />
          <input
            placeholder="Search for Artists, Songs or Podcasts"
            type="text"
          />
        </div>
        
        <div className="header__right">
                <Avatar src={user?.images[0]?.url } alt={user?.display_name} />
                <h4>{ user?.display_name }</h4>
        </div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
   {
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    .header__left {
      flex: 0.5;
      background-color: white;
      color: gray;
      border-radius: 30px;
      padding: 10px;
      display: flex;
      align-items: center;
    }

    .header__left > input {
      border: none;
      width: 100%;
    }

    .header__right {
      display: flex;
      align-items: center;
    }

    .header__right > h4 {
      margin-left: 10px;
    }
  }
`;
