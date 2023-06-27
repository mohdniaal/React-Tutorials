import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Create from './create';



function App() {
  const title = 'hiii'
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
