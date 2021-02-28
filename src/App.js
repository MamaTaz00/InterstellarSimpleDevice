import './App.css';
import { React, Component } from 'react';
import { connect } from 'react-redux';
import { fetchForex } from './redux/actions/data-actions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
import Footer from './components/Footer';
class App extends Component {
 
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>    
        </Switch>
        <Footer />
      </>
    );
  }
  
}
const mapStateToProps = state => ({
  forex: state.forex.data,
});

export default connect(mapStateToProps, { fetchForex })(App);

