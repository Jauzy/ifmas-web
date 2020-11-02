import React from "react"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';

import ImageBG from "../images/main.jpg"

import Layout from "../Components/Layout"
import SEO from "../Components/Seo"

const accent = deepPurple['500']; // #e040fb

const mainButtonStyle = {
  maxWidth: '250px',
  minWidth: '225px',
  minHeight: '50px',
  borderRadius: '0'
}



const IndexPage = ({ data }) => {
  return (
    <div style={{ height: '80vh', backgroundImage: `url(${ImageBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Layout>
        <SEO title="Home" />
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', paddingTop: '30vh' }}>
          <Grid container spacing={3}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <Typography variant="h1" component="h2" style={{ fontWeight: 'bold' }}>
                  Professional repair <br />
                  of passanger cars.
                </Typography>
                <Typography variant="h5" gutterBottom >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
              </Grid>

              <Grid container spacing={4} xs={12} style={{paddingTop: '2vh'}}>
                <Grid item>
                  <Button variant="contained" size='large' style={{ color: 'white', backgroundColor: `${accent}`, ...mainButtonStyle }}>
                    Check our services
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" size='large' style={mainButtonStyle}>contact us</Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid container xs={12} justify="flex-end" alignItems="flex-end">
              <Grid item xs={3}>
                <Card style={{borderRadius: '0'}}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: '200px' }}
                      image= {require ("../images/driving.jpg")}
                    />
                    <CardContent>
                      <Grid container>
                        <Typography item gutterBottom variant="h6">
                            Discover More
                        </Typography>
                        <ArrowForwardIosIcon item fontSize='small' style={{marginTop: '0.72vh', marginLeft: '0.7vh'}}></ArrowForwardIosIcon>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>

            <Box pt={6}>
              <Grid container xs={12}>
                <Typography variant='h2' style={{ fontWeight: 'normal' }}> Why is it worth trusting <br/> our company?</Typography>
              </Grid>
            </Box>
          </Grid>

        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage
