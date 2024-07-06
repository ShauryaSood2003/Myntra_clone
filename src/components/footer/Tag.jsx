import { Box } from "@mui/material";
import styled from "@emotion/styled";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import MailIcon from '@mui/icons-material/Mail';

const Conatiner=styled(Box)`
    display:flex;
    margin:5% 43% 2%;
    
`
const IconWrapper = styled(Box)`
    margin-right: 18px; 
    color:#282929;
`

const Tag=()=>{
    return(
        <Conatiner>
             <IconWrapper><FacebookIcon /></IconWrapper>
            <IconWrapper><TwitterIcon /></IconWrapper>
            <IconWrapper><InstagramIcon /></IconWrapper>
            <IconWrapper><GoogleIcon /></IconWrapper>
            <IconWrapper><MailIcon/></IconWrapper>
        </Conatiner>
    )
}
export default Tag;