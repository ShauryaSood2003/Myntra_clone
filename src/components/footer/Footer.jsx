import styled from "@emotion/styled"
import {Box, Typography} from "@mui/material"
import Item from "./Items/Item"
import Tag from "./Tag"


const Container=styled(Box)`
    width:100%;
    height:430px;
    margin-top:50px;
    background-color:#ffdbf3;
    background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
`

const FirstConatiner=styled(Box)`
    display:flex;
`

const CopyRight=styled(Typography)`
    font-size:12px;
    font-weight:600;
    padding:0 42.9%;
    color:#5e5e5e;
`


const Footer=()=>{
    return(
        <Container>

            <FirstConatiner>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </FirstConatiner>

            <Tag></Tag>

            <CopyRight>©️ All Rights Reserved.Shaurya Sood</CopyRight>
            
        </Container>
    )
}
export default Footer;