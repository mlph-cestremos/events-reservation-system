import { Reservation } from './Reservation';

export interface ReservationTableProps {
    reservations : Array<Reservation>,
    updateRequest : (id : number) => void,
    deleteRequest : (id : number) => void
}