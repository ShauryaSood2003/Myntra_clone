import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box,Typography } from '@mui/material';
import styled from '@emotion/styled';

const Container=styled(Box)`
    display:flex;
    padding:5px 0;
`

const Links=({link})=>{
    return(
        <Container>
            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
            <Typography>{link}</Typography>
        </Container>
    )
}
export default Links;