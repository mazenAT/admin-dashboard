import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './container/Home';
import Signup from './container/Signup';
import Signin from './container/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
