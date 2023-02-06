import React, {useState} from 'react';
import { BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonSecondary from './ButtonSecondary';


const DropdownButton = ({ className, name, children }) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' relative'>
        <div onClickOut={() => isOpen && setIsOpen(false)}>
            <ButtonSecondary className={className} onClick={() => setIsOpen(!isOpen)}>
                {name}
                <BsChevronDown className="inline ml-2" />
            </ButtonSecondary>
            <div data-testid="dropdown" className={
          classNames('absolute left-0 right-0 top-full transition-all duration-200 z-[1] overflow-hidden mt-2 border border-primary rounded-3xl bg-white shadow-xl', {
            'opacity-100 visible': isOpen,
            'opacity-0 invisible': !isOpen
          })}>
          {children}
        </div>
        </div>
    </div>
  )
}

export default DropdownButton;

DropdownButton.propTypes = {
    classNames: PropTypes.string,
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };
  