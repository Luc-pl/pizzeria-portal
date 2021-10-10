import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './Login.module.scss';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password:'', authflag:1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    history: PropTypes.node,
  }

  handleChange(event) {
    this.setState({ username: event.state.username, password: event.state.password });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/panel');
  }


  render() {

    return (
      <Grid>
        <Paper elevation={5} className={styles.paperStyle}>
          <Grid align='center' margin-top='20'>
            <Avatar className={styles.avatarStyle}>
              <LockOutlined/>
            </Avatar>
            <h2>Sign in</h2>
          </Grid>
          <TextField 
            type="email"
            placeholder="Email"
            fullWidth
            name="username"
            variant="outlined"
            value={this.state.username}
            onChange={(event) =>
              this.setState({
                [event.target.name]: event.target.value,
              })
            }
            required
            autoFocus
          />
          <TextField 
            type="password"
            placeholder="Password"
            fullWidth
            name="password"
            variant="outlined"
            value={this.state.password}
            onChange={(event) =>
              this.setState({
                [event.target.name]: event.target.value,
              })
            }
            required
          />
          <FormControlLabel 
            control={
              <Checkbox 
                name="checkedB"
                color="primary"
              />
            }
            label="Rember me"
          />
          <Button type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
          <Typography > 
            <Link href="#">
              Forgot password?
            </Link>
          </Typography>
          <Typography > Do you have an account?
            <Link href="#">
              Sign up
            </Link>
          </Typography>
        </Paper>

      </Grid>
    );
  }
}

export default Login;