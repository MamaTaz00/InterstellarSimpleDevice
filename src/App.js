import './App.css';
import { React, Component } from 'react';
import { connect } from 'react-redux';
import { fetchForex } from './redux/actions/data-actions';
class App extends Component {
  
  componentDidMount() {
    this.props.fetchForex()
    console.log(this.props.forex)
  }
  render() {
    
    return (
      <>
        <h1>{this.props.forex[0].value}</h1>
        {this.props.forex.map((w) => {
          return (
            <h1>{w.value}</h1>
          )
        })}
      </>
    );
  }
  
}
const mapStateToProps = state => ({
  forex: state.forex.data,
});

export default connect(mapStateToProps, { fetchForex })(App);

