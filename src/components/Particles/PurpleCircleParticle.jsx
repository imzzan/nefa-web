import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { CircleParticle1 } from '../../images';


const PurpleCircleParticle = ({className}) => {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={CircleParticle1}/>
    </span>
  )
}

export default PurpleCircleParticle;

PurpleCircleParticle.protoTypes = {
  classNames : PropTypes.string
}