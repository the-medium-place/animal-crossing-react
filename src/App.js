import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from './pages/UserPage';
import NewUser from './pages/NewUser';
import Nav from './components/Nav';
import SearchPage from './pages/SearchPage';
import UserLogin from './pages/UserLogin';
import './App.css';
import API from './utils/API';
import { AuthProvider, PrivateRoute } from 'react-auth-kit';

// MATERIALIZE IMPORTS
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css'; // imports materialize js
// M.AutoInit(); // import all Materialize here?

function App() {

  // const [id, setId] = useState()
  // const [currentUser,setCurrentUser] = useState(false);

  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();

  // useEffect(()=>{
  //   API.readSessions().then(res=>{
  //     if(res.data.user){
  //       // console.log(res.data.user.id);
  //       setCurrentUser(res.data.user);
  //       setId(res.data.user.id);
  //       // setId(res.data.user[id])
  //     } else {
  //       setCurrentUser(false)
  //       // setId('');
  //     }
  //   })
  // },[])

  const loginSubmitHandler = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  }

  const logoutHandle = () => {
    setAccessToken();
    setRefreshToken();
  }
  console.log("accessToken: ", accessToken)
  console.log("refreshToken: ", refreshToken)
  // console.log("user info: ", currentUser, '\nID: ', id)
  return (
    <AuthProvider authStorageType={'cookie'}
      authStorageName={'_auth_t'}
      authTimeStorageName={'_auth_time'}
      stateStorageName={'_auth_state'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <Router>
        {/* <Nav currentUser={currentUser} logoutHandle={logoutHandle} /> */}
        <Switch>
          <Route exact path={['/newuser']}>
            <NewUser />
          </Route>
          <Route exact path={['/', '/search']}>
            <SearchPage />
          </Route>
          <Route exact path={['/login']}>
            <UserLogin submitHandler={loginSubmitHandler} />
          </Route>
          {/* <Route exact path={["/users/:id"]}>
            <UserPage />
          </Route> */}
          <PrivateRoute component={UserPage} path={"/users"} loginPath={'/login'} exact />
        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
