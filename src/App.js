import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './pages/UserPage';
import NewUser from './pages/NewUser';
import Nav from './components/Nav';
import SearchPage from './pages/SearchPage';
import UserLogin from './pages/UserLogin';
import './App.css';

// MATERIALIZE IMPORTS
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css'; // imports materialize js
// M.AutoInit(); // import all Materialize here?

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <UserPage />
        </Route>
        <Route exact path={['/newuser']}>
          <NewUser />
        </Route>
        <Route exact path={['/search']}>
          <SearchPage />
        </Route>
        <Route exact path={['/login']}>
          <UserLogin />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
