import React, { Component, useState,  } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomTooltip, Confirmation } from 'modules';
import ReservationForm from 'modules/reservation/ReservationForm';
import { Link } from 'react-router-dom';

const Reservation = () => {
  // default state
  const [uiState, setUiState] = useState({
    showDeleteModal: false,
    showUpdateModal: false,
    showCreateModal: false,
    isNew: true,
    targetReservation: null
  });

  const data = [
    { 
      id: 0,
      reservationDate: "01/01/2020", 
      reservee: "Katherine Villegas",
      venue: "Shangrila - Ballroom Hall",
      status: "Approved"
    },
    { 
      id: 1,
      reservationDate: "01/02/2020", 
      reservee: "Clarissa Estremos",
      venue: "Megatrade Hall A",
      status: "For Approval"
    },
    { 
      id: 2,
      reservationDate: "01/03/2020", 
      reservee: "Ireene Ong",
      venue: "Grid X Griddle",
      status: "Cancelled"
    }
  ];

  const onDeleteRequest = (id) => {
    setUiState({
      ...uiState,
      showDeleteModal: true,
      targetReservation: data[id]
    });
  }

  const onDeleteCancel = () => {
    setUiState({
      ...uiState,
      showDeleteModal: false,
      targetReservation: null
    });
  }

  const onDeleteSuccess = () => {
    setUiState({
      ...uiState,
      showDeleteModal: false,
      targetReservation: null
    });
  }

  const onUpdateRequest = (id) => {
    setUiState({
      ...uiState,
      showUpdateModal: true,
      isNew: false,
      targetReservation: data[id]
    });
  }

  const onUpdateCancel = () => {
    setUiState({
      ...uiState,
      showUpdateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  const onUpdateSuccess = () => {
    setUiState({
      ...uiState,
      showUpdateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  const onCreateRequest = (id) => {
    setUiState({
      ...uiState,
      showCreateModal: true,
      isNew: true,
      targetReservation: null
    });
  }

  const onCreateCancel = () => {
    setUiState({
      ...uiState,
      showCreateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  const onCreateSuccess = () => {
    setUiState({
      ...uiState,
      showCreateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  return (
    <section>
      <h1> Reservations </h1>
      <Link to="#" className="float over-accordion" onClick={onCreateRequest}>
        <i className="fa fa-plus my-float"></i>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Reservation Date </th>
            <th> Reservee </th>
            <th> Venue </th>
            <th> Status </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(reservation => 
              <tr key={reservation.id}>
                <td> {reservation.reservationDate} </td>
                <td> {reservation.reservee} </td>
                <td> {reservation.venue} </td>
                <td> {reservation.status} </td>
                <td align="center">
                <Button variant="link" onClick={ () => onUpdateRequest(reservation.id) }>
                    <CustomTooltip placement="top"
                      value="Update Reservation">
                        <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                      </CustomTooltip>
                  </Button>
                  <Button variant="link" onClick={ () => onDeleteRequest(reservation.id) }>
                    <CustomTooltip placement="top"
                      value="Delete Reservation">
                        <FontAwesomeIcon icon='trash'></FontAwesomeIcon>
                      </CustomTooltip>
                  </Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>

      <Confirmation
        title="Delete Reservation"
        isShown={uiState.showDeleteModal && uiState.targetReservation}
        onCancel={onDeleteCancel}
        onConfirm={onDeleteSuccess}>
          {
            uiState.targetReservation ? 
            <>
            You are going to delete a reservation with the following details: <br/><br/>
            Reservation Date: {uiState.targetReservation.reservee} <br/>
            Reservee: {uiState.targetReservation.reservationDate} <br/>
            Venue: {uiState.targetReservation.venue} <br/><br/>
            Are you sure you want to delete?
            </> : ''
          }
      </Confirmation>

      <ReservationForm
        isNew={uiState.isNew}
        isShown={uiState.showUpdateModal && uiState.targetReservation}
        onCancel={onUpdateCancel}
        onSave={onUpdateSuccess}
      >
      </ReservationForm>

      <ReservationForm
        isNew={uiState.isNew}
        isShown={uiState.showCreateModal && !uiState.targetReservation}
        onCancel={onCreateCancel}
        onSave={onCreateSuccess}
      >
      </ReservationForm>
    </section>
  )
}


export default class ReservationPage extends Component {
  render() {
    return <Reservation />
  }
}
