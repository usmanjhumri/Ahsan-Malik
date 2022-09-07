import React from 'react'
import { Box, Container, Grid, Typography,  } from '@mui/material'
import BG from './bg.png'
function GamePlay() {
  return (
    <>
    <Box sx={{
        background:`linear-gradient( rgba(0.9, 0.6, 0.5, 0.8), rgba(0.9, 0.6, 0.5, 0.8) ),url(${BG})`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        objectPosition:"center",
        backgroundSize:"cover",
        width:"100%",
        backgroundBlendMode:"multiply",
        padding:"1.4rem 0"
        

    }}>
        <Container>
        <p className='gameplay' style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                    WebkitBackgroundClip:"text",
                    
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
               
                    textTransform:"uppercase",
                }}>gameplay</p>

               <Box sx={{
                maxWidth:"650px",
                margin:"auto",

               }}>
               <Typography sx={{
                    fontFamily:"Roboto",
                    fontSize:"1.2em",
                    fontWeight:500,
                    color:"#FFFFFF",
                    textAlign:"center",
                }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quasi accusamus odit quidem iure! Libero quam odio magni maxime, est maiores voluptates fugit nesciunt. Quas debitis fuga nobis nam odio!
                </Typography>
               </Box>

            <Grid container>
                
               
                

            </Grid>
        </Container>
    </Box>
      
    </>
  )
}

export default GamePlay