import styled from "@emotion/styled";
import {Box} from "@mui/material";
import Block from "./Block";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
    width:12.5%;
    height:320px;
    
    position:relative
`;
const ImageStyled=styled('img')({
    width:"100%",
    height:"75%",
    margin:0
});

const SecondConatiner=styled(Box)`
    width:100%;
    height:25%;
    margin-top:-5px;
    background-color: #b3006e;
    background-image: url("https://www.transparenttextures.com/patterns/diagmonds-light.png");
    border:0.1px solid #b3568f;
`

const Item=({DealImage,text1,text2,brand1,brand2})=>{
    const {setChoseItem}=useContext(AccountContext);
    return(
        <Container onClick={()=>{setChoseItem(true)}}>
           <Block text1={text1} text2={text2} brand1={brand1} brand2={brand2}></Block>
           <ImageStyled src={DealImage} alt="DealImage"></ImageStyled>
           <SecondConatiner></SecondConatiner> 
        </Container>
    )
}
export default Item;