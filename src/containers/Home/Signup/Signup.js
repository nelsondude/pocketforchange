import React, {Fragment} from 'react';
import {withRouter} from "react-router-dom";
import {Buffer} from "components";
import './Signup.css';

class Signup extends React.Component {
  state = {
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/b/bb/American_Red_Cross_Logo.svg',
      'https://www.getinthepicture.org/sites/default/files/images/partner/logos/unicef.png',
      'https://negroniweek.com/wp-content/uploads/USBG-logo.jpg'
    ]
  };

  handleGetStarted = () => {
    this.props.history.push('/get-started');
  };

  render() {
    return (
      <div className="Signup">
        <Buffer height={"150px"}/>
        <div className="row">
          <div className="col-xs-6">
            <h1>Pocket For Change</h1>
            <h4 className="text-muted">Automate and Donate</h4>
            <small className="text-muted">Helping Charities around the world raise more money. <br/>Make a difference today.</small>

          </div>
          <div className="col-xs-6">
            <img className="img-responsive" src="https://cdn.onlinewebfonts.com/svg/img_451440.png" alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <button className="btn btn-success" onClick={this.handleGetStarted}>Get Started Today</button>
          </div>
        </div>
        <Buffer/>
        <div className="row">
          <div className="col-xs-12 text-center">
            <small className="text-muted">Trusted by more then 1000 charities worldwide.</small>
            <div className="landing-images">
              {this.state.images.map(url => (
                <img src={url} alt=""/>
              ))}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(Signup);