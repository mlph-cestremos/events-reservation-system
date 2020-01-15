import React from 'react';

import { Modal, Button } from 'react-bootstrap';

const Confirmation = ({ title, isShown, onCancel, onConfirm, children }) => {
    return (
        <Modal show={ isShown } onHide={ onCancel } centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    { title }
                </h5>
            </Modal.Header>
            <Modal.Body>
               { children }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark"
                    type="button"
                    onClick={ () => onCancel() }>
                    No
                </Button>
                <Button variant="primary" 
                    type="button"
                    onClick={ () => onConfirm() }>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );

};

export default Confirmation;