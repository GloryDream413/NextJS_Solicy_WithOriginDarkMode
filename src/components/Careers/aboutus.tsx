import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';

import MyVideo from '@/components/myvideo'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Years in industry',
    value: '2+',
  },
  {
    label: 'Projects successfully done',
    value: '100+',
  },
  {
    label: 'Employees',
    value: '70+',
  },
  {
    label: 'Ongoing Partners',
    value: '40+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <>
      <Box sx={{ width: '90%', textAlign: 'center', mb: { xs: 1, md: 0 } }} >
        <Typography
          sx={{ color: 'white', mb: { xs: 1, md: 2 }, fontSize: { xs: 40, md: 54 }, fontWeight: 'bold' }}
        >
          {value}
        </Typography>
        <Typography color="white" variant="h5">
          {label}
        </Typography>


      </Box>
      {label !== 'Ongoing Partners' ?
        <Divider orientation='vertical' sx={{ marginLeft: 'auto', marginRight: '10px', background: 'white' }}></Divider>
        : <></>}

    </>
  )
}

const AboutUs: FC = () => {
  return (
    <>
      <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 24, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    component="h2"
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 25, md: 45 },
                      letterSpacing: 1.5,
                      fontWeight: 'bold',
                      lineHeight: 1.3,
                    }}
                  >

                    Careers
                  </Typography>
                </Box>
                <Box sx={{ mt: 4, mb: 4, width: { xs: '100%', md: '90%' } }}>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.4, fontSize: '26px' }}>
                    {
                      "Solicy believes in hard work, enthusiasm, and passion. We constantly encourage individuals with little or even no experience to join our adventure. As a result of their dedication and ambition, many starting professionals have grown into full-scale experts at Solicy. It’s time for you to join the exciting roller-coaster of career-building. By joining our big family you’ll enter the Blockchain and Software world, and essentially become a part of Solicy family."
                    }
                  </Typography>
                </Box>

              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
              <Box sx={{ lineHeight: 0 }}>
                <Image src="https://ik.imagekit.io/2zlgs27bjo/public/image/dark/darkFrame.svg?tr=w-308,q-100" width={800} height={800} alt="Hero img" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default AboutUs
