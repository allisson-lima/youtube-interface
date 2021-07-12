import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
      background: theme.palette.primary.main,
      height: '100vh'
    }
  }));

export default function Home(){

    const classes = useStyles();

    return(
        <div className={classes.root}>

        </div>
    )
}