import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GroupsContainer from "./components/GroupsContainer/GroupsContainer";
import GroupPage from "./components/GroupPage/GroupPage";
import HomePage from "./components/HomePage";
import CreateGroupForm from "./components/CreateGroupForm/CreateGroupForm";
import EditGroupForm from "./components/EditGroupForm/EditGroupForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/groups">
            <GroupsContainer />
          </Route>
          <Route exact path="/groups/:id">
            <GroupPage />
          </Route>
          <Route exact path="/createGroup">
            <CreateGroupForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
