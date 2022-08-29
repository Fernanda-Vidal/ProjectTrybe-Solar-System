import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div id="missions" data-testid="missions">
          {missions.filter(({ name }) => (
            name !== 'Estação Internacional Espacial'
            && name !== 'MESSENGER' && name !== 'Cassini-Huygens'
            && name !== '2001 Mars Odyssey' && name !== 'Mars Surveyor 98 Lander'
            && name !== 'Mars Surveyor 98 Lander' && name !== 'Nozomi (Planeta B)'
            && name !== 'Fobos 2' && name !== 'Cassini/Huygens'
          )).map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
