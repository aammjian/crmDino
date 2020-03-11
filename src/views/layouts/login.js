import React,{Component} from 'react';
import {Redirect} from "react-router-dom"; 
import { withStyles } from '@material-ui/core/styles';
import Contanier from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import axios from "axios";
import "../../config";

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/local';
} else{
    axios.defaults.baseURL = global.constants.apiUrl;
}


const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });




class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "andrew",
            password : "850413",
            redirectToReferrer : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        if (event.target.name === "username"){
            this.setState({
                username : event.target.value
            });
        }
        else if (event.target.name === "password"){
            this.setState({
                password : event.target.value
            });
        }
    }

    handleSubmit(event){
        const _this=this; 
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        if (username.length ===0 || password.length ===0){
            alert("不能为空");
            return ;
        }

        const params = {
            username,
            password
        }
        
        axios.post('/v3/user/login', params) 
        .then(function (response) { 
            sessionStorage.setItem("username",username);
            sessionStorage.setItem("userId",response.data.user.id);  //通过api的返回值，一开始尝试失败，没有注意返回的data，response.data
            _this.setState({
                redirectToReferrer: true
              });
        })
        .catch(function (error) { 
            alert(error.message || "login failed");
        }) 
    }

    render(){
 
        const { from } = this.props.location.state || {from :{pathname : "/"}};
        const {redirectToReferrer } = this.state;
        const { classes } = this.props;
 
        if (sessionStorage.getItem("userId") === null){   
            if (redirectToReferrer) {
                return <Redirect to={from} />;
            }
            return (
                <Contanier component="main" maxWidth="xs">
                    <CssBaseLine />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}><LockOutlinedIcon></LockOutlinedIcon></Avatar>
                        <Typography component="h1" variant ="h5">
                            登录
                        </Typography>
                        <form className={classes.form} 
                            onSubmit={this.handleSubmit}
                            noValidate
                        >
                        
                            <TextField 
                                name="username" 
                                type="text" 
                                value={this.state.username} 
                                onChange={this.handleChange} 
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                label="用户名"
                                autoFocus
                                /> 
                            <TextField 
                                name="password" 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                label="密码" 
                                />
                        
                            <Button 
                                type="submit" 
                                fullWidth 
                                color="primary"
                                className={classes.submit}
                                variant="contained"
                                >登录</Button>
                        </form>
                    </div>
                    
                </Contanier>
            );
        }
        else
        {
            return <Redirect to={from} />;
        }

    }

}

 
export default withStyles(styles)(Login); 