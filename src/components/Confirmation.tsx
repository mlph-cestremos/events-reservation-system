import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import { ConfirmationProps } from 'entities/ConfirmationProps';

export default function Confirmation ( props : ConfirmationProps) {
    return (
        <Modal show={ props.isShown } onHide={ props.onCancel } centered>
            <Modal.Header closeButton>
                <h5 className="modal-title">
                    { props.title }
                </h5>
            </Modal.Header>
            <Modal.Body>
               { props.children }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark"
                    type="button"
                    onClick={ () => props.onCancel() }>
                    No
                </Button>
                <Button variant="primary" 
                    type="button"
                    onClick={ () => props.onConfirm() }>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );

};
