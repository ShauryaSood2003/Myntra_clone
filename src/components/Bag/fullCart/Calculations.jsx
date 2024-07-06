import { Box, Button, Typography } from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
    margin:15px 30px;
`

const FirstContainer=styled(Box)`
    display:flex;
`
const SecondContainer=styled(Box)`
    display:flex;
    justify-content:space-between;
    width:320px;
`
const CouponContainer=styled(Box)`
    margin-bottom:20px;
`

const Title=styled(Typography)`
    color:#666968;
    font-weight:600;
    font-size:12px;
    margin-bottom:20px;
`
const CouponIcons=styled(SellIcon)`
    color:#999999;
    font-size:22px;
`
const CouponText=styled(Typography)`
    font-size:14px;
    font-weight:600;
    margin-left:10px;
`
const CouponStyledButton=styled(Button)`
    border:1px solid #f527b0;
    padding:5px 10px;
    color:#f527b0;
    font-family: 'Work Sans', sans-serif;
    font-weight:600;
    font-size:13px;
    margin-top:-5px;

    &:hover {
    background-color: rgba(247, 15, 96,0.4);
    }

`
const Text=styled(Typography)`
    color:#1c1c1c;
    font-size:13px;
    margin:10px 0;
`
const Discount=styled(Typography)`
    color:rgba(2, 247, 80, 1);
    font-size:13px;
    margin:10px 0;
`

const Total=styled(Typography)`
    font-size:19px;
    font-weight:700;
`

const StyledButton=styled(Button)`
    background:#f21167;
    color:white;
    font-weight:600;
    font-size:14px;
    font-family: 'Work Sans', sans-serif;
    width:100%;
    padding:10px;
    margin:30px 0 0 ;
    &:active{
        background:#f0518e;
    }
    &:hover{
        background:#f0518e;
    }
`

const Calculations=()=>{

    const { itemsInCart,setOrderPlaced } = useContext(AccountContext);
    let totalPrice = 99;
    let actualPrice = 0;

    itemsInCart.forEach((item) => {
        totalPrice += parseInt(item[3], 10);
        actualPrice += parseInt(item[4], 10);
    });

    let discountedPrice = actualPrice - totalPrice;


    return(
      
        <Container>
            <CouponContainer>
                <Title>COUPONS</Title>
                <SecondContainer>
                    <FirstContainer>
                        <CouponIcons></CouponIcons>
                        <CouponText>Apply Coupons</CouponText>
                    </FirstContainer>
                    <CouponStyledButton>Apply</CouponStyledButton>
                </SecondContainer>
                <hr/>
            </CouponContainer>
            <Box>
                <Title>PRICE DETAILS</Title>
                <SecondContainer>
                    <Text>Total MRP</Text>
                    <Text>₹ {actualPrice}</Text>
                </SecondContainer>
                <SecondContainer>
                    <Text>Discount on MRP</Text>
                    <Discount>-₹ {discountedPrice}</Discount>
                </SecondContainer>
                <SecondContainer>
                    <Text>Convenience Fee</Text>
                    <Text>₹ 99</Text>
                </SecondContainer>
                <hr/>
                <SecondContainer>
                    <Total>Total Amount</Total>
                    <Total>₹ {totalPrice}</Total>
                </SecondContainer>
                <StyledButton onClick={()=>{setOrderPlaced(true)}} >PLACE ORDER</StyledButton>

            </Box>
          
        </Container>
      

    )

}
export default Calculations;