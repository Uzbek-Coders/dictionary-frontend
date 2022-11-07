import React  from "react";
import axios from "axios"
import cutter from "./fetch.js"
import Result from "./Result.js";


 const RuUz = (props) => {
  const [data, setData] = React.useState("Loading...")
  React.useEffect(() => {
    function getRuUz(word){
  
      axios.get(`https://shrouded-escarpment-45572.herokuapp.com/https://uz.wiktionary.org/w/index.php?title=${word}&action=raw`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Origin": "https://uz.wiktionary.org/"
        },
        }).then(function (response) {
          console.log(cutter(response.data))
          setData(cutter(response.data))
    // return response.data 
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.headers);
          } 
          else if (error.request) {
              console.log(error.request);
          } 
          else {
            console.log(error.message);
          }
        console.log(error.config);
      });
      // return aha //
    };
    getRuUz(props.field)
  }, [props.field]);
  
  return (
  <div>
  
    <Result res={data}/>
  </div>
  );
};  

export default RuUz