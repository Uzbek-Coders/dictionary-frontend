import React from "react";
import { useState, useEffect } from "react";
import Result from "../Result/Result";
import { RiSearch2Line } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";
import Ellipse from "../../static/Ellipse.svg";
import { readEngUzb, readUzbEng } from "../../lib/fetchData";
import { ReactComponent as YourSvg } from "./clear.svg";
import "./AutoComplete.css";
import "./Search.css";
import Example from "../Example/Example";
import AdsComponent from "../../lib/AdSense";

function Search() {
  const [English, setEnglish] = useState([]);
  const [Uzbek, setUzbek] = useState([]);

  const [components, setComponents] = useState();
  const [lang, setLang] = useState("English-Uzbek");
  const [field, setField] = useState("example");
  const [data, setData] = useState([]);
  const [autoComponent, setAutoComponent] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      let english = await readEngUzb();
      const englishJS = await english.json();
      let uzbek = await readUzbEng();
      const uzbekJS = await uzbek.json();
      console.log(englishJS);
      console.log(uzbekJS);

      setEnglish(englishJS);
      setData(englishJS);
      setUzbek(uzbekJS);
    };
    fetchMyAPI();
    // EngUzb = await EngUzb.json()
  }, []);

  useEffect(() => {
    setData([]);
    async function fetchData() {
      if (lang === "English-Uzbek") {
        // let EngUzb = await  readEngUzb(field)
        // EngUzb = await EngUzb.json()
        setData(English);
      } else {
        // var UzbEng = await  readUzbEng(field)
        //  UzbEng = await UzbEng.json()
        setData(Uzbek);
      }
    }
    fetchData(lang);
    setField("");
  }, [lang]);

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
    function autoComplete(word) {
      if (word && data) {
        console.log("LP", data[0], word, !data);
        var filtered = data.filter(function (el) {
          return el != null;
        });
        var complete = filtered.filter((i) =>
          i.toLowerCase().startsWith(word.toLowerCase())
        );
        if (!complete) {
          console.log(1);
          complete = data.filter((user) => user.includes(word.toLowerCase()));
        }
      } else {
        var complete = [];
      }
      let td = [];

      complete.length = 7;
      complete.sort((a, b) => a.length - b.length);
      for (let i = 0; i < complete.length; i++) {
        if (complete[i]) {
          td.push(
            <div
              role="button"
              style={{ border: 1 }}
              className="complete"
              key={i}
              onClick={(e) => {
                if (complete[i] != field) {
                  setField(complete[i]);
                } else {
                  setComponents(<Result lang={lang} search={field} />);
                  setAutoComponent([]);
                }
                console.log(complete[i]);
              }}
            >
              <RiSearch2Line className="search-icon" />
              {complete[i]}
            </div>
          );
        } else {
          continue;
        }
      }
      console.log(td);
      return td
    }
    setAutoComponent(autoComplete(field));
  }, [field]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setComponents(
        <Result lang={lang} search={field} uzb={Uzbek} eng={English} />
      );
      setAutoComponent([]);
    }
  }

  return (
    <div className="container">
      <div className="search_con">
        <button
          className="search_sel"
          onClick={() => {
            setLang((prev) => prev.split("-").reverse().join("-"));
          }}
        >
          <span>
            {window.innerWidth > 480
              ? lang.split("-")[0].slice(0, 3).toUpperCase()
              : lang.split("-")[0]}
          </span>
          <TbArrowsExchange />
          <span>
            {window.innerWidth > 480
              ? lang.split("-")[1].slice(0, 3).toUpperCase()
              : lang.split("-")[1]}
          </span>
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
            placeholder="Search words here..."
            value={field}
          />
          <RiSearch2Line
            className="search-mob-icon"
            onClick={() => {
              // setExamples(<Example word={field ? field : "book"} />);
              setComponents(
                <Result lang={lang} search={field} uzb={Uzbek} eng={English} />
 
              );
              setAutoComponent([]);
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
        {Boolean(autoComponent.length) && (
          <div
            className="autoComplete"
            style={{ display: `${field ? "block" : "none"}` }}
          >
            <div className="comp">
              {autoComponent}
              {/* <ul>
              {field &&
                ["hello", "hi", "solo"].map((item) => {
                  return (
                    <li>
                      <RiSearch2Line className="search-icon" />
                      <p>{item}</p>
                    </li>
                  );
                })}
            </ul> */}
            </div>
          </div>
        )}
      </div>
      {components}
    </div>
  );
}

export default Search;
