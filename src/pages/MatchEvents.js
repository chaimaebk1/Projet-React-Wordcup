// MatchEventsPage.js

import React, { useEffect, useState } from 'react';

const MatchEvents = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Replace API_URL with the actual API endpoint for teams
    fetch('https://livescore-api.com/api-client/competitions/participants.json?key=DlsnYspzw1Dn6QVI&secret=ighrxMDgjehZ4ZgHkJ5jbuSHvw5Cm1kF&competition_id=227&season=2023')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        setTeams(data.data || []);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Teams</h1>
      {teams.map(team => (
        <div key={team.id} className="card my-2">
          <div className="card-body">
            <p className="card-text">Team: {team.name}</p>
            <p className="card-text">Stadium: {team.stadium}</p>
            <p className="card-text">Location: {team.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchEvents;





