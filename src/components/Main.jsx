import styled from "@emotion/styled"
import { Box } from "@mui/material"

import Header from "./header/Header"
import SimpleSlider from "./carousel/SimpleSlider"
import DealOfDay from "./dealOfDay/DealOfDay"
import TopPicks from "./topPicks/TopPicks"
import Footer from "./footer/Footer"

const Container=styled(Box)`
  overflow-x: hidden;
`

const Main=()=>{
    return(
        <Container>
            <Header></Header>
            <SimpleSlider></SimpleSlider>
            <DealOfDay></DealOfDay>
            <TopPicks></TopPicks>
            <Footer></Footer>
        </Container>
    )
}
export default Main;
