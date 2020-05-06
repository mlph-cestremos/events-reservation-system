import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { CustomTooltip } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReservationTableProps } from 'entities/ReservationTableProps';

export default function ReservationTable (props : ReservationTableProps) {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th> Reservation Date </th>
            <th> Reservation Time </th>
            <th> Reservee </th>
            <th> Venue </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            props.reservations.map(reservation => 
              <tr key={reservation.id}>
                <td> {reservation.reservationDate.toLocaleDateString()} </td>
                <td> {new Date(reservation.timeFrom).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + " - "+ new Date(reservation.timeTo).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </td>
                <td> {reservation.reservee} </td>
                <td> {reservation.venue} </td>
                <td align="center">
                <Button variant="link" onClick={ () => props.updateRequest(reservation.id) }>
                    <CustomTooltip placement="top"
                      value="Update Reservation">
                        <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                      </CustomTooltip>
                  </Button>
                  <Button variant="link" onClick={ () => props.deleteRequest(reservation.id) }>
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
    )
}