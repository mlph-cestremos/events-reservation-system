import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import styled from 'styled-components';

export default function Registration () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {
      event.preventDefault();
    }
    
    const Registration = styled.div`padding: 60px 0;`;
    const RegistrationH3 = styled.h3`text-align: center;`;
    const RegistrationForm = styled.h3`margin: 0 auto;
    max-width: 320px;`;
    return (
        
      <Registration>
        <RegistrationH3>Registration</RegistrationH3>
        <RegistrationForm onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Button block disabled={!validateForm()} type="submit">
            Register
          </Button>
        </RegistrationForm>
      </Registration>
    );
  }
