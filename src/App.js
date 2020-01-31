import React,{ useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FetchExample from './components/demos/FetchExample';
import LinksList from './components/basics/LinksList';
import LinksListAlt from './components/basics/LinksListAlt';
import Layout from './components/vimeo-machine-replica/Layout';
import LinksData from './data/LinksData';
import NavigationBar from './components/basics/NavigationBar';
import VimeoMachineReplica from "./components/vimeo-machine-replica/Container";
import VimeoMachineRebuilt from "./components/vimeo-machine-rebuilt/VimeoMachine";
import Test from "./components/Test"

function App() {
  const Home = (props) => {
    return (
      <div>
        <h1>home.</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Layout>
        <NavigationBar links={ LinksData } />
        <div style={{marginTop:"30px"}}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/vimeo-machine-replica" component={VimeoMachineReplica} />
              <Route path="/vimeo-machine-rebuilt" component={VimeoMachineRebuilt} />
              <Route path="/fetch-example" render={() => {return (<FetchExample />)}  } />
              <Route path="/links-list" render={ (props) => { return (<LinksList links={LinksData}/>) } } />
              <Route path="/test" render={ (props) => { return (<Test />) } } />
            </Switch>
          </Router>
        </div>
      </Layout>
    </div>
  );
}

export default App;
