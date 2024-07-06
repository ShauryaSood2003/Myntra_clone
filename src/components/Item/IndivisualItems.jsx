import {Box} from "@mui/material"
import { MenItem1,MenItem2,WomenItem1,WomenItem2,KidsItem1,KidsItem2,HomeItem1,HomeItem2,BeautyItem1} from "../../constants/data";
import Item from "./Item";
import Header from "../header/Header";
import styled from "@emotion/styled";
import Footer from "../footer/Footer";


const SecondContainer=styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin: 0 5% 5% 18%;
`
const Conatiner=styled(Box)`
 
`

const IndivisualItems=()=>{
    return(
        <Conatiner>
            <Header></Header>
            <SecondContainer>
                <Item items={MenItem1}></Item>
                <Item items={MenItem2}></Item>
                <Item items={WomenItem1}></Item>
                <Item items={WomenItem2}></Item>
                <Item items={KidsItem1}></Item>
                <Item items={KidsItem2}></Item>
                <Item items={HomeItem1}></Item>
                <Item items={HomeItem2}></Item>
                <Item items={BeautyItem1}></Item>
                
            </SecondContainer>
            <Footer></Footer>
        </Conatiner>
    )
}
export default IndivisualItems;