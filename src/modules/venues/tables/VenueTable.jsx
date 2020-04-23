import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomTooltip } from 'modules';

const VenueTable = props => (
  
  <Table striped bordered hover>
    <thead>
      <tr>
        <th> Name </th>
        <th> Location </th>
        <th> No. of Rooms </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {props.venues.length > 0 ? (
        props.venues.map(venue => (
          <tr key={venue.id}>
            <td> {venue.name} </td>
            <td> {venue.location} </td>
            <td> {venue.noOfRooms} </td>
            <td align="center">
              <Button variant="link"  onClick={() => { props.onUpdateRequest(venue)}}>
                  <CustomTooltip placement="top"
                  value="Update Venue">
                    <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                  </CustomTooltip>
              </Button>
              <Button variant="link" onClick={() => props.deleteVenue(venue.id)}>
                <CustomTooltip placement="top"
                  value="Delete Venue">
                    <FontAwesomeIcon icon='trash'></FontAwesomeIcon>
                  </CustomTooltip>
              </Button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No venues</td>
          </tr>
        )}
    </tbody>
  </Table>
)

export default VenueTable