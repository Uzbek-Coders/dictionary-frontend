import React from 'react'
import classes from "../../components/Result/Result.module.css";
function Result(props) {
  return (
    <div className={classes.result}>
        <div className={classes.description} 
        style={{ lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: props.res }}></div>
    </div>
  )
}

export default Result;