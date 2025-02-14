import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './utils/theme';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';
import Settings from './pages/Settings';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import './styles/globals.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex">
          <Sidebar isAuthenticated={isAuthenticated} />
          <div className="flex-grow">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/chat" component={ChatPage} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;