import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import "./AutoComplete.css"
import Result from "../Result/Result";
import { readEngUzb, readUzbEng } from "../../lib/fetchData";
import { ReactComponent as YourSvg } from './clear.svg';

function Search() {
  const [components, setComponents] = useState();
  const [lang, setLang] = useState("EN → UZ");
  const [field, setField] = useState("");
  const [none, setNone] = useState(false);
  const [data, setData] = useState([]);
  const [autoComponent, setAutoComponent] = useState([]);
  useEffect(() => {
    setData([])
    async function fetchData() {
      if(lang == "EN → UZ"){
        let EngUzb = await  readEngUzb(field)
        EngUzb = await EngUzb.json()
       setData(EngUzb);
      } else {
        var UzbEng = await  readUzbEng(field)
         UzbEng = await UzbEng.json()
         setData(UzbEng);
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
      
      complete.length = 7;
      complete.sort((a, b) => a.length - b.length);
      for (let i = 0; i < complete.length; i++) {
        if(complete[i]){
          td.push(<div role="button" style={{border: 1}} className="complete" key={i} onClick ={ (e) => {
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
    if(!field){
      setNone(true)
    } else {
      setNone(false)
    }
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
            setComponents(<Result lang={lang} search={field} />); 
            setAutoComponent([])
          }}
          aria-label="search"
        >
          <i className="fas fa-search" stle={{fontSize:"24px"}}> </i>
        </button>
        <button
          className="clear_btn"
          onClick={() => {
            setField("")
          }} 
          aria-label="clear"
        ><YourSvg style={{
          padding: "7px 0",
          margin: "0 auto",
          width: "30px",
          display: none?"none" : "block"
        }}/></button>
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