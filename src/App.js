import './App.css';
import { React, Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
import Footer from './components/Footer';
import ForexChart from './components/ForexChart';
import UsdInteractionChart from './components/UsdIntereactionChart'
import Dashboard from './components/Dashboard';
class App extends Component {
 
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>    
        </Switch>
        <Footer />
      </>
    );
  }
  
}


export default App;

