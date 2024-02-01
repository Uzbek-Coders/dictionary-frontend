import React from "react";
import "../../components/Search/Search.css";
import { useState, useEffect } from "react";
// import "./AutoComplete.css"
import { RiSearch2Line } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";
import RuUz from "./RuUz.js";
import { ReactComponent as YourSvg } from "../../components/Search/clear.svg";
import AdsComponent from "../../lib/AdSense";

function Search1() {
  const [components, setComponents] = useState("");
  const [field, setField] = useState("");

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
          // onClick={() => {
          //   setLang((prev) => prev.split("-").reverse().join("-"));
          // }}
        >
          <span>RUS</span>
          <TbArrowsExchange />
          <span>UZB</span>
        </button>
        <RiSearch2Line
          className="search-icon"
          style={{ color: `${field ? "#000" : "#aaa"}` }}
        />
        <label className="search-label">
          <input
            type="search"
            aria-labelledby="search-input"
            className="search_inp"
            onChange={(e) => setField(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Искать слова здесь..."
            value={field}
          />
          <RiSearch2Line
            className="search-mob-icon"
            onClick={() => {
              setComponents(<RuUz field={field} />);
              setField("");
            }}
          />
        </label>
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
              display: field ? "block" : "none",
            }}
          />
        </button>
      </div>
      {components}
    </div>
  );
}

export default Search1;
