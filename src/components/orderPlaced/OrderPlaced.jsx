import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from "@emotion/styled";
import { PlacedImage } from "../../constants/data";

const Container = styled(Box)`
  background-color: #f70067;
  background-image:url('https://www.transparenttextures.com/patterns/az-subtle.png');
  background-size: cover;
  min-height: 100vh;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled(Box)`
  background:#fcfafc;
  
  width: 80%; 
  height: 80%; 
 
`;

const ImagesStyled=styled('img')({
    width:400,
    height:400
})


const TextConatiner=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:50px;
`
const Text=styled(Typography)`
    font-size:22px;
    color:#14f539;
    font-weight:600;
`
const TickIcon=styled(CheckCircleOutlineIcon)`
    color:#14f539;
    font-weight:600;
    font-size:23px;
    padding:2px 7px 0 0 ;
`

const OrderPlaced = () => {
  return (
    <Container>
      <InnerContainer>
       
        <TextConatiner>
            <ImagesStyled src={PlacedImage} alt="Placed Image"></ImagesStyled>
        </TextConatiner>

        <hr/>

        <TextConatiner>
            <TickIcon/>
            <Text>Order Successfully Placed</Text>
        </TextConatiner>
        
      </InnerContainer>
    </Container>
  );
}

export default OrderPlaced;
