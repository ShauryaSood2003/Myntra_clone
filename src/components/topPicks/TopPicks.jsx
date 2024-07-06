import styled from "@emotion/styled";
import { Box,Typography } from "@mui/material";
import Item from "./Item";
import { TopKurtaSet,TopKurta,TopDresses,TopJeans,TopShirts,TopTShirt,TopTrouser } from "../../constants/data";

const Container=styled(Box)`
  
`

const FirstConatiner=styled(Typography)`
    font-size:40px;
    font-weight:700;
    font-family: 'Abel', sans-serif;
    color:#525050;
    margin:35px 30px 30px;
`
const SecondConatiner=styled(Box)`
    display:flex;
 
`

const TopPicks=()=>{
    return(
        <Container>
            <FirstConatiner>TOP PICKS</FirstConatiner>
            <SecondConatiner>
                <Item images={TopKurtaSet} text1="Kurta Set" text2="Under 1299"></Item>
                <Item images={TopKurta} text1="Kurtas" text2="Under 799"></Item>
                <Item images={TopDresses} text1="Dresses" text2="Under 899"></Item>
                <Item images={TopJeans} text1="Jeans" text2="Under 999"></Item>
                <Item images={TopShirts} text1="Shirts" text2="Under 799"></Item>
                <Item images={TopTShirt} text1="T-Shirts" text2="Under 499"></Item>
                <Item images={TopTrouser} text1="Trousers" text2="Under 899"></Item>
            </SecondConatiner>

        </Container>
        
    )
};

export default TopPicks;