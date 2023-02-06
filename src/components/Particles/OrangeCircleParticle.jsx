import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { CircleParticle3 } from '../../images';

const OrangeCircleParticle = ({className}) => {
  return (
    <span className={classNames(className)}>
        <ReactSVG src={CircleParticle3}/>
    </span>
  )
}

export default OrangeCircleParticle;

OrangeCircleParticle.protoTypes = {
    classNames : PropTypes.string
}