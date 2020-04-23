import React, { useState } from 'react'
import AddVenueForm from './forms/AddVenueForm'
import EditVenueForm from './forms/EditVenueForm'
import VenueTable from './tables/VenueTable'
import { Confirmation, CustomTooltip } from 'modules';
import { Link } from 'react-router-dom';

const Venue = () => {
	// Data
	const venuesData = [
        { 
            id: 0,
            name: "Megamall",
            location: "Mandaluyong",
            noOfRooms: 3
        },
        { 
            id: 0,
            name: "Starmall",
            location: "Mandaluyong",
            noOfRooms: 4
        },
        { 
            id: 0,
            name: "Tektite",
            location: "Pasig",
            noOfRooms: 10
        },
    ]
    
    // default state
    const [uiState, setUiState] = useState({
        showDeleteModal: false,
        showUpdateModal: false,
        showCreateModal: false,
        targetVenue: null
    });

	// Setting state
	const [ venues, setVenues ] = useState(venuesData)

    // CRUD operations
    // ADD VENUE
	const addVenue = venue => {
		venue.id = venues.length + 1
        setVenues([ ...venues, venue ])
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
            targetVenue: null
        });
    }

    // UPDATE VENUE
	const updateVenue = (id, updatedVenue) => {
        setVenues(venues.map(venue => (venue.id === id ? updatedVenue : venue)))
        setUiState({
            ...uiState,
            showUpdateModal: false
          });
    }

    const onUpdateRequest = (venue) => {
        setUiState({
        ...uiState,
        showUpdateModal: true,
        targetVenue: { id: venue.id, name: venue.name, location: venue.location, noOfRooms: venue.noOfRooms }
        });
    }

    const onUpdateCancel = () => {
        setUiState({
            ...uiState,
            showUpdateModal: false,
            targetVenue: null
        });
    }

    // DELETE VENUE
    const onDeleteRequest = (id) => {
        setUiState({
          ...uiState,
          showDeleteModal: true,
          targetVenue: venues[id]
        });
    }

    const onDeleteCancel = () => {
        setUiState({
          ...uiState,
          showDeleteModal: false,
          targetVenue: null
        });
    }
    
    const onDeleteSuccess = () => {
        setVenues(venues.filter(venue => venue.id !== uiState.targetVenue.id))
        setUiState({
          ...uiState,
          showDeleteModal: false,
          targetVenue: null
        });
    }
    
	return (
        <section>
            <div className="container">
                <h1>Venues</h1>
                <Link to="#" className="float over-accordion" onClick={onCreateRequest}>
                    <CustomTooltip placement="top" value="Add Venue">
                        <i className="fa fa-plus my-float"></i>
                    </CustomTooltip>
               </Link>
                <div className="flex-row">
                    <div className="flex-large">
                        <VenueTable venues={venues} onUpdateRequest={onUpdateRequest} deleteVenue={onDeleteRequest} />
                    </div>
                </div>
            </div>
            <AddVenueForm 
                addVenue={addVenue}
                onCancel={onCreateCancel}
                isShown={uiState.showCreateModal}>
            </AddVenueForm>
            <EditVenueForm
                updateVenue={updateVenue}
                isShown={uiState.showUpdateModal && uiState.targetVenue != null}
                onCancel={onUpdateCancel}
                currentVenue={uiState.targetVenue}>
            </EditVenueForm>
            <Confirmation
                title="Delete Venue"
                isShown={uiState.showDeleteModal && uiState.targetVenue != null}
                onCancel={onDeleteCancel}
                onConfirm={onDeleteSuccess}>
                {
                    uiState.targetVenue ? 
                    <>
                    Are you sure you want to delete venue {uiState.targetVenue.name}?
                    </> : ''
                }
            </Confirmation>
      </section>
	)
}

export default Venue