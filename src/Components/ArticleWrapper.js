import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ArticleWrapper = ({ datas }) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <GridList cols={2} style={{ margin: '0' }} spacing={10}>
                    <GridListTile cols={2}>
                        <Article data={datas[0]} />
                    </GridListTile>
                    <GridListTile cols={1} rows={2}>
                        <Article data={datas[3]} />
                    </GridListTile>
                    <GridListTile cols={1} rows={2}>
                        <Article data={datas[4]} />
                    </GridListTile>
                </GridList>
            </Grid>
            <Grid item xs={12} md={6}>
                <GridList cols={2} style={{ margin: '0' }} spacing={10}>
                    <GridListTile cols={1} rows={2}>
                        <Article data={datas[1]} />
                    </GridListTile>
                    <GridListTile cols={1} rows={2}>
                        <Article data={datas[2]} />
                    </GridListTile>
                    <GridListTile cols={2}>
                        <Article data={datas[5]} />
                    </GridListTile>
                </GridList>
            </Grid>
        </Grid>
    )
}

export default ArticleWrapper

const Article = ({ data }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        data ? <Box>
            <img style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px', filter: 'brightness(80%) blur(0px)' }}
                src={require(`../../static/collections/articles/${data.frontmatter.thumbnail.relativePath}`)} />
            <Box style={{
                width: '100%', height: '100%', position: 'absolute',
                padding: '1.5em', color: 'white', display: 'flex', flexDirection: 'column'
            }}>
                <Typography variant='subtitle2' color='white' style={{ zIndex: 999 }}>
                    {data?.frontmatter.date}
                </Typography>
                <Typography variant='h5' style={{ fontWeight: 'bold', maxWidth: '300px', width: '100%', zIndex: 999 }}>
                    {data?.frontmatter.title}
                </Typography>
                <Box style={{ marginTop: 'auto' }}>
                    <Button variant='contained' endIcon={<ExpandMoreIcon />} onClick={handleClickOpen}>
                        Read More
                    </Button>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle>
                    <Typography variant='h5'>
                        {data?.frontmatter.title}
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary'>
                        {data?.frontmatter.date}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        tabIndex={-1}
                    >
                        <img src={require(`../../static/collections/articles/${data.frontmatter.thumbnail.relativePath}`)} width='100%' style={{ borderRadius: '10px' }} />
                        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: data.html }} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box> : null
    )
}