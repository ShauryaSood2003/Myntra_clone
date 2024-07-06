import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const Container = styled(Box)`
  width: 30%;
  height: 100%;
  padding: 15px;
  border-left:1px solid #636363;
  
`;



const RemaningTypography=styled(Typography)`
    font-size:14px;
    padding:3px 0;
    color:#3d3d3d;
`

const DialogItems = ({ item ,TitleColour}) => {
    const TitleStyle={
        color: TitleColour,
        margin:"8px 0"
    }
  return (
    
    <Container>
        
        {item.map((i, index) => (
            <React.Fragment key={index}>
            {index === 0 ? (
                <Typography style={TitleStyle}>{i}</Typography>
            ) : (
                <RemaningTypography>{i}</RemaningTypography>
            )}
            </React.Fragment>
        ))}
        
    </Container>
  );
};

export default DialogItems;
