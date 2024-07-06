import { Box } from "@mui/material";
import CartHeader from "./CartHeader";
import CartMain from "./CartMain";

const EmptyCart=()=>{
    return(
        <Box>
            <CartHeader></CartHeader>
            <CartMain></CartMain>
        </Box>
    )
}
export default EmptyCart;