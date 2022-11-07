import React from 'react'
import classes from "./Result.module.css";
import {getLimit} from "../../../lib/fetchBlogData.js"
import { useState, useEffect } from 'react';
 function Result() {
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])
    const [res, setResult] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try {
                const json = await getLimit(1,5);
                setTitle(json[0]["title"]);
                setBody(json[0]["body"]);
                setData(json);
            
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
        // <ResultComponent key={index} title={ i["title"]?  i["title"]: ""} desc={ i["body"]?i["body"]: ""}/>
    }, []);
useState(() =>{
    async function renderComponent(){

    
    var data1 =  await data.forEach((i, index) => (
        <div key={index} className={classes.result} style={{marginTop: "76px"}}>
        <div className={classes.result}>
            <h1 style={{textAlign: "center"}}>{ i["title"]}</h1>
            <div className={classes.desc} dangerouslySetInnerHTML={{__html: i["body"].toString().replace(/<img[^>]*>/g,"")}} ></div>
        </div>
        </div>))
        setResult( await data1);
        console.log( await data1)
    }
    renderComponent()
}, [body])

       return( 
        <div>
          <div style={{width: "80%", paddingTop: "50px"}}>
           {console.log(title)}
           {body}
           <ResultComponent title={title} body={body}/> 
         </div>
    </div>
    )
    // return 
    
}
function ResultContainer(props){
    const [title, desc] = props
    // blog = blog.json()
    return (
        <div style={{width: "80%", paddingTop: "50px"}}>
        {console.log(title)}
        {console.log("Log:", title)}
        
        <ResultComponent title={ title?  title: ""} desc={ desc?desc.replace(/<img[^>]*>/g,""): ""}/>
    </div>
    )
}
const  ResultComponent = (props) => {
    if(props.desc){
        console.log("Hello", props.desc.toString().replace(/<img[^>]*>/g,""))

    }
    return (
        <div className={classes.result} style={{marginTop: "76px"}}>
        <div className={classes.result}>
            <h1 style={{textAlign: "center"}}>{props.title}</h1>
            <div className={classes.desc} dangerouslySetInnerHTML={{__html: props.desc.toString().replace(/<img[^>]*>/g,"")}} ></div>
        </div>
        </div>
    )   
}

export default Result