import styled from '@emotion/styled';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box, Typography } from '@mui/material';

const Conatiner=styled(Box)`
    display:flex;
    align-items:center;
    margin-right:60px;
`

const Logo=styled(VerifiedUserIcon)`
    font-size:40px;
    color:#07a357;
`

const Text=styled(Typography)`
    color:#595757;
    font-size:12px;
    font-weight:600;
    font-family: 'Work Sans', sans-serif;
    padding:0 5px;
`

const SecureLogo=()=>{
    return(
        <Conatiner>
            <Logo></Logo>
            <Text>100%   SECURE </Text>
        </Conatiner>
    )
}
export default SecureLogo;