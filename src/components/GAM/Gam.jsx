import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BG1 from './bg2.png'
import VEC from './Vector 27.png'
import IMG from './8 1.png'
import "./Gam.css"
function Gam() {
  return (
    <>
      <Box sx={{
        background:`linear-gradient( rgba(0.9, 0.6, 0.5, 0.8), rgba(0.9, 0.6, 0.5, 0.8) ),url(${BG1})`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        objectPosition:"center",
        padding:"1.4rem 0",

      }}>
        <Container>
            <Typography sx={{
                fontFamily:"Metal Mania",
                fontSize:"4em",
                fontWeight:400,
                textAlign:"center",
                background:"linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                    WebkitBackgroundClip:"text",
                    
                    WebkitTextFillColor:"transparent",
            }}>WHAT’S THETAN GAM?</Typography>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className='inside-img' style={{
                        position:"relative"
                    }}>
                    <img src={VEC} alt=""/>
                        {/* <img src={IMG} alt=""  style={{
                            width:"150px",
                            margin:"auto",
                        }}/> */}
                  
                    </div>
            </Grid>

            </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Gam
