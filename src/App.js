import { Route, Switch } from 'react-router-dom';
import './App.css';
import Components from './Components/Components';
import Dashboard from './Components/Dashboard';
import Btn from './Components/Btn';
import Crd from './Components/Crd';
import Login from './Components/Login';
import Err from './Components/Err';
  function App() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/comp'>
            <Components />
          </Route>
          <Route path='/button'>
            <Btn/>
          </Route>
          <Route path='/crd'>
           <Crd/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path='/nopage'>
            <Err/>
          </Route>
        </Switch>

      </div>
    );
  }

export default App;
