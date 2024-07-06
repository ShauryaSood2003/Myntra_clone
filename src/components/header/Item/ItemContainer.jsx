import styled from "@emotion/styled";
import { Box ,Typography} from "@mui/material";
import { useState } from "react";
import SimpleDialog from './SimpleDialog';

const Item = styled(Typography)`
    padding: 27px 15px;
    font-weight: 600;
    font-size: 14px;
    color: #454545;
`;
const Container = styled(Box)`
  position: relative;
`;

const ItemContainer=({name,itemArrays,Colour})=>{
    const [open, setOpen] = useState(false);
    return(
        <Container  
            onMouseEnter={() => {
                setOpen(true)
            }}
            onMouseLeave={()=>{
                setOpen(false)
            }}
            
            style={open?({borderBottom:"7px solid "+Colour}):{}}
        >

            <Item>{name}</Item>
            <SimpleDialog open={open} setOpen={setOpen} itemArrays={itemArrays} TitleColour={Colour}></SimpleDialog>

        </Container>
        
    )

}
export default ItemContainer;