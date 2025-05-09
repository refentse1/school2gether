import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return ( 
        <div className='dashboard_navbar'>
            <div className="Navbar">
                <h2>Schools<span id='AppName'>Together</span></h2>
                <li className='Navbar'>
                    <Link to='/'><h3 className="Dashboard_h3"><FontAwesomeIcon icon={faTableCells} /> Dashboard</h3></Link>
                    <Link to='/profile'><h3 className="Dashboard_h3"><FontAwesomeIcon icon={faTableCells} /> Profile</h3></Link>
                    <a href=""><h3 className="MyStudents_h3"><FontAwesomeIcon icon={faUserGroup} /> My students</h3></a>
                    <a href=""><h3 className="Requests_h3"><FontAwesomeIcon icon={faBell} /> Requests</h3></a>
                    <a href=""><h3 className="Schedules_h3"><FontAwesomeIcon icon={faCalendarDays} />  Schedule</h3></a>
                    <Link to="/Contacts"><h3 className='Account_OwnerName'>Session</h3></Link>
                </li>
            </div>
        </div>
     );
}
 
export default Navbar;