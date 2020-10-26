import React from 'react'
import {ButtonField} from "./Components/Atoms/Button/index"
import {createUseStyles} from "react-jss";
const useStyles=createUseStyles({
    buttonContainer:{
        height:40,
        width:250,
        fontSize:18,
        padding:"0px 10px",
        border:"none",
        borderBottom:"1px solid #e7e7e7",
        background:"red",
        borderRadius:5,
        '&:focus':{
            background:"#e7e7e7",
            borderBottom:"1px solid #dddddd",
        }
    }
    
})
const Test =()=> {
    const classes= useStyles();
    return(
        <ButtonField className={classes.buttonContainer}>Click Me</ButtonField>
    )
}

export default Test;