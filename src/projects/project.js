import React, { useState } from "react";
import "./index.css";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 550,
        minHeight: 185,
        backgroundColor: "whitesmoke",
        margin: '10px',
        marginLeft:"30px",
        padding:"20px",
        opacity: "80%",

    },
});
const logoThingie = {   
    width:"255px",
    margin:"0 20px",
}
const Project = (props) => {
    const classes = useStyles();
    let logo;
    //manual picture setting
    if(props.index===0||props.index===1){
         logo = require("./images/to-doer.png");
    }
    if(props.index%2===0){
    return <div>
        <div className="project">
        <Card className={classes.root} > 
            <div className="picAndInfo" style={{display: "flex", flexDirection:"column",
        justifyContent:"center"}}>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}><img style={logoThingie} src={logo}/> 
             <div>
                <p>{props.desc}</p>
             </div></div>
             
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop:"50px"
                }}>
                    <a href="" target="_blank"><GitHubIcon style={{ fontSize: 45, color: "black" }} /></a>
                        &nbsp;
                    <a href="" target="_blank"><LinkIcon style={{ fontSize: 45, color: "black", transform: "rotate(45deg)" }} /></a>

             </div>
         </div>
        </Card>
        </div>
            </div>}
    else{
        return <div>
            <div style={{display: "flex", flexDirection:"row-reverse"}}className="project">
                <Card className={classes.root} >
                    <div className="picAndInfo" style={{
                        display: "flex", flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}><img style={logoThingie} src={logo} />
                            <div>
                                <p>{props.desc}</p>
                            </div></div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "50px"
                        }}>
                            <a href="" target="_blank"><GitHubIcon style={{ fontSize: 45, color: "black" }} /></a>
                        &nbsp;
                    <a href="" target="_blank"><LinkIcon style={{ fontSize: 45, color: "black", transform: "rotate(45deg)" }} /></a>

                        </div>
                    </div>
                </Card>
            </div>
        </div>

    }
            ;
}

export default Project;
