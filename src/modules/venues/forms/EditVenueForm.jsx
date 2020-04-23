import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, } from 'react-bootstrap';

const EditVenueForm = props => {
    
    const [venue, setVenue] = useState([props.currentVenue])
    useEffect(() => {
        setVenue(props.currentVenue)
      }, [props.currentVenue]);


    const handleInputChange = event => {
        const { name, value } = event.target
        setVenue({ ...venue, [name]: value })
    }

    return (
        <Modal show={props.isShown} onHide={ props.onCancel } centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    Edit Venue
                </h5>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="input"
                            type="text" name="name" value={venue?.name || '' } onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="input"
                            type="text" name="location" value={venue?.location || ''} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>No. of Rooms</Form.Label>
                        <Form.Control as="input"
                            type="number" name="noOfRooms" value={venue?.noOfRooms || ''} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="button" onClick={() => props.updateVenue(venue.id, venue)}>
                        Submit 
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    )
}

export default EditVenueForm;
