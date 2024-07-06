import styled from "@emotion/styled";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Container=styled(Box)`
    width:30%;
    height:255px;
    margin:40px 0 120px 0;
`

const ImageStyle=styled('img')({
    width:"60%",
    height:280
})

const Price=styled(Box)`
    display:flex;
    padding:3px 0;
`

const Title=styled(Typography)`
    font-family: 'Poppins', sans-serif;
    color:#262625;
`
const Text=styled(Typography)`
    color:#666666;
    font-size:13px;
    font-family: 'Work Sans', sans-serif;
`

const Cost=styled(Typography)`
    font-size:14px;
    color:#1f1f1e;
    font-weight:600;
    padding:0 4px 0 0;
`
const ActualCost=styled(Typography)`
    color:rgba(61, 61, 61, 0.5);
    font-size:12px;
    padding: 2px 4px 0 0;
    text-decoration:line-through;
`
const Off=styled(Typography)`
    color:rgba(250, 104, 7, 0.5);
    font-size:12px;
    padding: 2px 4px 0 0;
`
const StyledButton=styled(Button)`
    border:1px solid #f527b0;
    padding:5px 15px;
    color:#f527b0;
    font-family: 'Work Sans', sans-serif;
    font-weight:600;
    font-size:14px;
    background-color: transparent;

    &:active {
    background-color: #f70f60;
    }
`

const DialogStyled=styled(Dialog)`
  right: 2%; 
  left: auto;
  top: 50px;
  bottom:auto;
  position: absolute;
`

const DialogText=styled(Typography)`
    padding:15px 30px;
    background:#d41571;
    color:#363435;
    font-weight:600;
    border:1px solid #424242;
`
const StyleCart=styled(AddShoppingCartIcon)`
    font-size:18px;
`

const Item=({items})=>{

    const [open,setOpen]=useState(false);
    const {setItemsInCart}=useContext(AccountContext);

    const openDialog=()=>{
        setOpen(true);
        setItemsInCart((prevItems) => [...prevItems, items]);
        setTimeout(()=>{
            setOpen(false);
        },1500);
    };
    const handelClose=()=>{
        setOpen(false);
    }

    return(
        
        <Container>
            <ImageStyle src={items[0]} alt={items[0]}></ImageStyle>
            <Title>{items[1]}</Title>
            <Text>{items[2]}</Text>
            <Price>
                <Cost>Rs. {items[3]}</Cost>
                <ActualCost>Rs. {items[4]}</ActualCost>
                <Off>{items[5]}</Off>
            </Price>
            <StyledButton onClick={openDialog}>ADD TO CART</StyledButton>
           
            <DialogStyled open={open} hideBackdrop="false" onClose={handelClose}>
                <DialogText>Item Added to <StyleCart/></DialogText>
            </DialogStyled>
           
        </Container>
        
    )
}
export default Item;