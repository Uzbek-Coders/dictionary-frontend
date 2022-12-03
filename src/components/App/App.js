import "./App.css";
import NavBar from "../NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import { About } from "../../Pages/About/About";
import  Article  from "../../Pages/Articles/Article.jsx";
import  RuUz  from "../../Pages/RuUz/RuUz";
import   Search1  from "../../Pages/RuUz/Search.js";
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
            <Route path="/articles">
              <Article />
            </Route>
            <Route path="/articles/search/:text">
              <Article />
            </Route>
            <Route path="/articles/tag/:tag">
              <Article />
            </Route>
            <Route path='/article/:id'>
              <Article />
            </Route>
            <Route path="/ru-uz" component={Search1} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
 
export default App;