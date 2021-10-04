import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import NavBar from './NavBar'

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: "#171F32"
    },
    timeLine: {
        position: "relative",
        padding:"1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #FF611D",
            right: "40px",
            top: 0
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")] :{
            padding:"2rem",
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto",
            }
        }
    },
    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid #FF611D",
        position:"relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: "''",
            position: "absolute",
        },
        "&:before":{
            content: "''",
            position:"absolute",
            right: "-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"#CCCFD3 #CCCFD3 transparent transparent",
            borderWidth: "0.625rem",
            transform:"rotate(45deg)",

        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin:"1rem",
                borderColor:"#FF611D"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent #CCCFD3 #CCCFD3"
            }
        }
    },
    timeLineYear:{
        textAlign: "center",
        position:"relative",
        maxWidth: "9.375rem",
        margin:"0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "#CCCFD3",
        color: "#171F32",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before":{
            display: "none"
        },
        [theme.breakpoints.up("md")] : {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)" :{
                float: "none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display: "none"
            }
        }
    },
    heading:{
        color: "#CCCFD3",
        padding: "3rem 0",
        textTransform:"uppercase",
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform:"uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <>
        <NavBar />
        <Box className={classes.mainContainer} component="header">
            <Typography className={classes.heading} variant="h4" align="center">
                Professional Experience
            </Typography>
            <Box className={classes.timeLine} component="div">
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">2013</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Security Forces Patrolman
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        United States Air Force, Warner Robins AFB GA
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                        Ensured public safety by maintaining order, responding to emergencies, and promoting community relations.
                    </Typography>
                </Box>
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">2015</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Military Working Dog Handler
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        United States Airforce, Dover AFB DE
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                    Excellent physical fitness and quick reflexes, Problem-solving skills, An ability to work well under pressure, An in-depth understanding of animal behaviors                    </Typography>
                </Box>
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">2017</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Security Forces Supervisor
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        United States Air Force, Hanscom AFB MA
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                        Plan administrative actions for personnel and equipment utilized on the installiation, trusted to conduct unit wide response testing, and created new administrative guidelines for 150 man unit.
                    </Typography>
                </Box>
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">2019</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Package Handler
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        New England Treatment Association, Franklin MA
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                        Team based work environment that ensured the packaging, handling, and delivery of medical grade products while providing unique problem solving abilities.  
                    </Typography>
                </Box>
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">2020</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        Grocery Stocker
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        Shaw's Supermarket, Northbridge MA
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                        Provided excellent customer service, organized products for sale, and controlled weekly shipments
                    </Typography>
                </Box>
              <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2">SCHOOL</Typography>  
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" align="center" className={classes.subHeading}>
                        General Assembly
                    </Typography>
                    <Typography variant="body1" align="center" style={{color:"#CCCFD3"}}>
                        Software Engineering Immersive
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color:"#FF611D"}}>
                    A 500 + hour software engineering intensive. Languages & Relevant Technologies: JavaScript, React, Node, jQuery, HTML, CSS, MongoDB, & PostgreSQL 
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Resume
