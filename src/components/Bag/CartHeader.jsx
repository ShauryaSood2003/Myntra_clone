import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Steps from "./Steps";
import BrandLogo from "../header/BrandLogo"
import SecureLogo from "./SecureLogo";

const HeaderStyled=styled(Box)`
    display:flex;
    align-item:center;
    justify-content:space-between;
    width:100%;
    height:88px;
    border-bottom:.4px solid rgba(179, 179, 179,0.3);
    margin-bottom:40px;
    background:#fff;

`

const CartHeader=()=>{
    return(
        <HeaderStyled>
            <BrandLogo></BrandLogo>
            <Steps></Steps>
            <SecureLogo></SecureLogo>
        </HeaderStyled>
    )

}
export default CartHeader;