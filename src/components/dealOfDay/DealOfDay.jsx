import { Box, Typography } from "@mui/material";
import Item from "./items/Item";
import {DealImage1,DealImage2,DealImage3,DealImage4,DealImage5,DealImage6,DealImage7,DealImage8,NikeLogo,AdidasLogo,BagLogo1,BagLogo2,DecoreLogo1,DecoreLogo2,MenBrandLogo2,WomenBrandLogo1,WomenBrandLogo2,KidsBrandLogo1,HomeBrandLogo1,HomeBrandLogo2} from "../../constants/data";

import styled from "@emotion/styled";


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

const DealOfDay=()=>{
    return(
        <Box>
            <FirstConatiner>DEAL OF THE DAY</FirstConatiner>

            <SecondConatiner>
                <Item DealImage={DealImage1} text1="Kurtas" text2="Under 899" brand1={WomenBrandLogo1} brand2={MenBrandLogo2}></Item>
                <Item DealImage={DealImage2} text1="Dresses" text2="Under 999" brand1={KidsBrandLogo1} brand2={WomenBrandLogo2}></Item>
                <Item DealImage={DealImage3} text1="Work-Ready Shoes" text2="Min. 30% Off" brand1={NikeLogo} brand2={AdidasLogo}></Item>
                <Item DealImage={DealImage4} text1="Casual Shoes" text2="Upto 70% Off" brand1={AdidasLogo} brand2={NikeLogo}></Item>
                <Item DealImage={DealImage5} text1="Accessories" text2="Min. 50% Off" brand1={BagLogo1} brand2={BagLogo2}></Item>
                <Item DealImage={DealImage6} text1="Dinnerware" text2="Upto 70% Off" brand1={HomeBrandLogo1} brand2={DecoreLogo1}></Item>
                <Item DealImage={DealImage7} text1="Decore" text2="Min. 60% Off" brand1={HomeBrandLogo2} brand2={DecoreLogo2}></Item>
                <Item DealImage={DealImage8} text1="Gifts" text2="Gift with Purchases" brand1={HomeBrandLogo2} brand2={HomeBrandLogo1}></Item>
                
            </SecondConatiner>
        </Box>
    )
}
export default DealOfDay;