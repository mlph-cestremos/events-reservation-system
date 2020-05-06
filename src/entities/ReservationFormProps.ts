import { Reservation } from './Reservation';

export interface ReservationFormProps {
    isNew: boolean,
    isShown: boolean,
    targetReservation: Reservation,
    onCancel: () => void,
    onSave: (reservation: Reservation) => void
}