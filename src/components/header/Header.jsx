import React from 'react';

import {Box} from "@mui/material";
import styled from "@emotion/styled";

import BrandLogo from "./BrandLogo";
import Items from "./Item/Items";
import SearchBar from "./SearchBar";
import Logos from './Logo/Logos';

const HeaderStyled=styled(Box)`
    display:flex;
    align-item:center;
    width:100%;
    height:80px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    margin-bottom:40px;
    position:fixed;
    z-index:1;
    background:#fff;

`
const Container=styled(Box)`
    height:120px;
    widthL100%;
`


const Header=()=>{
    return(
        <Box>
            <HeaderStyled>
                <BrandLogo></BrandLogo>
                <Items></Items>
                <SearchBar></SearchBar>
                <Logos></Logos>
            </HeaderStyled>
            <Container></Container>
        </Box>
    )
}
export default Header;

