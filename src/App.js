import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './components/UserPage';
import NewUser from './components/NewUser';
import './App.css';

// MATERIALIZE IMPORTS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'; // imports materialize js
M.AutoInit(); // import all Materialize here?

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <UserPage />
        </Route>
        <Route exact path={['/newuser']}>
          <NewUser />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
