import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Footer from './Footer'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'
import{
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"

import{
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"

const useStyles = makeStyles(theme=>({
    sideBarContainer:{
        width: 250,
        background: "#171F32",
        height: "100%"
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color: "#FF611D"
    }
}))

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
]

const NavBar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = ((slider, open) => () =>{
        setState({...state, [slider]: open})
    })
    const classes = useStyles()

    const sideList = slider =>(
        <Box className={classes.sideBarContainer} component="div" onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} />
            <Divider />
            <List>
                {menuItems.map((lsitem, key)=>(
                    <ListItem button key={key} component={Link} to={lsitem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsitem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsitem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#101727"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color:"#FF611D"}} />
                    </IconButton>
                    <Typography variant="h5" style={{color:"#CCCFD3"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider
                    anchor="right" 
                    open={state.right}
                    onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer />
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default NavBar
