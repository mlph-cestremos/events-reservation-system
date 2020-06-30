import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";

import {FieldValidation}   from "../components/validation";

import "./Login.css";

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   let fieldVal =  FieldValidation(
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
         
          }
        }
      ]
    );
    

  function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}