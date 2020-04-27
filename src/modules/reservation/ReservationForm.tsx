import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { FormControl } from 'modules';

const ReservationForm = ({isNew, isShown, onCancel, onSave} :any) => {

  const onClear = () => {

  }

  return(
    <Modal show={ isShown } onHide={ onCancel } centered>
      <Modal.Header closeButton>
        <h5 className="modal-title">
            {isNew ? 'Create' : 'Update'} Reservation
        </h5>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={onSave}>
          <Form.Group>
            <Form.Label>
              Date
            </Form.Label>
            {/* <FormControl.DateTime dateFormat={true}>
            </FormControl.DateTime> */}
          </Form.Group>
          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>
              Time From
              </Form.Label>
              {/* <FormControl.DateTime dateFormat={false} timeFormat={'h:mm a'}>
              </FormControl.DateTime> */}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Time To
              </Form.Label>
              {/* <FormControl.DateTime dateFormat={false} timeFormat={'h:mm a'}>
              </FormControl.DateTime> */}
            </Form.Group>
          </Form.Row>

          
          <Form.Group>
            <Form.Label>
              Reservee
            </Form.Label>
            <Form.Control as="input"
              type="text">
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Venue
            </Form.Label>
            <Form.Control as="select"
              className='custom-select'>
              <option value='default' disabled> Choose a venue ... </option>
              <option> Shangrila - Ballroom Hall </option>
              <option> Megatrade Hall A </option>
              <option> Grid X Griddle </option>
          </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark"
          type="button"
          onClick={ () => onClear() }>
          Clear
        </Button>
        <Button variant="primary" 
          type="button"
          onClick={ () => onSave() }>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReservationForm;
