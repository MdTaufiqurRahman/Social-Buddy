import logo from './logo.svg';
import Home from './Components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import ShowMore from './Components/Post/ShowMore/ShowMore';


function App() {
  return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/post/:postID">
            <ShowMore></ShowMore>
          </Route>
          </Switch> 
          </div>
       </Router>
  );
}

export default App;
