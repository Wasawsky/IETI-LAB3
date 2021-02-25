import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {user: '',pwd2: ''};
        this.handleTextChangePwd = this.handleTextChangePwd.bind(this)
        this.handleTextChangeUser = this.handleTextChangeUser.bind(this)
        this.loadDefaultData = this.loadDefaultData.bind(this)
    }

    loadDefaultData(){
        if (localStorage.getItem('name') === this.state.user 
            && localStorage.getItem('pwd') === this.state.pwd2){
            localStorage.setItem('isLoggedIn', true);
        }
    }
    handleTextChangeUser(e) {
        this.setState({
            user: e.target.value
        });
    }

    handleTextChangePwd(e) {
        this.setState({
            pwd2: e.target.value
        });
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h4">Task Planner</Typography>
                        <Avatar className="avatar">
                            <AssignmentTurnedInIcon />
                        </Avatar>
                        
                        <form className="form" onSubmit={this.loadDefaultData} >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">username</InputLabel>
                                <Input  
                                    id="email" 
                                    name="email" 
                                    autoComplete="email" autoFocus 
                                    onChange={this.handleTextChangeUser}
                                    value={this.state.email}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleTextChangePwd}
                                    value={this.state.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Login
                            </Button>
                            <br>
                            </br>
                            <font color="#4A75D9"><u>Create</u> <u>Account</u></font>

                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}