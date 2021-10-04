import React from 'react'
import NavBar from './NavBar'
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import ft from './images/fantasci-trivia.PNG'
import gu from './images/group-up.PNG'
import km from './images/kennel_manager.PNG'
import tg from './images/twitch-goose.PNG'

const useStyles = makeStyles({
    mainContainer:{
        background: "#171F32",
        height: "100%"
    },

    cardContainer:{
        maxWidth: 345,
        margin: "5rem auto"
    }
})

const Projects = () => {
    const classes= useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <NavBar />
            <Grid container justify="center" >
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project1" 
                            height="140" 
                            image={gu} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Group Up
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A JS/Node.js/HTML/CSS MERN Stack application that solves the problem of finding the perfect team to play with in the game OverWatch. Group Up boasts full CRUD functionality, third party API integration, and Google OAuth sign in authentication. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary" href="https://ow-group-up.herokuapp.com/"
>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project1" 
                            height="140" 
                            image={km} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Kennel Manager
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A Python/JS/HTML/CSS/PostgreSQL MERN stack application that offers a better management solution to Animal Care workers with daily tasks. The application boasts full CRUD functionality, Custom User Models, and role specific authorizations.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project1" 
                            height="140" 
                            image={tg}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Twitch Goose
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A React/JS/Node.js/Material Ui/CSS/HTML MERN stack application that offers users the ability to rate and review their favorite twitch streamers. The application boasts full Crud functionality, API integration, and custom Material Ui styling.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                            component="img" 
                            alt="project1" 
                            height="140" 
                            image={ft} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    FantaSci Trivia
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A Javascript/HTML/CSS quiz application that allows users to test their knowledge in 4 different Scifi/Fantasy sagas. The application utilizes time variables, win-loss conditions, and OOP.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects
