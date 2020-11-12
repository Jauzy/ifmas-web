import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const Footer = props => {
    return (
        <Box style={{ margin: '2em 5vw' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        About Us
                    </Typography>
                    <Typography variant='h2'>
                        Bengkel Pak Ali
                    </Typography>
                    <Typography variant='' color='textSecondary'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        Social Media
                    </Typography>
                    <IconButton color='primary'>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton color='secondary'>
                        <EmailIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        Credits
                    </Typography>
                    <Typography variant='' color='textSecondary'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </Typography>
                    <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                        Alrights Reserved to Developer.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer