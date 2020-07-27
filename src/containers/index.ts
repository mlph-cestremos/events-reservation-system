import Registration from 'containers/Registration';
import Login from 'containers/Login';
import ReservationContainer from 'containers/Reservation';
import VenueContainer from 'containers/Venue';
import UserContainer from 'containers/User';
import DashboardContainer from 'containers/Dashboard';
import MainScreen from 'containers/MainScreen';
import GuestScreen from 'containers/GuestScreen';

export {
    // public pages
    Login,
    Registration,
    // private pages
    MainScreen,
    DashboardContainer,
    UserContainer,
    VenueContainer,
    ReservationContainer,
    GuestScreen
}