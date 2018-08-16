import React from 'react';
import {connect} from 'react-redux';
import './Search.css';
import {Link} from "react-router-dom";
import axios from 'axios-instance';


class Search extends React.Component {
  state = {
    results: [
      {name: 'Org 1', slug: 'org1'},
      {name: 'Org 2', slug: 'org2'},
      {name: 'Org 3', slug: 'org3'},
      {name: 'Org 4', slug: 'org4'},
      {name: 'Org 5', slug: 'org5'}
    ]
  };

  componentDidMount() {
    const param = 'org1';
    axios.get('/api/search?q=' + param)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="Search">
        <h1>Search Results</h1>
        <hr/>
        <div className="list-group">
          {this.state.results.map((result, i) => (
            <Link
              key={i}
              className="list-group-item list-group-item-action"
              to={'/organization/' + result.slug}>{result.name}</Link>
          ))}
        </div>

      </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);