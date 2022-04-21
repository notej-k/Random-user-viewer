import React from 'react';
import Dropdown from 'react-dropdown';  
import '../styles.css'

const UserInformation = (props) => {
    const options = [ 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NO', 'NL', 'NZ', 'TR', 'US'];


    return (
        <div className='container'>
            <div className='userDataWrapper'>
                <div className='userData'>
                    <p className="userInformation">First name</p>
                    <p className="userInformation">Gender</p>
                    <p className="userInformation">Email</p>
                    <p className="userInformation">Location</p>
                </div>

                <div className='userDataFetched'>
                    <p className="userInformation">{props.firstName}</p>  
                    <p className="userInformation">{props.gender}</p>
                    <p className="userInformation">{props.email}</p>
                    <p className="userInformation">{props.location}</p>   
                    {/* <input onChange={(ev) => { props.handleSetState(ev.target.value)}} /> */}
                </div>
            </div>
             <Dropdown options={options} onChange={(ev) => { props.handleSetState(ev.value)}} value={''} placeholder="Select Country ↓"  className='dropDownClass' />
        </div>
    )
}

export default UserInformation;