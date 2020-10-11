import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tooltip from '@material-ui/core/Tooltip'

import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'

import { isDarkMode } from '../../static/atoms/utils'
import { useRecoilState } from 'recoil'

const Navbar = props => {
    const classes = useStyles();
    const section = ['Articles', 'Parts']
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const handleToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar color='inherit'>
                    <Container>
                        <Toolbar>
                            <Typography variant="h5" style={{ margin: '0 .5em' }}>
                                <Link to={`/`}
                                    style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>BENGKEL•</Link>
                            </Typography>
                            {section.map(item => (
                                <Typography variant="h6" key={item} style={{ margin: '0 .5em' }}>
                                    <Link to={`/${item.toLowerCase()}`}
                                        style={{ color: 'inherit', textDecoration: 'none' }}>{item}</Link>
                                </Typography>
                            ))}
                            <Tooltip style={{ marginLeft: 'auto' }} title='Toggle Light/Dark Theme'>
                                <IconButton color="inherit" onClick={handleToggleTheme}>
                                    {!darkMode ? <LightIcon /> : <DarkIcon />}
                                </IconButton>
                            </Tooltip>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </div>
    );
}

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default Navbar

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));