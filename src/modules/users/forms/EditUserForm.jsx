import React, { useState, useEffect, setState } from 'react'
import { Modal, Button, Form, } from 'react-bootstrap';

const EditUserForm = ({updateUser, isShown, currentUser}) => {
    
    // const initialFormState = useState(currentUser)
    const [user, setUser] = useState([currentUser])
    useEffect(() => {
        setUser(currentUser)
      }, [currentUser]);


    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
        
    }

    return (
        <Modal show={isShown} centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    Edit User
                </h5>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="input"
                            type="text" name="name" value={user?.name} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control as="input"
                            type="text" name="username" value={user?.username} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control as="input"
                            type="email" name="email" value={user?.email} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control as="input"
                            type="text" name="contactNo" value={user?.contactNo} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Venue</Form.Label>
                        <Form.Control as="select"
                            className='custom-select' name="status" value={user?.status} onChange={handleInputChange}>
                            <option value='default' disabled> Choose a status ... </option>
                            <option value="Active"> Active </option>
                            <option value="Inactive"> Inactive</option>
                        </Form.Control>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="button" onClick={() => updateUser(user.id, user)}>
                        Submit 
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    )
}

export default EditUserForm;
