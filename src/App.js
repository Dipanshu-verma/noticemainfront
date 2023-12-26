import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyNoticesPage from './pages/MyNoticesPage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignup = async (formData) => {
    // Add signup logic (use API calls or dummy data)
  };

  const handleLogin = async (formData) => {
    // Add login logic (use API calls or dummy data)
  };

  const handleLogout = () => {
    // Add logout logic
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <SignupPage onSignup={handleSignup} />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />}
        </Route>
        <Route path="/" exact>
          {user ? (
            <HomePage user={user} onLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/my-notices">
          {user ? (
            <MyNoticesPage user={user} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
