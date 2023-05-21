import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './Banner.css'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div className='banner'>
        <Container className='banner-Content'>
            <div className='tagline'>

                <Typography variant='h2'
                style={{
                    fontWeight:'bold',
                    marginBottom:15,
                    fontFamily:'Montserrate',
                }}>
                Crypto Hunter
                </Typography>
                
                <Typography variant='subtitle2'
                style={{
                    color:'darkgray',
                    textTransform:'capitalize',
                    fontFamily:'Montserrate',
                }}>
            Get all the Info regarding your favorite Crypto Currency
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner;