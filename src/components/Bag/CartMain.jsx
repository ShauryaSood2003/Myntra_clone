import { Box, Button, Typography } from "@mui/material";
import { CartEmptyImage } from "../../constants/data";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Container=styled(Box)`
    width:100%;
    text-align:center;
    margin-top:12%;
`

const ImageStyled=styled('img')({
    width:150,
    height:150
})

const Title=styled(Typography)`
    font-size:20px;
    font-family: 'Work Sans', sans-serif;
    font-weight:800;
    padding:30px 0 10px 0;
`
const Text=styled(Typography)`
    color:#888c8a;
    font-size:14px;
   
`
const StyledButton=styled(Button)`
    border:2px solid #f527b0;
    padding:10px 30px;
    color:#f527b0;
    margin:28px 0;
    font-family: 'Work Sans', sans-serif;
    font-weight:600;
`

const CartMain=()=>{

    const {setCartOpen}=useContext(AccountContext);

    const handleClick=()=>{
        setCartOpen(false);
    }

    return(
        <Container>
            <ImageStyled src={CartEmptyImage} alt="Empty_Cart"></ImageStyled>
            <Title>Hey, it feels so light!</Title>
            <Text>There is nothing in your bag. Let's add some items</Text>
            <StyledButton onClick={handleClick}>Return Back</StyledButton>
        </Container>
    )
}
export default CartMain;