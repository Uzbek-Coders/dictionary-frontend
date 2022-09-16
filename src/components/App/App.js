import "./App.css";
import NavBar from "../NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import { About } from "../../Pages/About/About";
import { Article } from "../../Pages/Articles/Articles";
import { RuUz } from "../../Pages/RuUz/RuUz";
import Search from "../Search/Search";
import {readEngUzb} from "../../lib/fetchData.js";
import { useEffect} from "react";

 function App() {
  useEffect( () => {
    async function fetchMyAPI() {
      let response = await readEngUzb();
      response = await response.json()
     console.log(response)
    }
    fetchMyAPI()
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/">
            <Redirect to='/en-uz'/>
            </Route>
            <Route exact path="/en-uz">
              <Search/>
            </Route>
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/articles" component={Article} />
            <Route path="/ru-uz" component={RuUz} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
 
export default App;