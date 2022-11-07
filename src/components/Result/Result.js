import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import { findEngUzb, findUzbEng } from "../../lib/fetchData.js";
import notFound from "./notFound.png"
import notFoundUzb from "./notFoundUzb.png"
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

  if( data.word === 404 && props.lang === "EN → UZ"){
    return <NotFoundEngUzb />
  } else if( data.word !== 404 && props.lang === "EN → UZ") {
    return <ResulComponent data={data} none = {none} />;
  } 
  if( data.word === 404 && props.lang === "UZ → EN"){
    return <NotFoundUzbEng />
  } else if(data.word !== 404 && props.lang === "UZ → EN") {
    return <ResulComponent data={data} none = {none} />;
  } 

}
function ResulComponent(props) {
  const start = () => {
    var msg = new SpeechSynthesisUtterance(props.data.word);
msg.voice = speechSynthesis.getVoices().filter(function(voice) { 
      return voice.name === 'Google US English Male'; 
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
const styleClass= {
lineHeight: "50px", 
fontSize: "20px",   
marginLeft: "50px",
marginTop: "24px",
fontStyle: "italic",
}
function NotFoundEngUzb(){
    return (
      <div className={classes.result}>
      <h2 style={{textAlign: "center"}}> Oops, no such word found!</h2>
<div style={{display: "flex", alignItems: "center"}}>
<img src={notFound} alt="Shakespear" style={{width: "200px", textAlign: "center"}}/>
      <div className={classes.description} style={styleClass}>
If you believe there is such a word in the language of Shakespeare, please take a few seconds to report it via <a href="https://t.me/+998907163366">Telegram</a> or <a href="mailto:akbarbankir@gmail.com">Gmail</a> and we will add it asap!</div>
    </div>
</div>
    )
}
function NotFoundUzbEng(){
  return (
    <div className={classes.result}>
    <h3 style={{textAlign: "center"}}>Whoops, there is no such a word in our database!</h3>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
<img src={notFoundUzb} alt="Guy" style={{height: "200px", marginTop: "12px",textAlign: "center"}}/>
<div className={classes.description} style={styleClass}>
If you strongly believe the word exists in the Uzbek language, please take a few seconds to report it via <a href="t.me/+998907163366">Telegram</a> or <a href="mailto:akbarbankir@gmail.com">Gmail</a> and we will add it asap! </div>

</div>
</div>
  )
}
export default Result;