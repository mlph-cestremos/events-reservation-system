import React, { useState } from "react";
import { Button, FormControl, Form,Dropdown } from "react-bootstrap";
import styled from 'styled-components';
import {FieldValidation}   from "components/validation";

const RegistrationDiv = styled.div`padding: 60px 0;`;
const RegistrationH3 = styled.h3`text-align: center;`;
const RegistrationForm = styled.form`margin: 0 auto;
max-width: 320px;`;



export default function Registration () {
 
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [roles, setRoles] = useState("Select role");
    
   
  
    
    const fieldVal =  FieldValidation(
      [
        {
          value:firstname,
          name:"firstname",
          parameter:{
            isEmpty:false
          }
        },
        {
          value:lastname,
          name:"lastname",
          parameter:{
            isEmpty:false
          }
        },
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
        },
        {
          value:confirm_password,
           name:"confirm_password",
          parameter:{
            isEmpty:false,
            min:6,
            equalto:"password"
         
          }
        }
      ]
    );

    function handleSubmit( event:React.FormEvent<HTMLFormElement> ) {
      event.preventDefault();
    }
    

   

    return (
        
      <RegistrationDiv>
        <RegistrationH3>Registration</RegistrationH3>
        <RegistrationForm onSubmit={handleSubmit}>
          <Form.Group controlId="firstname">
            <FormControl
              autoFocus
              type="text"
              placeholder="First Name*"
              value={firstname}
              onChange={e => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="lastname">
            <FormControl
              placeholder="Last Name*"
              type="text"
              value={lastname} 
              onChange={e => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <FormControl
              placeholder="Email*"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <FormControl
               placeholder="Password*"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="confirm-password">
            <FormControl
               placeholder="Confirm password"
              value={confirm_password} 
              onChange={e => setConfirmPassword(e.target.value)}
              type="password"
            />
          </Form.Group>

          <Form.Group controlId="contactnumber">
            <FormControl
              placeholder="Contact Number"
              type="text"
              value={contactnumber}
              onChange={e => setContactNumber(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group controlId="s">
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basics"
              >
                {roles}  
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              <Dropdown.Item title ="Customer"  onClick={e => setRoles(e.target.title)}
              >Customer</Dropdown.Item>
              <Dropdown.Item title ="Venue Provider"
               onClick={e => setRoles(e.target.title)}>Venue Provider</Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>

          </Form.Group>
          <Button block disabled={!fieldVal.isValid()} type="submit">
            Register
          </Button>
        </RegistrationForm>
      </RegistrationDiv>
    );
    
  }
  
  