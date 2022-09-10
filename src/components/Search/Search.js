import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import "./AutoComplete.css"
import Result from "../Result/Result";
import { readEngUzb, readUzbEng } from "../../lib/fetchData";

function Search() {
  const [components, setComponents] = useState();
  const [lang, setLang] = useState("EN → UZ");
  const [field, setField] = useState("");
  const [complete, setComplete] = useState([]);
  const [data, setData] = useState([]);
  const [autoComponent, setAutoComponent] = useState([]);
  const [EngUzb, setEngUzb] = useState([]);
  const [UzbEng, setUzbEng] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let EngUzb = await  readEngUzb()
      let UzbEng = await  readUzbEng()
      UzbEng = await UzbEng.json()
      EngUzb = await EngUzb.json()
      console.log(EngUzb, UzbEng);
      setEngUzb(EngUzb)
      setUzbEng(UzbEng)
      let data = await (lang === "EN → UZ"
        ? await EngUzb
        : await UzbEng
      )
      const arr = [];
      data.map((i) => arr.push(i["word"]));
      setData(arr);
    }
    fetchData(lang);
  }, []);

  useEffect(() => {
    async function asyncData(){
    const EngUzbArr = []
    const UzbEngArr = []
    EngUzb.map((i) => EngUzbArr.push(i["word"]))
    UzbEng.map((i) => UzbEngArr.push(i["word"]))
    let data =  (lang === "EN → UZ"
        ?  await EngUzbArr
        :  await UzbEngArr
      )

      setData( await data);
    };
    asyncData()
    asyncData()
    setComplete([]);
    setField("");
  }, [lang]);

  useEffect(() => {
    
  const quote = ["`", "'"]
  setField( field.replace(quote[0], "’").replace(quote[1], "’"))

    function autoComplete(word) {
      if (word && data) {
        console.log("LP", data[0], word, complete);
        var complete = data.filter((i) => 
            i.toLowerCase().startsWith(
            word.toLowerCase())
          );
        if (!complete) {
          console.log(1);
          complete = data.filter((user) =>
          user.includes(word.toLowerCase())
        );
        }
      } else {
        var complete = [];
      }
      let td = [];
      
      complete.length = 5;
      complete.sort((a, b) => a.length - b.length);
      for (let i = 0; i < complete.length; i++) {
        if(complete[i]){
          td.push(<div role="button" style={{border: 1}} className="complete" key={i} onClick ={(e) => {
            
            if(complete[i] != field){
              setField(complete[i]);
          } 
            else {
              setComponents(<Result lang={lang} search={field} />);
              setAutoComponent([])
            }
            console.log(complete[i]);
          }}> {complete[i]} </div>);
        } else { continue }
      } 
      console.log(td);
      return td;
    }
    setAutoComponent(autoComplete(field));
  }, [field]);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setComponents(<Result lang={lang} search={field} />);
      setAutoComponent([])
    }
  }

  return (
    <div className="container">
      <div className="search_con">
        <button
          className="search_sel"
          onClick={() =>
            lang === "EN → UZ" ? setLang("UZ → EN") : setLang("EN → UZ")
          }
        >
          {lang}
        </button>
        <input
          aria-labelledby="search-input"
          className="search_inp"
          onChange={(e) => setField(e.target.value)}
          onKeyPress={handleKeyPress}
          value={field}
        /> 
        <button
          className="search_btn"
          onClick={() => {
            setComponents(<Result lang={lang} search={field} />); 
            setAutoComponent([])
          }}
          aria-label="search"
        >
          <i className="fas fa-search" stle={{fontSize:"24px"}}> </i>
        </button>
        <br />
      </div>
      {console.log(data)}
      <div className="autoComplete">
        <div className="space"></div>
        <div className="comp">
      {autoComponent}
      </div>
        </div>      
      {components} 
    </div>
  );
}

export default Search;

