import React, { useState } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

import {FieldValidation}   from "components/validation";
import RoutePaths from 'constants/RoutePaths'
import "./Login.css";


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

          fetch("http://localhost:8080/login",{
            body:JSON.stringify({
              "email":email,
              "password":password
            }),
            method: 'POST',
            mode: "cors", // Type of mode of the request
          cache: "no-cache", // options like default, no-cache, reload, force-cache
        //  credentials: "same-origin"
          })
          .then(res => {
            return res.json();
          })
          .then((result) => {
            const data = JSON.parse(result);
            if(data.statuscode ==1){
              history.replace(RoutePaths.MAIN);
            }else{
              alert(data.statusmessage);
            }
            
          });
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