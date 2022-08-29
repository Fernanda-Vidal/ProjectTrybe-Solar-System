import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <span className="mission-name" data-testid="mission-name">{ name }</span>
        <div className="mission-card-ruler" />
        <span data-testid="mission-year">{ year }</span>
        <span data-testid="mission-country">{ country }</span>
        <span data-testid="mission-destination">{ destination }</span>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
