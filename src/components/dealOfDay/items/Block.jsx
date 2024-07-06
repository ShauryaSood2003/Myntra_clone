import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";


const Container=styled(Box)`
     width:168px;
     height:120px;
     position:absolute;
     bottom:10px;
     left:10px;
     border-radius:10px;
     background-color: rgba(242, 242, 242, 0.3);
     backdrop-filter: blur(8px);
     overflow:none;

`
const BrandLogoImage=styled('img')({
    width:55,
    height:35,
    margin:5
});

const FirstContainer=styled(Box)`
    display:flex;
    justify-content:center;
`
const SecondConatiner=styled(Box)`
    overflow:none;
    width:100%;
`

const Text1=styled(Typography)`
    font-size:12px;
   
    margin-left:25px;
    
`

const Text2=styled(Typography)`
    font-size:14px;
    font-weight:600;
    margin-left:25px;
    color:#30302f;
`

const LineBreak=styled('hr')({
    width:"80%"
})

const Block=({brand1,brand2,text1,text2})=>{
    return(
        <Container>
            <FirstContainer>
                <BrandLogoImage src={brand1} alt="brandLogo"></BrandLogoImage>
                <BrandLogoImage src={brand2} alt="brandLogo"></BrandLogoImage>
            </FirstContainer>
            <SecondConatiner>
                <LineBreak/>
                <Text1>{text1}</Text1>
                <Text2>{text2}</Text2>
            </SecondConatiner>
        </Container>
    )
};
export default Block;