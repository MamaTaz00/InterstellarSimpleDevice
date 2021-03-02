import React, { Component } from 'react'
import ForexChart  from './ForexChart'
import { connect } from 'react-redux';
import { fetchForex } from '../redux/actions/data-actions';

class UsdIntereactionChart extends Component {
    
    componentDidMount() {
        this.props.fetchForex();
    }

    render() {
        return (
            <ForexChart data={this.props.forex}/>
        )
    }
}

const mapStateToProps = state => ({
    forex: state.forex.data,
});

export default connect(mapStateToProps, { fetchForex })(UsdIntereactionChart);