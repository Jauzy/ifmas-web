import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Part = ({ data }) => {
    return (
        <Box style={{ border: '1px solid grey', margin: '1em 0' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} >
                    <img src={require(`../../static/collections/parts/${data.frontmatter.thumbnail.relativePath}`)} width='100%' height='100%' />
                </Grid>
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: 'center' }}>
                    <Box style={{ padding: '0 1em' }}>
                        <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                            {data.frontmatter.title}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary' style={{ fontWeight: 'bold' }}>
                            Added {data.frontmatter.date}
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            {data.frontmatter.description}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={3} style={{ padding: '0 1em' }}>
                        <Grid item xs={6} md={12}>
                            <Box>
                                <Typography variant='h4' style={{ fontWeight: 'bold' }} color='primary' align='center'>
                                    {data.frontmatter.stock}
                                </Typography>
                                <Typography variant='body1' color='primary' style={{ fontWeight: 'bold' }} align='center'>
                                    Stok
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={12}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }} color='primary' align='center'>
                                {data.frontmatter.price}
                            </Typography>
                            <Typography variant='body1' color='primary' style={{ fontWeight: 'bold', paddingBottom: '10px', }} align='center'>
                                Harga
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Part