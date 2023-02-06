import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { CircleParticle2 } from '../../images';

const BlueCircleParticle = ({className}) => {
  return (
    <span className={classNames(className)}>
        <ReactSVG src={CircleParticle2}/>
    </span>
  )
}

export default BlueCircleParticle;

BlueCircleParticle.propTypes = {
  classNames: PropTypes.string
};