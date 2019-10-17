import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';

const FooterContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 40px;

`;

function Footer() {
    return (
      <FooterContainer>
        <Typography variant="title">Coded by Iryna Malankava</Typography>
      </FooterContainer>
    );
}


export default Footer;