import styled from "@emotion/styled";
import { brandLogo } from "../../constants/data";

const Image=styled("img")({
    height:50,
    width:90,
    margin:"20px 60px "
})  


const BrandLogo=()=>{

    return(
        <Image src={brandLogo} alt=""></Image>
    )
};
export default BrandLogo;