import React, { useState } from "react";
import {  FormControl, Form } from "react-bootstrap";
import {IconButton,Tooltip,TextField,Button,Grid,Paper,Typography,Toolbar,AppBar} from '@material-ui/core';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import styled from 'styled-components';


import {FieldValidation}   from "components/validation";
import RoutePaths from 'constants/RoutePaths';
import { useHistory } from "react-router-dom";

const LoginDiv = styled.div`padding: 60px 0;`;
const LoginH3 = styled.h3`text-align: center;`;
const LoginForm = styled.form`margin: 0 auto;
max-width: 320px;`;
const LinkRedirect = styled.div`text-align: center`;


const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {}
export default function Login ( props: ContentProps ) {
  const { classes } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const fieldVal =  FieldValidation(
      [
        {
          value:email,
          name:"email",
          parameter:{
            isEmpty:false
          }
        },
        {
          value:password,
           name:"password",
          parameter:{
            isEmpty:false,
            min:6
         
          }
        }
      ]
    );
    

  function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {

    history.push(RoutePaths.MAIN);
    event.preventDefault();
  }

  return (
    <LoginDiv>
        <LoginH3>Login</LoginH3>
      <LoginForm onSubmit={handleSubmit}>
       
        <TextField
                fullWidth
                placeholder="Emails"
                onChange={e => setEmail(e.target.value)}
                type="email"
                required
                InputProps={{
                 // disableUnderline: true,
                 // className: classes.searchInput,
                }}
              />
        <Form.Group controlId="password" >
         
          <TextField
                fullWidth
                placeholder="Passwords"
                onChange={e => setPassword(e.target.value)}
                type="password"
                InputProps={{
                 // disableUnderline: true,
                 // className: classes.searchInput,
                }}
              />
        </Form.Group>
        
        <Button  disabled={!fieldVal.isValid()} type="submit" variant="contained" color="primary" >
          Login
        </Button>
        <LinkRedirect>
        <Link to={RoutePaths.REGISTER}>Dont have an account yet? Sign Up here</Link>
        </LinkRedirect>
      </LoginForm>
    </LoginDiv>
  );
}