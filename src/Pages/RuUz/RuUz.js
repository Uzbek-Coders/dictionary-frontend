import React  from "react";
import axios from "axios"

function getRuUz(word){
  axios.get(`http://127.0.0.1:8080/http://localhost:8080/https://uz.wiktionary.org/w/index.php?title=olma&action=raw`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Origin": "https://uz.wiktionary.org/"
    },
    }).then(function (response) {
      console.log('response is : ' + response.data);

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
};

export const RuUz = () => {
  React.useEffect(() => {
    console.log(getRuUz("olma"))
  }, []);
  return (
  <div>
    <h1 style={{ textAlign: "center", fontWeight: 700 }}>
    <img
    alt={"Under Development"}
    src={"https://www.freepnglogos.com/uploads/under-construction-png/under-construction-eisenhower-high-school-prom-0.png"}
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "45%",
        marginTop: "50px"
      }}
    />
    </h1>
  </div>
  );
};  