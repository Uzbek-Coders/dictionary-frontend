import React from "react";
import "../../components/Search/Search.css";
import { useState, useEffect } from "react";
// import "./AutoComplete.css"
import RuUz from "./RuUz.js";
import { ReactComponent as YourSvg } from "../../components/Search/clear.svg";

function Search1() {
  const [components, setComponents] = useState("");
  const [field, setField] = useState("");
  const [none, setNone] = useState(false);

  // useEffect(() => {
  //   async function asyncData(){
  //   let data =  (lang === "EN → UZ"
  //       ?  await EngUzbArr
  //       :  await UzbEngArr
  //     )

  //     setData(await data);
  //   };
  //   asyncData()
  //   asyncData()
  //   setField("");
  // }, [lang]);

  useEffect(() => {
    const quote = ["`", "'"];
    setField(field.replace(quote[0], "ʻ").replace(quote[1], "ʻ").toLowerCase());
  }, [field]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setComponents(<RuUz field={field} />);
    }
  }

  return (
    <div className="container">
      <div className="search_con">
      <button
          className="search_sel"
        
        >RU → UZ → RU</button>
        <input
          type="search"
          aria-labelledby="search-input"
          className="search_inp"
          onChange={(e) => setField(e.target.value)}
          onKeyPress={handleKeyPress}
          value={field}
        />
        <button
          className="search_btn"
          onClick={() => {
            console.log(field, components);
            setComponents(<RuUz field={field} />);
          }}
          aria-label="search"
        >
          <i className="fas fa-search" stle={{ fontSize: "24px" }}>
            {" "}
          </i>
        </button>
        <button
          className="clear_btn"
          onClick={() => {
            setField("");
          }}
          aria-label="clear"
        >
          <YourSvg
            style={{
              padding: "7px 0",
              margin: "0 auto",
              width: "30px",
              display: none ? "none" : "block",
            }}
          />
        </button>
        <br />
      </div>

      {components}
    </div>
  );
}

export default Search1;
