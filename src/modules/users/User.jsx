import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
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
	const addUser = user => {
		user.id = users.length + 1
        setUsers([ ...users, user ])
        setUiState({
            ...uiState,
            showCreateModal: false
          });
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}
    
    const onCreateRequest = () => {
        setUiState({
            ...uiState,
            showCreateModal: true
        });
    }

    const onUpdateRequest = (user) => {
        setUiState({
        ...uiState,
        showUpdateModal: true,
        targetUser: { id: user.id, name: user.name, username: user.username, email: user.email, contactNo: user.contactNo, status: user.status }
        });
    }

      const onCreateCancel = () => {
        setUiState({
          ...uiState,
          showCreateModal: false,
          targetUser: null
        });
      }

	return (
        <section>
            <div className="container">
                <h1>Users</h1>
                <Link to="#" className="float over-accordion" onClick={onCreateRequest}>
                <i className="fa fa-plus my-float"></i>
               </Link>
                <div className="flex-row">
                    <div className="flex-large">
                        <UserTable users={users} onUpdateRequest={onUpdateRequest} deleteUser={deleteUser} />
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
                currentUser={uiState.targetUser}>
            </EditUserForm>
      </section>
	)
}

export default User