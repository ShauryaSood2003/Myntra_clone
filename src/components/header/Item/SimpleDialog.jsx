import { Box, Dialog } from "@mui/material";
import DialogItems from "./DialogItems";
import styled from "@emotion/styled";


const Container=styled(Box)`
    display:flex;

`

const SimpleDialog=({open,setOpen,itemArrays,TitleColour})=>{
    
    const dialogDesign={
        width:"90%",
        height:"56%",
        background:"white",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
        position:"absolute",
        left: "11%",
        top: "6.2%",
        border:"none"
    }
    const handleDialogMouseLeave = () => {
        setOpen(false);
    };

    return(

        <Dialog 
            open={open} 
            onClose={()=>{
                setOpen(false)
            }}
            onMouseLeave={handleDialogMouseLeave}
            PaperProps={{sx:dialogDesign}}
            >

            <Container>
            
               
                <DialogItems item={itemArrays[0]} TitleColour={TitleColour}></DialogItems>
               
                <DialogItems item={itemArrays[1]} TitleColour={TitleColour}></DialogItems>
                
                <DialogItems item={itemArrays[2]} TitleColour={TitleColour}></DialogItems>
               
            </Container>

        </Dialog>
    )
}
export default SimpleDialog;