import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { ReservationFormProps } from 'entities/ReservationFormProps';

export default function ReservationForm ( props : ReservationFormProps ) {

  const [form, setState] = useState({
    id :  props.targetReservation.id,
    reservationDate : props.targetReservation.reservationDate,
    timeFrom : props.targetReservation.timeFrom,
    timeTo: props.targetReservation.timeTo,
    reservee : props.targetReservation.reservee,
    venue : props.targetReservation.venue
  })

  useEffect(() => {
    setState({
      id :  props.targetReservation.id,
      reservationDate : props.targetReservation.reservationDate,
      timeFrom : props.targetReservation.timeFrom,
      timeTo: props.targetReservation.timeTo,
      reservee : props.targetReservation.reservee,
      venue : props.targetReservation.venue
    })
  }, [
    props.targetReservation.id, props.targetReservation.reservationDate,
    props.targetReservation.timeFrom, props.targetReservation.timeTo,
    props.targetReservation.reservee, props.targetReservation.venue
  ]);

  const updateField = e => {
    setState({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const changeReservationDate = (date : Date) => {
    setState({
      ...form,
      reservationDate : date
    })
  }

  const changeTimeFrom = (date : Date) => {
    setState({
      ...form,
      timeFrom : date.getTime()
    })
  }

  const changeTimeTo = (date : Date) => {
    setState({
      ...form,
      timeTo : date.getTime()
    })
  }

  const onClear = () => {
    setState({
      ...form,
      reservationDate : new Date(),
      timeFrom : null,
      timeTo: null,
      reservee : '',
      venue : ''
    })
  }

  return(
    <Modal show={ props.isShown } onHide={ props.onCancel } centered>
      <Modal.Header closeButton>
        <h5 className="modal-title">
            {props.isNew ? 'Create' : 'Update'} Reservation
        </h5>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <DatePicker
              className="form-control"
              selected = { form.reservationDate || ""}
              minDate = { new Date () }
              onChange = { changeReservationDate }>
            </DatePicker>
          </Form.Group>

          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>
              Time From
              </Form.Label>
              <DatePicker name="timeFrom"
                className="form-control"
                selected = { form.timeFrom || ""}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                onChange = { changeTimeFrom }>
            </DatePicker>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                Time To
              </Form.Label>
              <DatePicker name="timeTo"
                className="form-control"
                selected = { form.timeTo || ""}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                onChange = { changeTimeTo }>
            </DatePicker>
            </Form.Group>
          </Form.Row>

          
          <Form.Group>
            <Form.Label>
              Reservee
            </Form.Label>
            <Form.Control as="input" name="reservee"
              type="text" value={ form.reservee || "" } 
              onChange = { updateField }>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Venue
            </Form.Label>
            <Form.Control as="select" name="venue"
              className='custom-select' value={ form.venue || "" }
              onChange = { updateField }>
              <option value='' disabled> Choose a venue ... </option>
              <option value='Shangrila - Ballroom Hall'> Shangrila - Ballroom Hall </option>
              <option value='Megatrade Hall A'> Megatrade Hall A </option>
              <option value='Grid X Griddle'> Grid X Griddle </option>
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
          onClick={ () => props.onSave(form) }>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
