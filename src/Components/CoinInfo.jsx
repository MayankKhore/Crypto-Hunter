import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, {useState, useEffect}  from 'react'
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';
import './CoinInfo.css';
import { Line } from 'react-chartjs-2';
import {chartDays} from '../config/data';
import SelectButton from './Banner/SelectButton';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);



const CoinInfo = ({coin}) => {

  const [historicData, setHistoricData] = useState();
  const [days, setdays] = useState(1);
  const [flag,setflag] = useState(false);

  const {currency} = CryptoState();

  const fetchHistoricData = async () => {
      const {data} = await axios.get(HistoricalChart(coin.id, days, currency));
      setflag(true);
      setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days]);
  

console.log(historicData);

  return (
    <div className='container'>
      {
        !historicData | flag===false ? (
          <CircularProgress 
          style={{color:'gold'}}
          size={250}
          thickness={1}/>
        ):(
          <>
          <Line 
           
            data={{
              labels:historicData.map((coin) =>{
                let date = new Date(coin[0]);
                let time = date.getHours() > 12 ? 
                `${date.getHours() - 12}: ${date.getMinutes()} PM`
                : `${date.getHours()}: ${date.getMinutes()} AM`;

                return days === 1 ? time: date.toLocaleDateString();
              })
              ,

              datasets: [
               {
                  data:historicData.map((coin) =>coin[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                  borderColor:'#EEBC1D',
                }],
            }}
            options={{
              elements:{
                point:{
                  radius:1,
                },
              },
            }}  
            />

       <div style={{
              display:'flex',
              marginTop:20,
              justifyContent:'space-around',
              width:'100%',
            }}>
              {chartDays.map(day => (
                <SelectButton
                selected={day.value === days}
                key={day.value}
                onClick={()=> setdays(day.value)}
              >
                  {day.label}
                </SelectButton>
              ))}
            </div>  
          </>
        )} 
    </div>
  );
};

export default CoinInfo;