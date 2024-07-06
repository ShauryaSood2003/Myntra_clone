import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const ItemContainer = styled(Box)`
  margin: 0 20px;
`;

const Text=styled(Typography)`
  font-size:12px;
`

const Item = ({ icon, text ,onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </ItemContainer>
  );
};

export default Item;
