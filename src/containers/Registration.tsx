import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import "./Registration.css";

import {FieldValidation}   from "../components/validation";

export default function Registration () {

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
            min:4,
            max:15,
          }
        }
      ]
    );
  

   
  
    function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {
      event.preventDefault();
    }
  
    return (
        
      <div className="Registration">
        <h3>Registration</h3>
        <form onSubmit={handleSubmit}>
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
          {fieldVal.message()}
           
          <Button block disabled={!fieldVal.isValid()} type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }