import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import styled from 'styled-components';

let test={
  "email":false,
  "password":false
}
export default function Registration () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {
      event.preventDefault();
    }
    function onKeyDown(event){
        console.log("Asd",event.currentTarget.id);
        test[event.currentTarget.id]=true;
    }
    function onKeyUp(event){
      console.log("Asd",event.currentTarget.id);
      test[event.currentTarget.id]=false;
    }
    const Registrationdiv = styled.div`padding: 60px 0;`;
    const RegistrationH3 = styled.h3`text-align: center;`;
    const RegistrationForm = styled.h3`margin: 0 auto;
    max-width: 320px;`;
    return (
        
      <Registrationdiv>
        <RegistrationH3>Registration</RegistrationH3>
        <RegistrationForm onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <FormControl
              autoFocus={test['email']}
              tabIndex={0}
              type="email"
              value={email}
              onKeyDown ={onKeyDown}
              onKeyUp ={onKeyUp}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <FormControl
            autoFocus={test['password']}
              tabIndex={1}
              value={password}
              onKeyDown ={onKeyDown}
              onKeyUp ={onKeyUp}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Button block disabled={!validateForm()} type="submit">
            Register
          </Button>
        </RegistrationForm>
      </Registrationdiv>
    );
  }