import styled from "@emotion/styled";
import { Box,Typography } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    align-items:center;
`

const Text=styled(Typography)`
    color:#595757;
    font-size:14px;
    font-family: 'Work Sans', sans-serif;

`
const Inline=styled(Typography)`
    font-size:11px;
    padding:0 10px;
`

const Steps=()=>{
    return(
        <Container>
            <Text>BAG </Text>
            <Inline> --------------- </Inline>
            <Text> ADDRESS </Text>
            <Inline> --------------- </Inline>
            <Text> PAYMENT</Text>
        </Container>
    )
}
export default Steps;