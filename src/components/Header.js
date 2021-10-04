import React from 'react'
import Typed from 'react-typed'
import {makeStyles} from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from './images/logo_background.png'

const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color: "tomato",
    },
    subTitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        positon: "absolute",
        marginTop: theme.spacing(20),
        width:"100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar}  />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Alex Cormier"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant ="h5">
               <Typed className={classes.subTitle} strings={["Front End Developer", "Back End Developer", "MERN Stack"]} typeSpeed={40} backSpeed={60} loop/>
    
            </Typography>           
        </Box>
    )
}

export default Header
