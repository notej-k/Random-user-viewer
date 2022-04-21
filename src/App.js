import React from 'react';
import './App.css';
import MapComponent from './Components/MapComponent.js'
import UserInformation from '../src/Components/UserInformation'
import { useState, useEffect } from 'react';
import { isValidNation  } from './util'

const BASE_URL = 'https://randomuser.me/api/1.3'

function App() {
  const [data, setData] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  const handleSetState  = (countryCode) => {
    setCountryCode(countryCode)
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      setData(data.results)
    })();
  }, [])

  useEffect(() => {
    (async () => {
      if (isValidNation(countryCode)){

      const response =  await fetch(`${BASE_URL}/?nat=${countryCode}`);
      const data = await response.json();

      setData(data.results)
      }
    })();
  }, [countryCode])


  if(!data || !data[0]) {
    return <></>
  }

  const firstName = data[0].name.first;
  const gender = data[0].gender;
  const email = data[0].email;
  const location = data[0].location.country;
  const latitude = data[0].location.coordinates.latitude;
  const longitude = data[0].location.coordinates.longitude;

  return (
    <>
      <UserInformation
        firstName={firstName}
        gender={gender}
        email={email}
        location={location}
        handleSetState={handleSetState}
      />
      <div className='map'>
        <MapComponent latitude={latitude} longitude={longitude} />
      </div>
    </>
  );
}

export default App;
