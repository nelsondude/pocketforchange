import React from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';

class Dashboard extends React.Component {

  state = {
    transactions: []
  };

  componentDidMount() {
    axios.get('/plaid/transactions/')
      .then(res => {
        console.log(res);
        this.setState({transactions: res.data.transactions})
      })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <h3 className="text-center">Account Details</h3>
          </div>
          <div className="col-xs-6">
            <h3 className="text-center">Recent Activity</h3>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center">All Recent Transactions</h3>
          <ul className="list-group">
            {this.state.transactions.length > 0  ? this.state.transactions.map((value, i) => (
              <li className="list-group-item" key={i}>
                {value.name} | <b>${value.amount.toFixed(2)}</b>
              </li>
            )) : <h1>Loading ...</h1>}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ...dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);