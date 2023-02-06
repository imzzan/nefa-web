import React, { useState } from "react";
import PropTypes from "prop-types";
import ClickOutComponent from "react-onclickout";
import classNames from "classnames";
import { Btc, Etharium, Usd } from "../../images";
import { BsChevronDown } from "react-icons/bs";

const Select = ({onChange, value = "BTC", icon, name}) => {
  const data = [
    {
      name: "BTC",
      code: "BTC",
      icon: Btc,
    },
    {
      name: "USD",
      code: "USD",
      icon: Usd,
    },
    {
      name: "ETH",
      code: "ETH",
      icon: Etharium,
    },
  ];

  // Find Initial Coin
  const initialCoin = data.find(({ code }) => code === value);
  const [valueSelected, setValueSelected] = useState(initialCoin);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeHandler = (item) => {
    setValueSelected(item);
    setIsOpen(false);
    if (typeof onChange === "function") {
      onChange(item);
    }
  };

  return (
    <div className=" relative">
      <ClickOutComponent onClickOut={() => isOpen && setIsOpen(false)}>
        <div
          className=" border border-purple-50 cursor-pointer rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-[26px] pr-2">
            <img src={icon} alt={name} />
          </div>
          <span className="inline-block mr-2">{name}</span>
          <BsChevronDown />
        </div>
        <div
          className={classNames(
            "absolute top-full right-0 left-0 bg-white z-[2] mt-4 rounded-xl shadow-xl border border-primary overflow-hidden",
            { "invisible opacity-0": !isOpen, "visible opacity-100": isOpen }
          )}
        >
          <div>
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className={classNames(
                    "py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-primary",
                    {
                      "bg-primary text-white": item.name === valueSelected,
                    }
                  )}
                  onClick={() => onChangeHandler(item)}
                >
                  <div className="h-[26px] aspect-square pr-2">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="flex items-center"
                    />
                  </div>
                  <span className="inline-block mr-2">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </ClickOutComponent>
    </div>
  );
};

export default Select;

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
