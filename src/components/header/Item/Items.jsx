import React from 'react';
import styled from "@emotion/styled";
import { Box } from "@mui/material"
import ItemContainer from './ItemContainer';
import { MenDialog,WomenDialog,KidsDialog,HomeDialog,BeautyDialog } from '../../../constants/data';

const ContainerStyled = styled(Box)`
   display: flex;
  
   width: 40%;
`;




const Items = () => {

    return (
        <ContainerStyled>
            <ItemContainer name="MEN" itemArrays={MenDialog} Colour="#ff564a"></ItemContainer>
            <ItemContainer name="WOMEN" itemArrays={WomenDialog} Colour="#f740a8"></ItemContainer>
            <ItemContainer name="KIDS" itemArrays={KidsDialog} Colour="#f08113"></ItemContainer>
            <ItemContainer name="HOME & LIVING" itemArrays={HomeDialog} Colour="#e6d819"></ItemContainer>
            <ItemContainer name="BEAUTY" itemArrays={BeautyDialog} Colour="#05979c"></ItemContainer>
        </ContainerStyled>
    )
}
export default Items;
