import React from 'react';

class Dashboard extends React.Component {

  state = {
    transactions: []
  };

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
          {this.state.transactions.map(value => (
            <p>A Transaction ...</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard;