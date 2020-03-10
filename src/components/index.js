import React, { Component } from "react";
import { Route,Redirect } from "react-router-dom"; 
 
import Header from "./layouts/header";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.ketengchina.com/">
          常州科腾
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>
  );
  }

  
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: sessionStorage.getItem("userId"),
      username: sessionStorage.getItem("username")
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // 注销用户
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    this.setState({
      userId: null,
      username: null
    });
    
  }

  render() {
    const { match, location } = this.props;
    const { userId, username } = this.state;

    if (sessionStorage.getItem("userId") === null){ 
      return <Redirect to="./login"></Redirect>
    }
    else    {
      return (
        <div>
          <Header
            username={username}
            onLogout={this.handleLogout}
            location={location}
          /> 
          asdf


          12312


          312123
          
          <Copyright />
        </div>
      );
    }
  }
}

export default Home;
