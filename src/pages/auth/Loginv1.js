import React from 'react';
import { connect } from 'react-redux';
import { userAdmin, userEditor } from '../../api/data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import AppLocalization from '../../widget/AppLocalization';
import { USER_LOGIN } from '../../store/actions/actionTypes';

const Loginv1 = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: userAdmin.email,
    password: userAdmin.password,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const setUserToLogin = (id) => {
    if (id === 1) {
      setValues({ email: userAdmin.email, password: userAdmin.password });
    } else {
      setValues({ email: userEditor.email, password: userEditor.password });
    }
  };

  const authentication = () => {
    props.onToggleAutentication(values.email, values.password);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item sm={8} md={4} lg={4} xs={12}>
        <Card>
          <CardContent>
            <Typography align="center" className={classes.title}>
              React Material-Ui Admin Template
            </Typography>
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange('email')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div align="center">
              <ButtonGroup>
                {/** Button color Warning */}
                <Button
                  className={classes.colorBtn}
                  onClick={() => setUserToLogin(0)}
                >
                  Editor
                </Button>
                <Button
                  className={classes.colorBtn}
                  onClick={() => setUserToLogin(1)}
                >
                  Admin
                </Button>
              </ButtonGroup>
            </div>
            <div className={classes.footer}>
              <AppLocalization />
              <IconButton aria-label="Facebook" className={classes.facebook}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Instagram" className={classes.instagram}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Twitter" className={classes.twitter}>
                <TwitterIcon />
              </IconButton>
              <div className={classes.separator} />
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: '10px' }}
              >
                Sing up
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={authentication}
              >
                Sing in
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(25, 118, 210)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'calc(100% + 16px)',
    margin: '-8px',
    overflow: 'hidden',
    position: 'fixed',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(25, 118, 210)',
    marginBottom: '5px',
  },
  textField: {
    width: '100%',
    marginBottom: '10px',
  },
  facebook: {
    color: '#2196f3',
  },
  instagram: {
    color: '#e1306c',
  },
  twitter: {
    color: '#03a9f4',
  },
  colorBtn: {
    color: '#fda73c',
  },
  separator: {
    flexGrow: 1,
  },
  footer: {
    marginTop: '30px',
    display: 'flex',
  },
}));

const mapDispatchToProps = (dispatch) => ({
  onToggleAutentication: (vemail, vpassword) =>
    dispatch({ type: USER_LOGIN, email: vemail, password: vpassword }),
});

export default connect('', mapDispatchToProps)(Loginv1);
