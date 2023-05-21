import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import styled from '@emotion/styled';
import { Box } from '@mui/system';



function App() {

  // const useStyles = styled(theme =>({
  //   App:{
  //     backgroundColor:'#14161a',
  //     color:'white',
  //     minHeight:'100vh'
  //   },
  // }));

 


const theme = {
App: {
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh'
  }
};


  // const classes =useStyles();

  return (
  <BrowserRouter>
        <Box sx={theme.App}>
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        </Box>
    </BrowserRouter>

  )
}

export default App;


// style={{backgroundColor:'#14161a',
//         color:'white',
//         minHeight:'100vh',}} 