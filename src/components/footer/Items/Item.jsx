import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Links from "./Links";


const Container=styled(Box)`
    margin:0 180px;
    padding-top:50px;

`

const FirstContainer=styled(Box)`
    display:flex;
`

const VerticalBreak=styled(Box)`
    height:22px;
    width:3px;
    background-color:#737170;
    margin:0 5px 0 0;
    border:.5px solid #5c5a5a;

`
const SecondConatiner=styled(Box)`
    margin-top:15px;
`


const Item=()=>{
    return(
        <Container>

            <FirstContainer>

                <VerticalBreak></VerticalBreak>
                <Typography>Quick Links</Typography>

            </FirstContainer>

            <SecondConatiner>

              <Links link="Home"></Links>
              <Links link="About"></Links>
              <Links link="FAQ"></Links>
              <Links link="Get Started"></Links>
              <Links link="Vedios"></Links>

            </SecondConatiner>
            
        </Container>
    )
}
export default Item;