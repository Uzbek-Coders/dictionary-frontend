import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import { findEngUzb, findUzbEng } from "../../lib/fetchData.js";
function Result(props) {
  const [none, setNone] = useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAlgo(lang, word) {
      if(lang === "EN → UZ"){
        var data  = await (await findEngUzb(word)).json()
          setNone(false)
      } else {
        var data = await (await findUzbEng(word)).json()
         setNone(true)
      }
      const notFound = {
        word: 404,
        desc: 404,
        trnasc: 404,
      };
      if (data.data == null) {
        setData(notFound);
      } else {
        setData(data.data);
      }
      console.log(data, word);
    }
    fetchAlgo(props.lang, props.search);
  }, [props.search, props.lang]);

  return  <ResulComponent data={data} none = {none} /> ;
}
function ResulComponent(props) {
  let audio = new Audio(
    props.data.audio
  );
  const start = () => {
    var msg = new SpeechSynthesisUtterance(props.data.word);
msg.voice = speechSynthesis.getVoices().filter(function(voice) { 
      return voice.name == 'Google US English Male'; 
})[0];

// now say it like you mean it:
speechSynthesis.speak(msg);
  };
  return (
    <div className={classes.result}>
      <h2> {props.data.word} <i style={{fontSize: "21px", marginLeft: "8px", display: props.none?  "none":"inline-block"}} className={`fa fa-volume-up`} onClick={() => start()}></i></h2>
      {props.data.transc ? (
        <p className={classes.transc} style={{fontSize: "18px"}}>/{props.data.transc}/</p>
      ) : null}
      <div
        className={classes.description}
        style={{ lineHeight: 1.8 }}
        dangerouslySetInnerHTML={{ __html: props.data.desc }}
      ></div>
    </div>
  );
}
export default Result;
