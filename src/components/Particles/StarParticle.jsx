import React from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';
import { StarParticleIcon } from '../../images';
import PropTypes from 'prop-types';

const StarParticle = ({className}) => {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={StarParticleIcon}/>
    </span>
  )
}

export default StarParticle;

StarParticle.propTypes = {
  classNames: PropTypes.string
};

