import React, { useState } from "react";
import classNames from "classnames";
import { BsChevronUp } from "react-icons/bs";

const FaqItems = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const iconClass = classNames({
    "transition-all duration-100": true,
    "rotate-180": isOpen,
  });

  const contentClass = classNames({
    "text-gray transition-all duration-100 overflow-hidden": true,
    "h-full": isOpen,
    "h-0": !isOpen,
  });

  return (
    <div className=" mb-3 border-b border-lightgray pb-3">
      <div
        className=" flex justify-between py-3 cursor-pointer hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <BsChevronUp className={iconClass} />
      </div>
      <div className={contentClass}>
        <p className="select-none">{children}</p>
      </div>
    </div>
  );
};

export default FaqItems;
