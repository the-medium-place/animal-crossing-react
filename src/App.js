import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './pages/UserPage';
import NewUser from './pages/NewUser';
import Nav from './components/Nav';
import SearchPage from './pages/SearchPage';
import UserLogin from './pages/UserLogin';
import UserFish from './pages/UserFish';
import UserSeaCreatures from './pages/UserSeaCreatures';
import UserBugs from './pages/UserBugs';
import UserFossils from './pages/UserFossils';
import UserVillagers from './pages/UserVillagers';
import './App.css';
import API from './utils/API';
// import { AuthProvider, PrivateRoute } from 'react-auth-kit';

// MATERIALIZE IMPORTS
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  // const [id, setId] = useState()
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    token: null,
    username: null,
    id: null,
    islandHemisphere: null,
    islandName: null

  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.getUserFromToken(token).then(result => {
        // console.log(result);
        setLoggedInUser({
          isLoggedIn: true,
          token: token,
          username: result.data.username,
          id: result.data.id,
          islandHemisphere: result.data.islandHemisphere,
          islandName: result.data.islandName
        })
        // console.log(loggedInUser);
      })
    }
  }, [])
  // console.log(loggedInUser);

  const loginSubmitHandler = (userObj) => {
    // console.log(userObj);
    setLoggedInUser({
      isLoggedIn: true,
      token: userObj.accessToken,
      username: userObj.username,
      id: userObj.id,
      islandHemisphere: userObj.islandHemisphere,
      islandName: userObj.islandName
    })
  }

  const logoutHandle = () => {
    setLoggedInUser({
      isLoggedIn: false,
      token: null,
      username: null,
      id: null,
      islandHemisphere: null,
      islandName: null

    })
    localStorage.removeItem("token");
  }

  return (

    <Router>
      <Nav loggedInUser={loggedInUser} logoutHandle={logoutHandle} />
      <Switch>
        <Route exact path={['/newuser']}>
          <NewUser />
        </Route>
        <Route exact path={['/search']}>
          <SearchPage loggedInUser={loggedInUser} />
        </Route>
        <Route exact path={['/', '/login']}>
          <UserLogin submitHandler={loginSubmitHandler} />
        </Route>
        <Route exact path={["/users/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserPage loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
        <Route exact path={["/api/fish/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserFish loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
        <Route exact path={["/api/seacreatures/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserSeaCreatures loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
        <Route exact path={["/api/bugs/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserBugs loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
        <Route exact path={["/api/fossils/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserFossils loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
        <Route exact path={["/api/villagers/:id"]}>
          {(loggedInUser.isLoggedIn) ? 
          <UserVillagers loggedInUser={loggedInUser}/> : 
          <UserLogin submitHandler={loginSubmitHandler} />}
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
