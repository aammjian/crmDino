import React, { Component } from "react";
import { Route,Redirect } from "react-router-dom"; 
 
import { makeStyles } from '@material-ui/styles';

import TopBar from '../../components/layouts/topBar';
import LeftBar from '../../components/layouts/leftBar';

class Dashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: sessionStorage.getItem("userId"),
      username: sessionStorage.getItem("username"),
      isOpen : true
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // 注销用户
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    this.setState(prevState => ({
      userId: null,
      username: null,
      isOpen: !prevState.isOpen
    })); 
    
  }

  handleDrawerOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleDrawerClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { match, location } = this.props;
    const { userId, username, isOpen } = this.state; 

    if (sessionStorage.getItem("userId") === null){ 
      return <Redirect to="./login"></Redirect>
    }
    else    {
    return (
       <div>
        {/* 顶部栏 */}
        <TopBar username={username} userId={userId} onLogout={this.handleLogout} onDrawerOpen={this.handleDrawerOpen} open={!isOpen} />  
        {/* //左侧菜单栏 */}
        <LeftBar onDrawerClose={this.handleDrawerClose} open={isOpen}  />
        {/* //主栏目 */}
       </div>
    );
    }
  }
};

export default Dashbord;
