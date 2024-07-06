import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container=styled(Box)`
    width:100%;
    height:400px;
    display:flex;
    justify-content:space-between;
`
const MainImage=styled('img')({
    height:"95%",
    width:"60%"
});
 
const SecondContainer=styled(Box)`
    background:white;
    width:35%;
    height:100%;

`

const BrandLogoContainer=styled(Box)`
    display:flex;
    align-item:center;
    padding-top:65px;
   
`

const BrandLogoImage=styled('img')({
    width:100,
    height:65,
    margin:15
});

const More=styled(Typography)`
    font-family: 'Edu SA Beginner', cursive;
    font-size:25px;
    color:#8d8e8f;
    padding:25px 15px;
    
`

const SecondText=styled(Typography)`
    font-family: 'Abel', sans-serif;
    font-size:22px;
    margin:15px;
`

const PageBreaker=styled('hr')({
    width:"75%",
    margin:15,
    color:"#f5f5f6"
})

const Explore=styled(Typography)`
    font-family: 'Abel', sans-serif;
    font-size:20px;
    margin:15px;
    color:#bdbcb9;
    font-weight:600;
`

const CarouselItems=({image,title,off,brand1,brand2})=>{
    return(
        <Container>
        
            <MainImage src={image} alt={title}></MainImage>

            <SecondContainer>
                <BrandLogoContainer>
                    <BrandLogoImage src={brand1} alt="brand1"></BrandLogoImage>
                    <BrandLogoImage src={brand2} alt="brand2"></BrandLogoImage>
                    <More>& More</More>
                </BrandLogoContainer>
                <Box>
                    <SecondText>{title}</SecondText>
                    <SecondText>Up To {off} OFF</SecondText>
                    <PageBreaker/>
                    <Explore> + Explore</Explore>
                </Box>
            </SecondContainer>
        </Container>
    )
}

export default CarouselItems;