import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import { findEngUzb, findUzbEng } from "../../lib/fetchData.js";
import { BounceLoader } from "react-spinners";
import axios from "axios"
function Result(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState("");
  useEffect(() => {
    async function fetchAlgo(lang, word) {
      let data = await (lang === "EN → UZ"
        ? await findEngUzb(word)
        : await findUzbEng(word)
      ).json();
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

  return data ? <ResulComponent data={data} /> : <BounceLoader />;
}
function ResulComponent(props) {
  const word = props.data.word;
  let audio = new Audio(
    `http://ssl.gstatic.com/dictionary/static/sounds/20200429/${word}--_gb_1.mp3`
  );
  const start = () => {
    audio.play();
  };
  return (
    <div className={classes.result}>
      {console.log(1, props.data)}
      <h1> {props.data.word} <i style={{fontSize: "18px", marginLeft: "8px", }}className={`fa fa-volume-up`} onClick={() => start()}></i></h1>
      {props.data.transc ? (
        <p className={classes.transc}>{props.data.transc}</p>
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
