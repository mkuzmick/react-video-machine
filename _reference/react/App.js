import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import MarkerMachine from './components/MarkerMachine'
import NoMatch from './components/NoMatch';
import Contact from './components/Contact';
import People from './components/People';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <Layout>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/people" component={People} />
            <Route path="/marker-machine" component={MarkerMachine} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
