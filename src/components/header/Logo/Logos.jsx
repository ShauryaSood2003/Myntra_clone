import { Box } from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import styled from "@emotion/styled";
import Item from "./Item";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
    display:flex;
    align-items:center;
    width:20%;
    margin:20px 20px 20px 50px;
    
`


const Logos=()=>{

    const iconStyle={
        fontSize:"20px",
        paddingLeft:"3.5px",
        color:"#424242"
    }

    const {setCartOpen}=useContext(AccountContext);

    return(
        <Container>

            <Item icon={<PermIdentityIcon style={iconStyle}/>} text="Profile" ></Item>
            <Item icon={<FavoriteBorderIcon  style={iconStyle} />} text="WishList" ></Item>

            <Item onClick={()=>{
                setCartOpen(true)
            }} icon={<WorkOutlineIcon  style={iconStyle} />} text="Bag"
            >
            </Item>

        </Container>
    )
}
export default Logos;