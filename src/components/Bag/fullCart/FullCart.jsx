import styled from "@emotion/styled";
import AddedItems from "./AddedItems";
import Calculations from "./Calculations";
import {Box} from "@mui/material"
import CartHeader from "../CartHeader";

const Container=styled(Box)`
    display:flex;
    justify-content:center;
`

const HorizontalCover=styled(Box)`
     border-right:2px solid black;
`

const FullCart=()=>{
    return(
        <Box>
            <CartHeader></CartHeader>
            <Container>
                <AddedItems></AddedItems>
                <HorizontalCover></HorizontalCover>
                <Calculations></Calculations>
            </Container>
        </Box>
    )
}
export default FullCart;