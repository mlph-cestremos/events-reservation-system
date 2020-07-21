import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
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


export default function Login () {
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
        <Form.Group controlId="email" >
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" >
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        
        <Button block disabled={!fieldVal.isValid()} type="submit">
          Login
        </Button>
        <LinkRedirect>
        <Link to={RoutePaths.REGISTER}>Dont have an account yet? Sign Up here</Link>
        </LinkRedirect>
      </LoginForm>
    </LoginDiv>
  );
}