import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomTooltip } from 'components';

export default function UserTable (props ) {
  return(
  <Table striped bordered hover>
    <thead>
      <tr>
        <th> Name </th>
        <th> Username </th>
        <th> Email </th>
        <th> Contact No. </th>
        <th> Status </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td> {user.name} </td>
            <td> {user.username} </td>
            <td> {user.email} </td>
            <td> {user.contactNo} </td>
            <td> {user.status} </td>
            <td align="center">
              <Button variant="link"  onClick={() => { props.onUpdateRequest(user)}}>
                  <CustomTooltip placement="top"
                  value="Update User">
                    <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                  </CustomTooltip>
              </Button>
              <Button variant="link" onClick={() => props.deleteUser(user.id)}>
                <CustomTooltip placement="top"
                  value="Delete User">
                    <FontAwesomeIcon icon='trash'></FontAwesomeIcon>
                  </CustomTooltip>
              </Button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
    </tbody>
  </Table>
)

}