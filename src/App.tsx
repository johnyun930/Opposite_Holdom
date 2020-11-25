import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {MainPage} from './routes/MainPage';
import {SingleGame} from './routes/SingleGame';
import { Login } from './routes/LogIn';
import { Rule } from './routes/Rule';

const App: React.FC=()=> {
  return (
    <BrowserRouter>
    <Switch >
      <Route path="/single" component={SingleGame}/>
      <Route path="/login" component={Login}/>
      <Route path="/how" componet={Rule}/>
      <Route path="/" component={MainPage}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
