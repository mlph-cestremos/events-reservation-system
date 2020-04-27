import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { Confirmation, CustomTooltip } from 'modules';
import { Link } from 'react-router-dom';

const User = () => {
	// Data
	const usersData = [
        { 
            id: 0,
            name: "Katherine Villegas",
            username: "kathso",
            email: "katherine@ideyatech.com",
            contactNo: "6525285",
            status: "Active"
        },
        { 
            id: 1, 
            name: "Clarissa Estremos",
            username: "cestremos",
            email: "clarissa@ideyatech.com",
            contactNo: "6357809",
            status: "Active"
        },
        { 
            id: 2,
            name: "Ireene Ong",
            username: "ireeneong",
            email: "ireene@ideyatech.com",
            contactNo: "09278905672",
            status: "Inactive"
        },
    ]
    
    // default state
    const [uiState, setUiState] = useState({
        showDeleteModal: false,
        showUpdateModal: false,
        showCreateModal: false,
        targetUser: null
    });

	// Setting state
	const [ users, setUsers ] = useState(usersData)

    // CRUD operations
    // ADD USER
	const addUser = user => {
		user.id = users.length + 1
        setUsers([ ...users, user ])
        setUiState({
            ...uiState,
            showCreateModal: false
          });
    }

    const onCreateRequest = () => {
        setUiState({
            ...uiState,
            showCreateModal: true
        });
    }

    const onCreateCancel = () => {
        setUiState({
            ...uiState,
            showCreateModal: false,
            targetUser: null
        });
    }

    // UPDATE USER
	const updateUser = (id, updatedUser) => {
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
        setUiState({
            ...uiState,
            showUpdateModal: false
          });
    }

    const onUpdateRequest = (user) => {
        setUiState({
        ...uiState,
        showUpdateModal: true,
        targetUser: { id: user.id, name: user.name, username: user.username, email: user.email, contactNo: user.contactNo, status: user.status }
        });
    }

    const onUpdateCancel = () => {
        setUiState({
            ...uiState,
            showUpdateModal: false,
            targetUser: null
        });
    }

    // DELETE USER
    const onDeleteRequest = (id) => {
        setUiState({
          ...uiState,
          showDeleteModal: true,
          targetUser: users[id]
        });
    }

    const onDeleteCancel = () => {
        setUiState({
          ...uiState,
          showDeleteModal: false,
          targetUser: null
        });
    }
    
    const onDeleteSuccess = () => {
        setUsers(users.filter(user => user.id !== uiState.targetUser.id))
        setUiState({
          ...uiState,
          showDeleteModal: false,
          targetUser: null
        });
    }
    
	return (
        <section>
            <div className="container">
                <h1>Users</h1>
                <Link to="#" className="float over-accordion" onClick={onCreateRequest}>
                    <CustomTooltip placement="top" value="Add User">
                        <i className="fa fa-plus my-float"></i>
                    </CustomTooltip>
               </Link>
                <div className="flex-row">
                    <div className="flex-large">
                        <UserTable users={users} onUpdateRequest={onUpdateRequest} deleteUser={onDeleteRequest} />
                    </div>
                </div>
            </div>
            <AddUserForm 
                addUser={addUser}
                onCancel={onCreateCancel}
                isShown={uiState.showCreateModal}>
            </AddUserForm>
            <EditUserForm
                updateUser={updateUser}
                isShown={uiState.showUpdateModal && uiState.targetUser != null}
                onCancel={onUpdateCancel}
                currentUser={uiState.targetUser}>
            </EditUserForm>
            <Confirmation
                title="Delete User"
                isShown={uiState.showDeleteModal && uiState.targetUser != null}
                onCancel={onDeleteCancel}
                onConfirm={onDeleteSuccess}>
                {
                    uiState.targetUser ? 
                    <>
                    Are you sure you want to delete user {uiState.targetUser.name}?
                    </> : ''
                }
            </Confirmation>
      </section>
	)
}

export default User