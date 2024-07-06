import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
    display:flex;
    border:.5px solid black;
    margin:15px 30px;
    width:600px;
`
const FirstContainer=styled(Box)`
    margin:8px;
`

const ImageStyled=styled('img')({
    width:150,
    height:200,
    margin:"8px 16px 8px 8px"
})

const Title = styled(Typography)`
    font-family: 'Poppins', sans-serif;
    color:#262625;
    padding-bottom:4px;
`;

const Text = styled(Typography)`
    color:#666666;
    font-size:13px;
    font-family: 'Work Sans', sans-serif;
`;

const Quantity=styled(Typography)`
    background:rgba(136, 138, 137,0.15);
    font-size:12px;
    padding:3px;
    width:34px;
    font-weight:600;
    margin:22px 0 22px 0;
    border:.5px solid rgba(136, 138, 137,0.1);
`

const Price = styled(Box)`
    display: flex;
`;



const Cost=styled(Typography)`
    font-size:14px;
    color:#1f1f1e;
    font-weight:600;
    padding:0 8px 0 0;
`
const ActualCost=styled(Typography)`
    color:rgba(61, 61, 61, 0.5);
    font-size:12px;
    padding: 2px 8px 0 0;
    text-decoration:line-through;
`
const Off=styled(Typography)`
    color:rgba(250, 104, 7, 0.5);
    font-size:12px;
    padding: 2px 4px 0 0;
`

const ReturnConatiner=styled(Box)`
    display: flex;
    margin-top:5px;
`

const CouponIcon=styled(SettingsBackupRestoreIcon)`
    font-size:18px;
    color:#878a88;
    
`
const Days=styled(Typography)`
    font-size:12px;
    font-weight:600;

`
const Return=styled(Typography)`
    font-size:11px;
    color:#878a88;
    padding:2px 3px;
`


const ButtonStyled=styled(Button)`
   color:black;
   margin-left:165px;
`


const AddedItems = () => {
    const {itemsInCart}=useContext(AccountContext);


    return (
        <Box>
            {itemsInCart.map((item, index) => {
                return (
                    <Container key={index}>
                        <ImageStyled src={item[0]} alt="Images"></ImageStyled>
                        <FirstContainer>
                            <Title>{item[1]}</Title>
                            <Text>{item[2]}</Text>
                            <Quantity>Qty:1</Quantity>
                            <Price>
                                <Cost>₹ {item[3]}</Cost>
                                <ActualCost>₹ {item[4]}</ActualCost>
                                <Off>{item[5]}</Off>
                            </Price>
                            <ReturnConatiner>
                                <CouponIcon></CouponIcon>
                                <Days> 14 days </Days>
                                <Return>return available</Return>
                            </ReturnConatiner>
                        </FirstContainer>
                        <Box>
                            <ButtonStyled>X</ButtonStyled>
                        </Box>
                      
                    </Container>
                );
            })}
        </Box>
    );
};

export default AddedItems;
