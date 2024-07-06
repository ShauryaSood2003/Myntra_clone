import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

const Container = styled(Box)`
  width: 50%;
  margin: 20px 5px;
  position: relative;
`;

const Logo = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  top: 10px;
  z-index: 1;
  color: #808080;
  font-size: 18px;
`;

const SearchBox = styled(InputBase)`
  width: 100%;
  padding: 5px 16px 5px 40px;
  border-radius: 5px;
  background: rgba(68, 68, 69, 0.1);
  font-size: 13px;
  font-weight: 500;
  border: ${props => (props.isActive ? "0.5px solid #707073" : "none")};
  background: ${props => (props.isActive ? "rgba(68, 68, 69, 0.4)" : "rgba(68, 68, 69, 0.1)")};
  outline: none;
`;

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <Container>
      <Logo />
      <SearchBox
        placeholder="Search for products, brands and more"
        isActive={isActive}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

export default SearchBar;
