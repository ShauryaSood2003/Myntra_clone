import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
    background-color: #eb2300;
    background-image: url("https://www.transparenttextures.com/patterns/diagmonds-light.png");
    width: 14%;
    height: 300px;
    margin:1.1%;
`

const ImageStyled=styled('img')({
    width:"90%",
    height:"65%",
    padding:"7px"
});

const TextContainer=styled(Box)`
    text-align:center;
    margin-top:10px;
`
const Text1=styled(Typography)`
    font-size:19px;
    color:#373738;
    font-weight:600;
    font-family: 'Edu SA Beginner', cursive;
`
const Text2=styled(Typography)`
    font-size:21px;
    font-weight:600;
    font-family: 'Abel', sans-serif;
`

const Item=({images,text1,text2})=>{
    return(
        <Container>
            <ImageStyled src={images} alt="Images"></ImageStyled>
            <TextContainer>
                <Text1>{text1}</Text1>
                <Text2>{text2}</Text2>
            </TextContainer>
        </Container>
    )
}
export default Item;
