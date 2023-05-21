import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {CryptoState} from '../CryptoContext';
import {SingleCoin} from '../config/api';
import axios from 'axios';
import './CoinPage.css';
import CoinInfo from '../Components/CoinInfo';
import { Box, LinearProgress, Typography } from '@mui/material';

//import HtmlReactParser from 'html-react-parser';


const CoinPage = () => {

  const {id} = useParams();
  const [ coin, setCoin] = useState()

  const {currency , symbol} = CryptoState();

  const fetchCoin = async ()=>{
    const {data} = await axios.get(SingleCoin(id));

    setCoin(data);
  }

  const numberWithCommas = (x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  useEffect(() => {
    fetchCoin();
  }, [currency]);
  
 




if (!coin) return <LinearProgress style={{backgroundColor:'gold'}} />;

  return (
    // <ThemeProvider theme={styletheme}>
    <div className='container_cp' >
    
      <div className='sidebar_cp'>
      <img 
        src={coin?.image.large}
        alt={coin?.name}
        height='200'
        style={{ marginBottom: 20}}/>
      <Typography variant='h3' className='heading'>
      {coin?.name}
      </Typography>
      <Typography variant='subtitled1' className='description'>
      {coin?.description.en.split(". ")[0]}.
      </Typography>
      <div className='marketData'>
        <span style={{display:'flex'}}>
        <Typography variant='h5' className='heading'>Rank:</Typography>
        &nbsp; &nbsp;
        <Typography
        variant='h5'
        style={{
          fontFamily:'Montserrat',
        }}>
          {coin?.market_cap_rank}
        </Typography>
        </span>

        <span style={{display:'flex'}}>
        <Typography variant='h5' className='heading'>Current Price:</Typography>
        &nbsp; &nbsp;
        <Typography
        variant='h5'
        style={{
          fontFamily:'Montserrat',
        }}>
          {symbol}{" "}
            {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
        </Typography>
        </span>

        <span style={{display:'flex'}}>
        <Typography variant='h5' className='heading'>Market Cap:</Typography>
        &nbsp; &nbsp;
        <Typography
        variant='h5'
        style={{
          fontFamily:'Montserrat',
        }}>
           {symbol}{" "}
           {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M 
        </Typography>
        </span>
      </div>
    </div>

      {/* chart */}
      <CoinInfo coin={coin} />
  </div>
  // </ThemeProvider>
  )
}

export default CoinPage;