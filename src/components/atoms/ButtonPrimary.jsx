import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ children, className, onClick, ...props }) => {
  return (
    <button onClick={onClick} className={classNames(
      "text-white rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken",
      className
    )}
      {...props}
    >
      {children}
    </button >
  )
}

export default ButtonPrimary;

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};