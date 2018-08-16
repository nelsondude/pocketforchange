import React, {Fragment} from 'react';
import ReactTable from 'react-table'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {Buffer} from "../../components";

class Dashboard extends React.Component {

  state = {
    organizations: {
      data: [
        {
          name: 'ALS Foundation',
          img: 'url here',
          amount_donated: 100.52,
          payment_plan_description: '1 dollar per day'
        },
        {
          name: 'Red Cross',
          img: 'url here',
          amount_donated: 50.52,
          payment_plan_description: 'round up to the nearest dollar per purchase'
        },
        {
          name: 'Leukemia Foundation',
          img: 'url here',
          amount_donated: 1040.42,
          payment_plan_description: '$10 a week'
        },
      ],
      columns: [
        {Header: 'Name', accessor: 'name'},
        {Header: 'Amount Donated', accessor: 'amount_donated'},
        {Header: 'Payment Plan', accessor: 'payment_plan_description'}
      ]
    },
    todo: [{
      id: 1,
      label: 'SETUP BANK ACCOUNT',
      url: '/add-bank-account'
    }]

  };

  handleDismiss = (index) => {
    let todo = [...this.state.todo];
    todo.splice(index, 1);
    this.setState({todo: todo});
  };

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="text-center">My Organizations</h3>
            <ReactTable
              showPagination={false}
              showPageJump={false}
              pageSize={5}
              data={this.state.organizations.data}
              columns={this.state.organizations.columns}/>
          </div>
        </div>
        <Buffer/>
        <div className="row">
          <div className="col-sm-6">
            <h4>Outstanding Items</h4>
            <div className="list-group">
              {this.state.todo.map((item, i) => (
                <li key={i} className="list-group-item">
                  <Link to={item.url}>{item.label}</Link>
                  <OverlayTrigger placement="top" overlay={
                    <Tooltip id={i + item.label}>
                      <strong>Dismiss this message.</strong>
                    </Tooltip>}>

                    <button type="button" className="close" aria-label="Close" onClick={() => this.handleDismiss(i)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </OverlayTrigger>
                </li>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
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