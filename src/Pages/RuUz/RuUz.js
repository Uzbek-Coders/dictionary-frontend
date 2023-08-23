import React, { useState } from "react";
import axios from "axios";
import cutter from "./fetch.js";
import Result from "./Result.js";
import { NotFoundRu } from "./Result.js";
const RuUz = (props) => {
  const [data, setData] = useState("Loading...");
  const [error, setError] = useState(false);
  React.useEffect(() => {
    function getRuUz(word) {
      axios
        .get(
          `https://cors-anywhere-lake.vercel.app/uz.wiktionary.org/w/index.php?title=${word}&action=raw`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              Origin: "https://uz.wiktionary.org/",
            },
          }
        )
        .then(function (response) {
          setError(false);

          console.log(cutter(response.data));
          setData(cutter(response.data));
          // return response.data
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          setError(true);
          console.log(error.config);
        });
      // return aha //
    }
    getRuUz(props.field);
  }, [props.field]);

  return <div>{error ? <NotFoundRu /> : <Result res={data} />}</div>;
};

export default RuUz;
