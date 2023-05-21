import { AppBar, MenuItem, Select,Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {CryptoState} from '../CryptoContext';
import styled from '@emotion/styled';



const Header = () => {
  const navigate = useNavigate()

  const {currency, setCurrency} = CryptoState();

// test start

const customStyle = {
  title: {
    flex:1,
    color: "gold",
    cursor: "pointer",
    fontFamily: 'Montserrat', 
    fontWeight: "bold",
  }
}

//   const classes =useStyles();

// test end



    const theme = createTheme({
      palette: {
        primary: {
          main:'#fff',
        },
        mode: "dark",
      },
    });
  

  return (
     <ThemeProvider theme={theme}>
   <AppBar color='transparent' position='static'>
    <Container>
    <Toolbar>
      <Typography sx={customStyle.title} variant="h6"
      onClick={() => navigate('/')}> Crypto Hunter </Typography>

      <Select variant='outlined'
       sx={{
      
        width:100,
        height:40,
        marginLeft:15,
      }} 
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}>
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"INR"}>INR</MenuItem>
      </Select>
    </Toolbar>
    </Container>
   </AppBar>
  </ThemeProvider>
  )
}

export default Header;