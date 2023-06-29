import React, { useEffect, useState } from "react";
import { findEngUzb, findUzbEng } from "../lib/fetchData.js";

function Result(props) {
  const lang = props.lang;
  const word = props.search;
    const [result, setResult] = useState([]);
    
  useEffect(() => {
    (async function fetchData() {
      const NotFound = {
        word: "404",
        desc: "NotFound",
      };
      if (lang === "en-uz") {
        const data = await (await findEngUzb(word)).json();

        await setResult(Object.is(data.data, null) ? NotFound : data.data);
      } else if (lang === "uz-en") {
        const data = await (await findUzbEng(word)).json();

        await setResult(Object.is(data.data, null) ? NotFound : data.data);
      }
    })();
  }, [lang, word]);
    
  return (
    <div>
      <h2>{result.word ? result.word : "Loading"}</h2>
      <div
        style={{ lineHeight: 1.8 }}
        dangerouslySetInnerHTML={{
          __html: result.desc ? result.desc : "Loading",
        }}
      ></div>
    </div>
  );
}

export default Result;
