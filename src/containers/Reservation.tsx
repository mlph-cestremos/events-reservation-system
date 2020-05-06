import React, { useState } from 'react';
import { Confirmation, ReservationForm, ReservationTable, CustomTooltip } from 'components';
import { Link } from 'react-router-dom';
import { Reservation } from 'entities/Reservation';

export default function ReservationContainer () {
    // default state
  const [uiState, setUiState] = useState({
    showDeleteModal: false,
    showUpdateModal: false,
    showCreateModal: false,
    isNew: true,
    targetReservation: null
  });

  const emptyReservation = {
    id: '',
    reservationDate : new Date(),
    timeFrom : '',
    timeTo : '',
    reservee : '',
    venue : '',
    status : ''
  }
  
  const data = [
    { 
      id: 0,
      reservationDate: new Date("06/01/2020"), 
      timeFrom : 1588667456964,
      timeTo : 1588674623216,
      reservee: "Katherine Villegas",
      venue: "Shangrila - Ballroom Hall"
    },
    { 
      id: 1,
      reservationDate: new Date("06/02/2020"), 
      timeFrom : 1588640414813,
      timeTo : 1588647646953,
      reservee: "Clarissa Estremos",
      venue: "Megatrade Hall A"
    },
    { 
      id: 2,
      reservationDate: new Date("06/03/2020"), 
      timeFrom : 1588676401339,
      timeTo : 1588683617562,
      reservee: "Ireene Ong",
      venue: "Grid X Griddle"
    }
  ];

  // Setting state
  const [ reservations, setReservations ] = useState(data)

  const onDeleteRequest = (id : number) => {
    setUiState({
      ...uiState,
      showDeleteModal: true,
      targetReservation: reservations[id]
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
    setReservations(reservations.filter(reservation => reservation.id !== uiState.targetReservation.id))

    setUiState({
      ...uiState,
      showDeleteModal: false,
      targetReservation: null
    });
  }

  const onUpdateRequest = (id : number) => {
    setUiState({
      ...uiState,
      showUpdateModal: true,
      isNew: false,
      targetReservation: reservations[id]
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

  const onUpdateSuccess = (updatedReservation : Reservation) => {
    setReservations(reservations.map(reservation => (reservation.id === updatedReservation.id ? updatedReservation : reservation)))
    setUiState({
      ...uiState,
      showUpdateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  const onCreateRequest = () => {
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

  const onCreateSuccess = (reservation : Reservation) => {
    reservation.id = reservations.length
    reservations.push(reservation)
    setReservations(reservations)

    setUiState({
      ...uiState,
      showCreateModal: false,
      isNew: true,
      targetReservation: null
    });
  }

  return (
    <section>
      <div className="container">
        <h1> Reservations </h1>
        <Link to="#" className="float over-accordion" onClick={ onCreateRequest }>
          <CustomTooltip placement="top"
            value="Add Reservation">
                <i className="fa fa-plus my-float"></i>
          </CustomTooltip>
        </Link>

        <ReservationTable reservations={reservations} updateRequest={onUpdateRequest} deleteRequest={onDeleteRequest}/>
      </div>

      <Confirmation
        title="Delete Reservation"
        isShown={uiState.showDeleteModal && uiState.targetReservation ? true : false}
        onCancel={onDeleteCancel}
        onConfirm={onDeleteSuccess}>
          {
            uiState.targetReservation ? 
            <>
            You are going to delete a reservation with the following details: <br/><br/>
            Reservation Date: {uiState.targetReservation.reservationDate.toLocaleDateString()} <br/>
            Reservation Time: {new Date(uiState.targetReservation.timeFrom).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + " - "+ new Date(uiState.targetReservation.timeTo).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} <br />
            Reservee: {uiState.targetReservation.reservee} <br/>
            Venue: {uiState.targetReservation.venue} <br/><br/>
            Are you sure you want to delete?
            </> : ''
          }
      </Confirmation>

      <ReservationForm
        isNew={ uiState.targetReservation ? false : true }
        isShown={ uiState.showUpdateModal || uiState.showCreateModal }
        targetReservation={ uiState.targetReservation ? uiState.targetReservation : emptyReservation }
        onCancel= { uiState.targetReservation ? onUpdateCancel : onCreateCancel }
        onSave={ uiState.targetReservation ? onUpdateSuccess : onCreateSuccess }
      />
    </section>
  )
}